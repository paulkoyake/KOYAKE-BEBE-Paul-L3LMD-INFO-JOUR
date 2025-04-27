*	function ValiderFormulaire(){
		var email= document.getElementsByTagName('email').value;
		var password = document.getElementsByTagName('password').value;
		if (email==="" || password===""){
			alert("Veuillez remplir tous les champs avant de soumettre!");
			return false; //
			Empêche envoi

		}
		// sinon, formulaire validé
		return true;
	}
	