
   
   document.getElementById('formulaire').addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      var nom = document.getElementById("nom").value.trim();
      var email = document.getElementById("email").value.trim();
      var password = document.getElementById("password").value.trim();
  
      var emailErreur = "Votre adresse email est incorrecte.";
      var passwordErreur = "Votre mot de passe doit comporter au moins 8 caractères.";
      var nomErreur = "Votre nom doit comporter entre 3 et 15 caractères.";
      var reussi = 'reussi';
      var valide = true;
  
      if (password.length < 8) {
         document.getElementById("passwordErreur").innerHTML = passwordErreur;
         document.getElementById("passwordreussi").innerHTML = "";
          valide = false;
      } else {
          document.getElementById("passwordreussi").innerHTML = reussi;
          document.getElementById("passwordErreur").innerHTML = "";
      }
  
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          document.getElementById("emailErreur").innerHTML = emailErreur;
          document.getElementById("emailreussi").innerHTML = "";
          valide = false;
      } else {
          document.getElementById("emailreussi").innerHTML = reussi;
          document.getElementById("emailErreur").innerHTML = "";
      }
      var nomRegex = /^[a-zA-Z]+$/;
      if (nom.length < 3 || nom.length > 15 || !nomRegex.test(nom)) {
          document.getElementById("nomErreur").innerHTML = nomErreur;
          document.getElementById("nomreussi").innerHTML = "";
          valide = false;
      } else {
          document.getElementById("nomreussi").innerHTML = reussi;
          document.getElementById("nomErreur").innerHTML = "";
      }
  
      if (valide) {
          document.getElementById('formulaire').submit();
      }
  });
  