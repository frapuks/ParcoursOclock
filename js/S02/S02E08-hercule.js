//* ====================================== \\
//*                SOMMAIRE                \\
//* ====================================== \\
//    module app............22             \\
//    hercule...............23             \\
//    herculeFriends........32             \\
//    Target elements.......34             \\
//    Get elements..........46             \\
//    init..................49             \\
//    tool..................64             \\
//    functions.............72             \\
//    app.init();...........135            \\
//                                         \\
//                                         \\
// ======================================= \\
//                 TODO                    \\
// ======================================= \\
//                                         \\
//                                         \\
// ======================================= \\

const app = {
    hercule : {
        name : "Hercule",
        job : "Demi-dieu",
        age : 35,
        department  : 75,
        arm : 60.5,
        inRelationship : true,
    },

    herculeFriends : ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],

    // -------- TARGET ELEMENTS -------- \\
    targetHeaderElement : document.getElementById('header-banner'),
    targetContactElement : document.getElementById('contact'),
    targetPeopleElements : document.querySelectorAll('.people'),
    targetContactSubmitBtn : document.querySelector('.contact__button'),
    targetProfilNameElement : document.getElementById('profil-name'),
    targetActivitiesElement : document.getElementById('activities'),
    targetMenuTogglerElement : document.getElementById('menu-toggler'),
    targetTrendsCesarElement : document.getElementById('trends-cesar'),
    targetAvailabilityElement : document.getElementById('availability'),
    targetTrendsHerculeElement : document.getElementById('trends-hercule'),

    // -------- GET ELEMENTS -------- \\
    getCurrentHour : base.getHour(),
    
    //* -------- INIT -------- \\
    init : function () {
        base.fillProfil(app.hercule);
        base.printFriends(app.herculeFriends);
        base.setBestFriend('Philoctète');
        app.createElement('h1', 'banner__title', app.targetHeaderElement, "Vous consultez le profil de Hercule");
        app.displayWork();
        app.displayAvailability();
        app.displayPseudo();
        app.targetMenuTogglerElement.addEventListener('click', app.handleMenuBtn);
        app.targetContactElement.addEventListener('submit', app.handleSubmitForm);
        app.displayTrends();
        app.displayActivities();
    },
    
    // tool
    createElement : function (HTMLtag, classeName, parent, textContent) {
        const elem = document.createElement(HTMLtag);
        elem.classList.add(classeName);
        elem.textContent = textContent;
        parent.append(elem);
    },
    
    // -------- FUNCTIONS -------- \\
    displayWork : function () {
        for (let i = 0; i < 12; i++) {
            base.displayWork(i);
        }
    },
    
    displayAvailability : function() {
        if (app.getCurrentHour >= 8 && app.getCurrentHour < 20) {
            app.targetAvailabilityElement.textContent = "Disponible";
            app.targetAvailabilityElement.classList.remove('off');
        } else {
            app.targetAvailabilityElement.textContent = "Non disponible";
            app.targetAvailabilityElement.classList.add('off');
        }
    },
    
    createPseudo : function(name, department) {
        return `${name}-du-${department}`;
    },
    
    displayPseudo : function () {
        const pseudo = app.createPseudo(app.hercule.name, app.hercule.department);
        app.targetProfilNameElement.textContent = pseudo;
    },

    handleMenuBtn : function () {
        app.targetHeaderElement.classList.toggle('banner--open');
    },

    handleSubmitForm : function (event) {
        event.preventDefault();
        alert('Hercule ne souhaite pas être dérangé');
    },

    displayTrends : function (params) {
        let totalVotes = 0;
        for (const person in base.vote) {
            totalVotes += base.vote[person];
        }

        for (const person in base.vote) {
            const percentage = (base.vote[person] / totalVotes * 100).toFixed(0);
            const block = document.getElementById(`trends-${person}`);
            const percentageElement = block.querySelector('.people__popularity');
            const barElement = block.querySelector('.people__bar');
            percentageElement.textContent = `${percentage} %`;
            barElement.style.width = `${percentage}%`;
        }
    },

    displayActivities : function () {
        app.targetActivitiesElement.classList.remove('hidden');
        const getActivitiesUl = app.targetActivitiesElement.querySelector('.tasks');

        for (const activity of base.activities) {
            if (activity.finished && activity.author === 'Hercule') {
                app.createElement("li", "task--complete", getActivitiesUl, activity.title);
            }
        }
    },
}

app.init();