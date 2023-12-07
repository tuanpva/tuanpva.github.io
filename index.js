const btnEl = document.getElementById("btn");
const tcoInputEl = document.getElementById("tco-result");


function calculateTCO() {
  const MSRP = parseFloat(document.getElementById("msrp").value);
  const tax_credit = parseFloat(document.getElementById("tax").value);
  const netValue = MSRP - tax_credit;

  const maintenace_cost = parseFloat(document.getElementById("main_cost").value);
  const annual_mileage = parseFloat(document.getElementById("annual_mi").value);
  const average_mile = parseFloat(document.getElementById("avg_mi").value);
  const num_of_year = parseFloat(document.getElementById("num_year").value);
  // Define electricity costs for different states
  const stateElectricityCosts = {
    'Alaska': 0.219,
    'Alabama': 0.144,
    'Arkansas': 0.114,
    'Arizona':0.126,
    'California': 0.266,
    'Colorado': 0.142,
    'Connecticut': 0.302,
    'District of Columbia': 0.149,
    'Delaware': 0.142,
    'Florida': 0.15,
    'Georgia': 0.129,
    'Hawaii': 0.449,
    'Iowa': 0.113,
    'Idaho': 0.106,
    'Illinois': 0.16,
    'Indiana': 0.154,
    'Kansas': 0.129,
    'Kentucky': 0.127,
    'Louisiana': 0.119,
    'Massachusetts': 0.317,
    'Maryland': 0.159,
    'Maine': 0.241,
    'Michigan': 0.179,
    'Minnesota': 0.131,
    'Missouri': 0.107,
    'Mississippi': 0.132,
    'Montana': 0.107,
    'North Carolina': 0.127,
    'North Dakota': 0.099,
    'Nebraska': 0.094,
    'New Hampshire': 0.317,
    'New Jersey': 0.169,
    'New Mexico': 0.135,
    'Nevada': 0.168,
    'New York': 0.236,
    'Ohio': 0.143,
    'Oklahoma': 0.109,
    'Oregon': 0.12,
    'Pennsylvania': 0.179,
    'Rhode Island': 0.289,
    'South Carolina': 0.139,
    'South Dakota': 0.113,
    'Tennessee': 0.121,
    'Texas': 0.142,
    'Utah': 0.107,
    'Virginia':0.14,
    'Vermont': 0.199,
    'Washington': 0.105,
    'Wisconsin': 0.16,
    'West Virginia': 0.13,
    'Wyoming': 0.103,
    'USA Avg': 0.162,
    
  };

// Function to update the electricity_cost based on the selected state
  document.getElementById('stateSelect').addEventListener('change', function() {
    const selectedState = this.value;
    const electricityCostInput = document.getElementById('elec_cost');

    if (stateElectricityCosts[selectedState] !== undefined) {
      electricityCostInput.value = stateElectricityCosts[selectedState];
    } else {
      electricityCostInput.value = ''; // Clear the input if state not found
    }
    
  });

// Parse the value when needed (e.g., in a calculation)
  const electricity_cost = parseFloat(document.getElementById('elec_cost').value);
  const operatingValue = (maintenace_cost * annual_mileage * num_of_year) + (((annual_mileage/average_mile))*electricity_cost*num_of_year);
  const roundedOperatingValue = Math.round(operatingValue);
  const tcoValue = netValue + roundedOperatingValue;
  const formattedTCO = `$${tcoValue}`
  tcoInputEl.value = formattedTCO;

}
calculateTCO()
btnEl.addEventListener("click", calculateTCO);


