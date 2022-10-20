// Variables
let bonnesReponses;
let mauvaisesReponses;
const buttonStart = document.getElementById('start');
const boardResult = document.getElementById('boardResult');

const database = [
    {
        question: "Quelle mer borde la ville de Sébastopol ?",
        solution: "la mer Noire",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Quel est l'âge du capitaine ?",
        solution: "63",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Quelle est le nom de la meilleure musique de tous les temps ?",
        solution: "Viva la vida",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Qui a dit :  Je vais faire un < p >",
        solution: "Fabien",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Qui a dit : let va nous permettre de ne pas confondre Michel qui plante des arbres et michel le pyromane",
        solution: "Guillaume",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Qui a dit : Double cote, ou simple cote, je dirais qu'à partir du moment ou c'est entrecote c'est bon",
        solution: "Sion",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Wie heißt die Mutter von Niki Lauda ?",
        solution: "Mama Laudaaa",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Si on te dit Olivier Vinot, à quel outil penses tu ?",
        solution: "PowerToys",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Quel est le poids moyen d'une baleine bleue (en grammes) ?",
        solution: "140000000",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Qui a dit : C'est brumeux et j'entends des corbeaux. Deux salles deux ambiances ! ?",
        solution: "Guillaume",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Qui a dit : Array c'est tableau mais en Americain ?",
        solution: "Guillaume",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Quel est le prix d'une Renault Clio 1.0 TCe 90ch Evolution neuve (en euros) ?",
        solution: "21250",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Combien de vie(s) a un chat ?",
        solution: "1",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Quel est le nom du premier ordinateur ?",
        solution: "ENIAC",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Quel est le village alsacien avec le nom le plus long ?",
        solution: "Mittelschaeffolsheim",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Trouvez la bonne réponse a cette question !!!",
        solution: "42",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Comment savoir si le tube cathodique est mort ?",
        solution: "Le symptôme est que l'appareil ne s'allume plus à tous les coups, ou qu'une led clignote indiquant un défaut. Dans ce cas, les condensateurs de filtrage de l'alimentation ne filtrent plus correctement la tension de sortie.",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "Quel est le plus beau meuble chez toi ?",
        solution: "la bibliothèque",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "true + false = ?",
        solution: "1",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
    {
        question: "typeof NaN",
        solution: "number",
        reponseUtilisateur: "Non répondu",
        resultat : "FAUX",
    },
];

let nombreDeQuestions = 0;


// Init
function init() {
    buttonStart.addEventListener('click', startQuizz);
}



// Function
function startQuizz() {
    do {
        let nombreDeQuestionsString = prompt(`Combien de questions souhaitez vous entre 1 et ${database.length} ?`);
        if (nombreDeQuestionsString === null) {
            break;
        }
        nombreDeQuestions = parseInt(nombreDeQuestionsString);
    } while (nombreDeQuestions < 1 || nombreDeQuestions > database.length || isNaN(nombreDeQuestions));
    
    bonnesReponses = 0;
    mauvaisesReponses = 0;
    // mélange du tableau pour poser les questions dans un ordre aléatoire
    database.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < nombreDeQuestions; i++) {
        let question = database[i];
        let reponse = prompt(question.question);
        // gestion du bouton annuler et des solutions en chiffres
        if (reponse === null){
            break;
        }
        // gestion de la réponse en number
        // else if () {
        //     reponse = parseInt(reponse);
        // }
        checkReponse(reponse, question);
        question.reponseUtilisateur = reponse;
    }
    alertResultat();
    displayResultat();
}


function checkReponse (reponse, question) {
    if (reponse === question.solution) {
        bonnesReponses++;
        question.resultat = "VRAI"
    } else {
        mauvaisesReponses++;
    }
}

function alertResultat() {
    if (mauvaisesReponses === 0 && bonnesReponses === 0) {
        alert(`Vous n'avez répondu à aucune questions`);
    } else if (mauvaisesReponses === 0) {
        alert(`Vous avez ${bonnesReponses} bonnes réponses, tout est juste`);
    } else if (bonnesReponses === 0) {
        alert(`Vous avez ${mauvaisesReponses} mauvaises réponses, tout est faux`);
    } else {
        alert(`Vous avez ${bonnesReponses} bonnes réponses, et ${mauvaisesReponses} mauvaises réponses`);
    }
}

function displayResultat() {
    boardResult.innerHTML = "";
    for (let i = 0; i < nombreDeQuestions; i++) {
        let question = database[i];
        let numeroQuestion = i + 1;
        let questionContainer = document.createElement("div");
        let headerQuestion = document.createElement("div");
        let mainQuestion = document.createElement("div");
        let footerQuestion = document.createElement("div");
        let spacingQuestion = document.createElement("div");

        headerQuestion.textContent = `Question ${numeroQuestion} : ${question.resultat}`;

        mainQuestion.textContent = `${question.question}`;

        footerQuestion.textContent = `Solution : ${question.solution} / Votre réponse : ${question.reponseUtilisateur}`;

        spacingQuestion.textContent = "___";

        questionContainer.appendChild(headerQuestion);
        questionContainer.appendChild(mainQuestion);
        questionContainer.appendChild(footerQuestion);
        questionContainer.appendChild(spacingQuestion);
        boardResult.appendChild(questionContainer);
    }
}

// Init
init();



// Sauvegarde

// Question 1
// let question1 = "Quelle mer borde la ville de Sébastopol ?";
// let solution1 = 'la mer Noire';
// let reponse1 = prompt(question1);

// checkReponse(reponse1, solution1);


// Question 2
// let question2 = "Quel est l'âge du capitaine ?";
// let solution2 = 63;
// let reponse2 = parseInt(prompt(question2), 10);

// checkReponse(reponse2, solution2);


// Question 3
// let question3 = "Quelle est le nom de la meilleure musique de tous les temps ?";
// let solution3 = "Viva la vida";
// let reponse3 = prompt(question3);

// checkReponse(reponse3, solution3);