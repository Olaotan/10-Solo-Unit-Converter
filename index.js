/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterRate = 3.281
const literRate = 0.264
const kgRate = 2.204
let inputTxt = document.getElementById("input-area")
const convertBtn = document.getElementById("convert-btn")
let showLength = document.getElementById("meter-feet-meter")
let showVolume = document.getElementById("litter-gallon-litter")
let showMass = document.getElementById("kg-pounds-kg")

 
 convertBtn.addEventListener("click", function(){
     convert(meterRate, showLength, "meters", "feet")
     convert(literRate, showVolume, "liters", "gallons")
     convert(kgRate, showMass, "kilos", "pounds") 
 })
  

function convert(rate, showMetric, unitOne, unitTwo){
        showMetric.textContent = `${inputTxt.value} ${unitOne} = ${(inputTxt.value * rate).toFixed(3)} ${unitTwo} | ${inputTxt.value} ${unitTwo} = ${(inputTxt.value/rate).toFixed(3)} ${unitOne}`
}