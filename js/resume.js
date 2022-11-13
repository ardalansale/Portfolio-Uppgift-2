fetch('./data/resumeData.json')

.then(response => response.json())
.then(data =>{
    let skillslist = document.getElementById("skills")
    let mySkills = data.mySkills
    mySkills.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      skillslist.appendChild(li);
    })

    let toolslist = document.getElementById("tools")
    let myTools = data.myTools
    myTools.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      toolslist.appendChild(li);
    })

    let languageslist = document.getElementById("languages")
    let myLanguages = data.myLanguages
    myLanguages.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      languageslist.appendChild(li);
    })

    let HydroBaylist = document.getElementById("hydrobay")
    let HydroBay = data.HydroBay
    HydroBay.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      HydroBaylist.appendChild(li);
    })

    let FKassanlist = document.getElementById("fkassan")
    let FKassan = data.FKassan
    FKassan.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      FKassanlist.appendChild(li);
    })

    let AreaChicalist = document.getElementById("areachica")
    let AreaChica = data.AreaChica
    AreaChica.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      AreaChicalist.appendChild(li);
    }) 

    let DreamsNordiclist = document.getElementById("dreamsnordic")
    let DreamsNordic = data.DreamsNordic
    DreamsNordic.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      DreamsNordiclist.appendChild(li);
    })

    let FrontEndlist = document.getElementById("frontend")
    let FrontEnd= data.FrontEnd
    FrontEnd.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      FrontEndlist.appendChild(li);
    })

    let UXDesignerlist = document.getElementById("uxdesigner")
    let UXDesigner= data.UXDesigner
    UXDesigner.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      UXDesignerlist.appendChild(li);
    })

    let MusicSoundDesignerlist = document.getElementById("musicsounddesigner")
    let MusicSoundDesigner= data.MusicSoundDesigner
    MusicSoundDesigner.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      MusicSoundDesignerlist.appendChild(li);
    })
})

