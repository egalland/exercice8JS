// DECLARATION FONCTION AGE
function calculAge(){
  // DECLARATION ET RECUPERATION DES VARIABLES
  var age = document.getElementById("age").value;
  var regex = /^[0-9]+$/;
  // VERIFICATION DES VARIABLES
  if(regex.test(age)){
    // VERIFICATION OK -> COMPARAISON AGE MAJEUR
    if(age >= 18){
      alert('Vous êtes majeur');
    // SINON MINEUR
    }else{
      alert('Vous êtes mineur');
    }
  // ECHEC VERIFICATION
  }else{
    alert('Ce n\'est pas un nombre');
  }
}
