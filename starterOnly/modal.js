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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// données saisies
let form = document.querySelector("form")
let baliseNoms = document.getElementById("identite")
let valeurNoms = baliseNoms.value;

function verifierChamp(balise) {
    // Récupérer la valeur du champ "Prénom"
    let valeurNoms = balise.value.trim();

    if (valeurNoms.length < 2) {
      balise.classList.add("error")
    } else {
      balise.classList.remove("error")
    }
}

let baliseEmail = document.getElementById("email")
let email = baliseEmail.value

function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    email.classList.add("error")
  } else {
    email.classList.remove("error")
  }
}

let baliseLocation = document.querySelectorAll('input[name="location"]')

  function selectionnerRadio() {
    let selection = false;
    for (let i = 0; i < baliseLocation.length; i++) {
        if (baliseLocation[i].checked) {
            selection = true;
            break; 
        }
    }
    return selection;
    
}


// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  verifierChamp(baliseNoms)
  validerEmail(baliseEmail)
  selectionnerRadio()

});