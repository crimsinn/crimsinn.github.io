var factList = [
  "One in three seniors die while having Alzheimer's or dementia",
  "More than six million Americans are currently living with Alzheimer's",
  "Elderly black Americans are twice as likely to have Alzheimer's or dementia as elderly whites",
  "Alzheimer's kills more than breast cancer and prostate cancer combined",
"$271.6 billion worth of unpaid care was provided by caregivers in 2021",
"Nearly half of all caregivers who provide for the elderly care for someone with Alzheimer's or dementia",
"Unpaid caregiving is associated with elevated depression and anxiety",
"Age is the most reliable risk factor of Alzheimer's disease",
];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
