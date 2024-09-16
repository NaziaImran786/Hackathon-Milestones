// alert("loading")
function addNewWEField(){
    // console.log("Adding new field");

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('placeholder', 'Enter Here')

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
    
}

function addNewAQField(){
    // console.log("Adding new field");

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('placeholder', 'Enter Here')

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)    
}

function generateResume(){

    let nameField = document.getElementById('nameField').value;

    let nameT1 = document.getElementById('nameT1');

    nameT1?.innerHTML = nameField;
//direct
//name
document.getElementById("nameT2")?.innerHTML = nameField;

//contact
document.getElementById("contactT")?.innerHTML = document.getElementById("contactField").value;

//address
document.getElementById("addressT")?.innerHTML = document.getElementById("addressField").value;

//linkedIn
document.getElementById("linkT")?.innerHTML = document.getElementById("linkedinField").value;


document.getElementById("fbT")?.innerHTML = document.getElementById("fbField").value;

//objective
document.getElementById("objectiveT")?.innerHTML = document.getElementById("objectiveField").value;

//work experience
let we = document.getElementsByClassName("weField")  

let str = ""

for(let e of we){
    str = str + `<li> ${e.value} </li>`
}
document.getElementById("weT").innerHTML = str ;

// academic Qualification
let aqs = document.getElementsByClassName("eqField")  

let str1 = ""

for(let e of aqs){
    str1 = str1 +  `<li> ${e.value} </li>`
}
document.getElementById("aqT").innerHTML = str1 ;

//code for setting image

let file = document.getElementById('imgField').files[0]

console.log(file);

let reader = new FileReader()

reader.readAsDataURL(file)

console.log(reader.result);

//set the image to template

reader.onloadend = function(){
    document.getElementById("imgTemplate").src = reader.result;
}

document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-template").style.display = "block";

}

//print resume
function printResume(){
    window.print()
}


