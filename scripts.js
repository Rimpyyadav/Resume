function addweTextArea() {
    console.log('Work Experience button clicked.');
    var textArea = document.createElement('textarea');

    var container = document.getElementById('we');
    var addButton = document.getElementById('webtn');
    container.insertBefore(textArea, addButton);
}

function addaqTextArea() {
    console.log('Academic Qualification button clicked.');
    var textArea = document.createElement('textarea');

    var container = document.getElementById('aq');
    var addButton = document.getElementById('eqbtn');
    container.insertBefore(textArea, addButton);
}

document.getElementById('webtn').addEventListener('click', addweTextArea);
document.getElementById('eqbtn').addEventListener('click', addaqTextArea);


 function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;
    //direct

    document.getElementById("nameT2").innerHTML = nameField;

    //contact 
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //links

    document.getElementById("linkdinT").innerHTML = document.getElementById("ldField").value;
    document.getElementById("twitterT").innerHTML = document.getElementById("twtField").value;
    document.getElementById("githubT").innerHTML = document.getElementById("gbField").value;

    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("obj").value;


//work experience

   const weTextareas = document.querySelectorAll('.weField');
   const weT = document.getElementById('weT');
   let weContent = '';

   weTextareas.forEach((textarea) => {
       const value = textarea.value.trim();
       if (value) {
           weContent += `<li>${value}</li>`;
       }
   });
   weT.innerHTML = `<ul>${weContent}</ul>`;

   // Academic Qualification
   const eqTextareas = document.querySelectorAll('.eqField');
   const aqT = document.getElementById('aqT');
   let aqContent = '';

   eqTextareas.forEach((textarea) => {
       const value = textarea.value.trim();
       if (value) {
           aqContent += `<li>${value}</li>`;
       }
   });

   aqT.innerHTML = aqContent;
   

   document.getElementById('cv-form').style.display = 'none';
   document.getElementById('cv-template').style.display = 'block';
}

function printCV(){
    window.print();
}
