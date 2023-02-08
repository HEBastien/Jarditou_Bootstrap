const formulaire=document.getElementById ("Formulaire")
formulaire.addEventListener ("submit",function(){
    // Création variables input
    const nom=document.getElementById ("nom") ;
    const prénom=document.getElementById ("prénom")    
    const codePostal=document.getElementById ("Cp")
    const Email=document.getElementById ("email")
    const Question=document.getElementById ("Votrequestion")  
    const Sujet=document.getElementById ("Sujet")
    const masculin=document.getElementById ("masculin")
    const féminin=document.getElementById ("féminin")
    const traitement=document.getElementById ("check")
    const Date=document.getElementById ("Date")
    let submit=true
    
// RegEx
    const regexprénom = /^[a-zA-Z-\s]+$/;
    let regexmail =/^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
    let regexCodePostal = /^\d{5}$/;
// Vérification Nom / Prénom / Code postal / Email / Sujet / Question
    if (nom.value=="" || regexprénom.test(nom.value)==false){
        document.getElementById ("errorNom").innerHTML="Entrez un nom valide<br>"
        event.preventDefault()
        submit=false
    }
    if (prénom.value=="" || regexprénom.test(prénom.value)==false){
        document.getElementById ("errorPrenom").innerHTML="Entrez un prénom valide<br>"
        event.preventDefault()
        submit=false
    }
    if (codePostal.value=="" || regexCodePostal.test(codePostal.value)==false){
        document.getElementById ("errorCp").innerHTML="Entrez un code postal valide<br>"
        event.preventDefault()
        submit=false
    }
    if (Email.value=="" || regexmail.test(Email.value)==false){
        document.getElementById ("errorEmail").innerHTML="Entrez une adresse mail valide<br>"
        event.preventDefault()
        submit=false
    }
    if (Sujet.value==""){
        document.getElementById ("errorSujet").innerHTML="Entrez un Sujet <br>"
        event.preventDefault()
        submit=false
    }
    if (Question.value==""){
        document.getElementById ("errorQuest").innerHTML="Entrez votre question <br>"
        event.preventDefault()
        submit=false
    }
// Vérification Sexe / Traitements / Date
    if (masculin.checked==false && féminin.checked==false){
        document.getElementById ("errorSex").innerHTML="Entrez votre genre <br>"
        event.preventDefault()
        submit=false
    }
    if (traitement.checked==false){
        document.getElementById ("errorCheck").innerHTML="Veulliez accepter les conditions  <br>"
        event.preventDefault()
        submit=false
    }
    if (Date.value==""){
        document.getElementById ("errorDate").innerHTML="Entrez votre date de naissance <br>"
        event.preventDefault()
        submit=false
    }

return submit
}


























)