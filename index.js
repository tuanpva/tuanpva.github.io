function calculateTCO(containerId, tcoInputEl) {
  const MSRP = parseFloat(document.getElementById(`msrp${containerId}`).value);
  const tax_credit = parseFloat(
    document.getElementById(`tax${containerId}`).value
  );
  const netValue = MSRP - tax_credit;

  const maintenance_cost = parseFloat(
    document.getElementById(`main_cost${containerId}`).value
  );
  const average_mile = parseFloat(
    document.getElementById(`avg_mi${containerId}`).value
  );
  const annual_mileage = parseFloat(document.getElementById("annual_mi").value);
  const num_of_year = parseFloat(document.getElementById("num_year").value);

  let stateCosts;
  let costInputId;

  // Define electricity costs for different states
  if (containerId === "1") {
    stateCosts = {
      test: 0,
      Alaska: 0.219,
      Alabama: 0.144,
      Arkansas: 0.114,
      Arizona: 0.126,
      California: 0.266,
      Colorado: 0.142,
      Connecticut: 0.302,
      "District of Columbia": 0.149,
      Delaware: 0.142,
      Florida: 0.15,
      Georgia: 0.129,
      Hawaii: 0.449,
      Iowa: 0.113,
      Idaho: 0.106,
      Illinois: 0.16,
      Indiana: 0.154,
      Kansas: 0.129,
      Kentucky: 0.127,
      Louisiana: 0.119,
      Massachusetts: 0.317,
      Maryland: 0.159,
      Maine: 0.241,
      Michigan: 0.179,
      Minnesota: 0.131,
      Missouri: 0.107,
      Mississippi: 0.132,
      Montana: 0.107,
      "North Carolina": 0.127,
      "North Dakota": 0.099,
      Nebraska: 0.094,
      "New Hampshire": 0.317,
      "New Jersey": 0.169,
      "New Mexico": 0.135,
      Nevada: 0.168,
      "New York": 0.236,
      Ohio: 0.143,
      Oklahoma: 0.109,
      Oregon: 0.12,
      Pennsylvania: 0.179,
      "Rhode Island": 0.289,
      "South Carolina": 0.139,
      "South Dakota": 0.113,
      Tennessee: 0.121,
      Texas: 0.142,
      Utah: 0.107,
      Virginia: 0.14,
      Vermont: 0.199,
      Washington: 0.105,
      Wisconsin: 0.16,
      "West Virginia": 0.13,
      Wyoming: 0.103,
      "USA Avg": 0.162,
    };
    costInputId = "elec_cost";
  } else if (containerId === "2") {
    stateCosts = {
      test: 0,
      Alaska: 3.97,
      Alabama: 3.26,
      Arkansas: 3.23,
      Arizona: 4.7,
      California: 4.89,
      Colorado: 3.55,
      Connecticut: 3.59,
      "District of Columbia": 3.72,
      Delaware: 3.5,
      Florida: 3.7,
      Georgia: 3.36,
      Hawaii: 4.78,
      Iowa: 3.5,
      Idaho: 3.68,
      Illinois: 4.06,
      Indiana: 3.59,
      Kansas: 3.41,
      Kentucky: 3.4,
      Louisiana: 3.24,
      Massachusetts: 3.49,
      Maryland: 3.56,
      Maine: 3.54,
      Michigan: 3.58,
      Minnesota: 3.58,
      Missouri: 3.36,
      Mississippi: 3.13,
      Montana: 3.49,
      "North Carolina": 3.46,
      "North Dakota": 3.51,
      Nebraska: 3.5,
      "New Hampshire": 3.46,
      "New Jersey": 3.52,
      "New Mexico": 3.64,
      Nevada: 4.27,
      "New York": 3.69,
      Ohio: 3.57,
      Oklahoma: 3.35,
      Oregon: 4.09,
      Pennsylvania: 3.77,
      "Rhode Island": 3.5,
      "South Carolina": 3.32,
      "South Dakota": 3.56,
      Tennessee: 3.31,
      Texas: 3.27,
      Utah: 3.77,
      Virginia: 3.48,
      Vermont: 3.58,
      Washington: 4.58,
      Wisconsin: 3.44,
      "West Virginia": 3.54,
      Wyoming: 3.43,
      "USA Avg": 3.64,
    };
    costInputId = "gas_cost";
  }

  document
    .getElementById(`stateSelect`)
    .addEventListener("change", function () {
      const selectedState = this.value;
      const costInput = document.getElementById(costInputId);

      if (stateCosts[selectedState] !== undefined) {
        costInput.value = stateCosts[selectedState];
      } else {
        costInput.value = ""; // Clear the input if state not found
      }
    });

  // Parse the value when needed (e.g., in a calculation)
  const cost = parseFloat(document.getElementById(costInputId).value);

  const operatingValue =
    maintenance_cost * annual_mileage * num_of_year +
    (annual_mileage / average_mile) * cost * num_of_year;
  const roundedOperatingValue = Math.round(operatingValue);
  const tcoValue = netValue + roundedOperatingValue;
  const formattedTCO = `$${tcoValue}`;
  tcoInputEl.value = formattedTCO;
  //document.getElementById(tcoInputEl).value = totalCost.toFixed(2);
}

// calculateTCO()
// btnEl.addEventListener("click", calculateTCO);
const btnEl1 = document.getElementById("btn1");
const tcoInputEl1 = document.getElementById("tco-result1");
const btnEl2 = document.getElementById("btn2");
const tcoInputEl2 = document.getElementById("tco-result2");

calculateTCO("1", tcoInputEl1);
calculateTCO("2", tcoInputEl2);
btnEl1.addEventListener("click", function () {
  calculateTCO("1", tcoInputEl1);
  calculateTCO("2", tcoInputEl2);
});
