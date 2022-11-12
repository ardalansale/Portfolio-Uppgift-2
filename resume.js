fetch('resume-data.json')

    .then(response => response.json())
    .then(data =>{

/* Projects */

    let HydroBaylist = document.getElementById("Hydroponics Bay")
    let HydroBay = data.HydroBay
    HydroBay.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        HydroBaylist.appendChild(li);
    })

    let FKassanlist = document.getElementById("Försäkringskassan")
    let FKassan = data.FKassan
    FKassan.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        FKassanlist.appendChild(li);
})

    let DreamsNordiclist = document.getElementById("Dreams Nordic")
    let DreamsNordic = data.DreamsNordic
    DreamsNordic.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        DreamsNordiclist.appendChild(li);
})


/* Education */

let ChasAcademylist = document.getElementById("Chas Academy")    
let ChasAcademy = data.ChasAcademy
ChasAcademy.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    ChasAcademylist.appendChild(li);
})

let ChangemakerEdulist = document.getElementById("Changemake Educations")
let ChangemakerEdu = data.ChangemakerEdu
myEducation.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    ChangemakerEdulist.appendChild(li);
})

let LinnaeusUniversitylist = document.getElementById("Linnaeus University")
let LinnaeusUniversity = data.LinnaeusUniversity
LinnaeusUniversity.forEach((item)=>{
let li = document.createElement("li");
li.innerText = item;
LinnaeusUniversitylist.appendChild(li);
})



.catch(error => console.log(error));
