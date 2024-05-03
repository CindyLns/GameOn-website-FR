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
closeBtns.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));

//closeBtns.addEventListener("click", closeModal);
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

let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

function validerEmail() {
  let baliseEmail = document.getElementById("email");
  let email = baliseEmail.value;
  let parentFormData = baliseEmail.parentElement.closest(".formData");

  if (!emailRegExp.test(email)) {
    parentFormData.classList.add("formData");
        parentFormData.setAttribute("data-error-visible", "true");
        parentFormData.setAttribute("data-error",  `L'adresse électronique n'est pas valide`);
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

function verifierLocation() {
  let baliseLocation = document.querySelectorAll('input[name="location"]');
  let parentFormData = baliseLocation[0].closest(".formData");

  let locationSelected = false;
  baliseLocation.forEach(function(radio) {
    if (radio.checked) {
      locationSelected = true;
    }
  });

    if (!locationSelected) {
        parentFormData.classList.add("formData");
        parentFormData.setAttribute("data-error-visible", "true");
        parentFormData.setAttribute("data-error",  `Veuillez choisir une option`);
    } else {
        parentFormData.classList.remove("formData");
        parentFormData.removeAttribute("data-error-visible");
        parentFormData.removeAttribute("data-error");
    }
}

function verifierCondition() {
  let baliseCondition = document.getElementById("checkbox1")
  let condition = baliseCondition.checked
  let parentFormData = baliseCondition.parentElement.closest(".formData");

  if (!condition) {
    parentFormData.classList.add("formData");
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute("data-error",  `Vous devez vérifier que vous acceptez les termes et conditions`);
  } else {
    parentFormData.classList.remove("formData");
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
  }
}


function validate() {
  var firstName = document.getElementById('first').value;
  var lastName = document.getElementById('last').value;
  var email = document.getElementById("email").value;
  var birthdate = document.getElementById('birthdate').value;
  var location = document.querySelectorAll('input[name="location"]:checked');
  var condition = document.getElementById('checkbox1').checked;

  // Vérification du champ Nom
  if (firstName.length < 2 && lastName.length < 2) {
    verifierChamp(baliseNom)
    verifierChamp(balisePrenom)
  }

  if (!email) {
    validerEmail()
  }

   // Vérification de la date de naissance
  if (!birthdate) {
    verifierAnniv()   
  }
  
  // Vérification de l'option de localisation tournoi
  if (location.length === 0) {
      verifierLocation()
  }

  // Vérification de l'acceptation des conditions
  if (!condition) {
      verifierCondition()
  }

  // Affichage du message de confirmation
  if (firstName && lastName && email && birthdate && location && condition) {
  document.querySelector(".confirmationModal").style.display = "block";
  }

}










// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
   event.preventDefault()
        validate()

});


