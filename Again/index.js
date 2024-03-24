/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputText = document.getElementById("input-area")
const convertBtn = document.getElementById("convert-btn")
const meterFeet = document.getElementById("meter-feet-meter")
const literGallon = document.getElementById("litter-gallon-litter")
const kiloPounds = document.getElementById("kg-pounds-kg")


convertBtn.addEventListener("click", function(){
   convert("meters", "feet", meterFeet, 3.281)   
   convert("liter", "gallon", literGallon, 0.264)
   convert("kilogram", "pounds", kiloPounds, 2.204)
})

function convert(unitOne, unitTwo, typeOfUnit, rate){
   typeOfUnit.innerHTML = `${inputText.value} ${unitOne} = ${(Number(inputText.value * rate)).toFixed(3)} ${unitTwo} | ${inputText.value} ${unitTwo} = ${(Number(inputText.value/ rate)).toFixed(3)} ${unitOne}`
    
}