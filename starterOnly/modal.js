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
const modalConf = document.querySelector(".confirmationModal");

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

// Déclaration des variables pour stocker les données saisies

let valeurPrenom = "";
let valeurNom = "";
let email = "";
let birthdate = "";
let quantity = "";
let locationSelected = "";
let condition = "";

// Messages d'erreur
let form = document.querySelector("form");

function verifierPrenomEstBon() {
  let balisePrenom = document.getElementById("first");
  valeurPrenom = balisePrenom.value;
  let parentFormData = balisePrenom.parentElement.closest(".formData");

  if (valeurPrenom.length < 2) {
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute(
      "data-error",
      `Veuillez entrer 2 caractères ou plus pour ce champ`
    );
    return false;
  } else {
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
    return true;
  }
}

function verifierNomEstBon() {
  let baliseNom = document.getElementById("last");
  valeurNom = baliseNom.value;
  let parentFormData = baliseNom.parentElement.closest(".formData");

  if (valeurNom.length < 2) {
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute(
      "data-error",
      `Veuillez entrer 2 caractères ou plus pour ce champ`
    );
    return false;
  } else {
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
    return true;
  }
}

let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

function validerEmail() {
  let baliseEmail = document.getElementById("email");
  email = baliseEmail.value;
  let parentFormData = baliseEmail.parentElement.closest(".formData");

  if (!emailRegExp.test(email)) {
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute(
      "data-error",
      `L'adresse électronique n'est pas valide`
    );
    return false;
  } else {
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
    return true;
  }
}

function verifierAnniv() {
  let baliseBirthdate = document.getElementById("birthdate");
  birthdate = baliseBirthdate.value;
  let parentFormData = baliseBirthdate.parentElement.closest(".formData");

  if (!birthdate) {
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute(
      "data-error",
      `Veuillez entrer une date de naissance`
    );
    return false;
  } else {
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
    return true;
  }
}

function verifierNombreTournois() {
  let baliseQuantity = document.getElementById("quantity");
  quantity = parseInt(baliseQuantity.value);
  let parentFormData = baliseQuantity.parentElement.closest(".formData");

  if (isNaN(quantity) || quantity < 0 || quantity > 99) {
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute(
      "data-error",
      `Veuillez sélectionner un chiffre`
    );
    return false;
  } else {
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
    return true;
  }
}

function verifierLocation() {
  let baliseLocation = document.querySelectorAll('input[name="location"]');
  let parentFormData = baliseLocation[0].closest(".formData");

  for (let i = 0; i < baliseLocation.length; i++) {
    if (baliseLocation[i].checked) {
      locationSelected = baliseLocation[i].value;
      break;
    }
  }

  if (!locationSelected) {
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute("data-error", `Veuillez choisir une option`);
    return false;
  } else {
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
    return true;
  }
}

function verifierCondition() {
  let baliseCondition = document.getElementById("checkbox1");
  condition = baliseCondition.checked;
  let parentFormData = baliseCondition.parentElement.closest(".formData");

  if (!condition) {
    parentFormData.setAttribute("data-error-visible", "true");
    parentFormData.setAttribute(
      "data-error",
      `Vous devez vérifier que vous acceptez les termes et conditions`
    );
    return false;
  } else {
    parentFormData.removeAttribute("data-error-visible");
    parentFormData.removeAttribute("data-error");
    return true;
  }
}

// Validation de chaque champ
function validate() {
  const isFirstName = verifierPrenomEstBon();

  const isLastName = verifierNomEstBon();

  const isEmail = validerEmail();

  const isBirthdate = verifierAnniv();

  const isQuantity = verifierNombreTournois();

  const isLocation = verifierLocation();

  const isCondition = verifierCondition();

  if (
    isFirstName &&
    isLastName &&
    isEmail &&
    isBirthdate &&
    isQuantity &&
    isLocation &&
    isCondition
  ) {
    formValidated();
  }
}

function formValidated() {
  // Faire un console log des données saisies
  console.log("Prénom: ", valeurPrenom);
  console.log("Nom: ", valeurNom);
  console.log("E-mail: ", email);
  console.log("Date de naissance: ", birthdate);
  console.log("Nombre de tournois: ", quantity);
  console.log("Tournoi de: ", locationSelected);
  console.log("Conditions d'utilisation : ", condition);
  let infoEvent = document.getElementById("checkbox2");
  console.log("Prochains événements: ", infoEvent.checked);

  // Reset les données saisies
  document.querySelector("form").reset();
  valeurPrenom = "";
  valeurNom = "";
  email = "";
  birthdate = "";
  quantity = "";
  locationSelected = "";
  condition = "";
  infoEvent = "";

  // Ne plus afficher la form
  modalbg.style.display = "none";
  // Affiche le message de confirmation
  document.querySelector(".confirmationModal").style.display = "block";
}

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});
