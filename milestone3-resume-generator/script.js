"use strict";
// alert("loading")
function addNewWEField() {
    // console.log("Adding new field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter Here');
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    // console.log("Adding new field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter Here');
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function generateResume() {
    var _a, _b, _c, _d, _e, _f;
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1 === null || nameT1 === void 0 ? void 0 : nameT1.innerHTML = nameField;
    //direct
    //name
    (_a = document.getElementById("nameT2")) === null || _a === void 0 ? void 0 : _a.innerHTML = nameField;
    //contact
    (_b = document.getElementById("contactT")) === null || _b === void 0 ? void 0 : _b.innerHTML = document.getElementById("contactField").value;
    //address
    (_c = document.getElementById("addressT")) === null || _c === void 0 ? void 0 : _c.innerHTML = document.getElementById("addressField").value;
    //linkedIn
    (_d = document.getElementById("linkT")) === null || _d === void 0 ? void 0 : _d.innerHTML = document.getElementById("linkedinField").value;
    (_e = document.getElementById("fbT")) === null || _e === void 0 ? void 0 : _e.innerHTML = document.getElementById("fbField").value;
    //objective
    (_f = document.getElementById("objectiveT")) === null || _f === void 0 ? void 0 : _f.innerHTML = document.getElementById("objectiveField").value;
    //work experience
    let we = document.getElementsByClassName("weField");
    let str = "";
    for (let e of we) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;
    // academic Qualification
    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    //code for setting image
    let file = document.getElementById('imgField').files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set the image to template
    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    };
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}
//print resume
function printResume() {
    window.print();
}
