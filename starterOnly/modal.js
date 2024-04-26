function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtns = document.querySelectorAll(".close");
const endBtn = document.querySelector(".end");
const modalConf = document.querySelector(".confirmationModal")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeBtns.addEventListener("click", closeModal);
endBtn.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalConf.style.display = "none";
}



// Données saisies
let form = document.querySelector("form")
let balisePrenom = document.getElementById("first")
let valeurPrenom = balisePrenom.value;
let baliseNom = document.getElementById("last")
let valeurNom = baliseNom.value;

function verifierChamp(balise) {
    // Récupérer la valeur du champ "Prénom et Nom"
    let valeurNom = balise.value.trim();
    let valeurPrenom = balise.value.trim();
    let parentFormData = balise.parentElement.closest(".formData");

    if (valeurNom.length < 2 && valeurPrenom.length < 2 ) {
        parentFormData.classList.add("formData");
        parentFormData.setAttribute("data-error-visible", "true");
        parentFormData.setAttribute("data-error",  `Veuillez entrer 2 caractères ou plus pour ce champ`);
    } else {
        parentFormData.classList.remove("formData");
        parentFormData.removeAttribute("data-error-visible");
        parentFormData.removeAttribute("data-error");
    }
}

function verifierAnniv() {
  let baliseBirthdate = document.getElementById("birthdate");
  let birthdate = baliseBirthdate.value;
  let parentFormData = baliseBirthdate.parentElement.closest(".formData");

  if (!birthdate) {
      parentFormData.classList.add("formData");
      parentFormData.setAttribute("data-error-visible", "true");
      parentFormData.setAttribute("data-error",  `Veuillez entrer une date de naissance`);
  } else {
      parentFormData.classList.remove("formData");
      parentFormData.removeAttribute("data-error-visible");
      parentFormData.removeAttribute("data-error");
  }
}




/*
let baliseEmail = document.getElementById("email")
let email = baliseEmail.value

function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  let parentFormData = balise.parentElement.closest(".formData");
  if (!emailRegExp.test(email)) {
    parentFormData.classList.add("formData");
        parentFormData.setAttribute("data-error-visible", "true");
        parentFormData.setAttribute("data-error",  `L'adresse électronique n'est pas valide`);
  } else {
    parentFormData.classList.remove("formData");
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
  }
}*/




function validate(e) {
  e.preventDefault()
  console.log("est ce qu'on est dedans")
  var firstName = document.getElementById('first').value;
  var lastName = document.getElementById('last').value;
  var birthdate = document.getElementById('birthdate').value;
 /* var location = document.querySelector('input[name="location"]:checked');
  var checkbox1 = document.getElementById('checkbox1').checked;*/

  // Vérification du champ Nom
  if (firstName.length < 2 && lastName.length < 2) {
    verifierChamp(baliseNom)
    verifierChamp(balisePrenom)
  }

  /*// Vérification de l'option de localisation
  if (!location) {
      alert("Veuillez choisir une option de localisation.");
      return false;
  }

  // Vérification de l'acceptation des conditions
  if (!checkbox1) {
      alert("Veuillez accepter les conditions d'utilisation.");
      return false;
  }*/

  // Vérification de la date de naissance
  if (!birthdate) {
      verifierAnniv()
  }

  // Affichage du message de confirmation
  document.querySelector(".confirmationModal").style.display = "block";
  return false
}










/*// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
   event.preventDefault()
        validate()

});*/


