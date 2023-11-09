const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const responses= ['c','a','b','a','c'];
const emoijis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultats = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i=1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }

    verifFunc(tableauResultats);
    tableauResultats = [];

})


function verifFunc(tabResultats){

    for (let i = 0; i<5; i++){

        if(tabResultats[i] === responses[i]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false)
        }
    }

    //console.log(verifTableau);
    afficherResultat(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}


function afficherResultat(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    //console.log(nbDeFautes);

    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️"
            aideResultat.innerText = "";
            noteResultats.innerText = '5/5';
            break;
        case 1:
            titreResultat.innerText = "✨ Vous y êtes presque ! ✨"
            aideResultat.innerText = "Retenez une autre réponse dans la case rouge, puis re-validez !";
            noteResultats.innerText = '4/5';
            break;
        case 2:
            titreResultat.innerText = "✨ Encore un effort ... 👀"
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultats.innerText = '3/5';
            break;
        case 3:
            titreResultat.innerText = "👀 Il reste quelques erreurs. 😭"
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultats.innerText = '2/5';
            break;
        case 4:
            titreResultat.innerText = "😭 Peux mieux faire ! 😭"
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultats.innerText = '1/5';
            break;
        case 5:
            titreResultat.innerText = "👎 Peux mieux faire !👎"
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultats.innerText = '0/5';
            break;
    
        default:
            "Wops, cas innatendu.";
            break;
    }

}

function couleursFonction(tabValBool){

    for(let i=0; i< tabValBool.length; i++){
        if (tabValBool[i] === true) {
            toutesLesQuestions[i].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[i].style.background = '#ffb8b8';
            toutesLesQuestions[i].classList.add('echec');

            setTimeout(() => { 
                toutesLesQuestions[i].classList.remove('echec');
                
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', ()=>{
        item.style.background = "white";
    })
})
