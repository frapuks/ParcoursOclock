const app = {
    grille : document.createElement('div'),
    form : document.querySelector('.configuration'),
    inputGrilleSize : document.createElement('input'),
    buttonValidateForm : document.createElement('button'),
    inputPixelSize : document.createElement('input'),
    colors : document.querySelectorAll('.color'),
    currentColor : "plain",
    palette : document.createElement('div'),
    buttonPlain :document.createElement('button'),
    buttonEmpty :document.createElement('button'),
    buttonLight :document.createElement('button'),
    buttonHighlight :document.createElement('button'),

    styles: [
        'plain',
        'empty',
        'light',
        'highlight',
    ],


    init : function() {
        app.grille.id = 'invader';
        document.body.appendChild(app.grille);

        app.inputGrilleSize.id = 'formElemLeft';
        app.inputGrilleSize.type = 'number';
        app.inputGrilleSize.value = 8;
        app.form.appendChild(app.inputGrilleSize);
        
        app.inputPixelSize.id = 'formElemCenter';
        app.inputPixelSize.type = 'number';
        app.inputPixelSize.value = 50;
        app.form.appendChild(app.inputPixelSize);
        
        app.buttonValidateForm.id = 'formElemRight';
        app.buttonValidateForm.textContent = 'Valider';
        app.form.appendChild(app.buttonValidateForm);
    
        app.buttonValidateForm.addEventListener('click', app.gerenerateNewGrid);

        app.buttonPlain.classList = "color plain";
        app.buttonEmpty.classList = "color empty";
        app.buttonLight.classList = "color light";
        app.buttonHighlight.classList = "color highlight";

        app.palette.appendChild(app.buttonPlain);
        app.palette.appendChild(app.buttonEmpty);
        app.palette.appendChild(app.buttonLight);
        app.palette.appendChild(app.buttonHighlight);
        app.palette.id = 'palette';
        document.body.appendChild(app.palette);

        app.colors = document.querySelectorAll('.color');

        for (let button of app.colors){
            button.addEventListener('click', app.getCurrentColor);
        }

        app.gerenerateNewGrid();
    },

    gerenerateNewGrid : function(event) {
        if (event) {
            event.preventDefault();
        }

        const grilleSize = app.inputGrilleSize.value;
        const pixelSize = app.inputPixelSize.value;
        app.grille.innerHTML = "";

        for (i = 0 ; i < grilleSize ; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (x = 0 ; x < grilleSize ; x++) {
                const pixElement = document.createElement('div');
                pixElement.classList.add('cellule');
                pixElement.style.width = `${pixelSize}px`;
                pixElement.style.height = `${pixelSize}px`;
                pixElement.addEventListener('click', app.handleClickPixElement);
                row.appendChild(pixElement);
            }
            app.grille.appendChild(row);
        }
        
    },

    handleClickPixElement : function(event){
        const cellTarget = event.currentTarget;

        if (app.currentColor === "plain"){
            cellTarget.classList.remove('empty', 'light', 'highlight');
            cellTarget.classList.toggle(app.currentColor);
        } else if (app.currentColor === "empty") {
            cellTarget.classList.remove('plain', 'light', 'highlight');
            cellTarget.classList.toggle(app.currentColor);
        } else if (app.currentColor === "light") {
            cellTarget.classList.remove('plain', 'empty', 'highlight');
            cellTarget.classList.toggle(app.currentColor);
        } else if (app.currentColor === "highlight") {
            cellTarget.classList.remove('plain', 'empty', 'light');
            cellTarget.classList.toggle(app.currentColor);
        }
    },

    getCurrentColor : function(event){
        const colorElement = event.currentTarget;

        if (colorElement.classList.contains('plain')) {
            app.currentColor = "plain";
        } else if (colorElement.classList.contains('empty')){
            app.currentColor = "empty";
        } else if (colorElement.classList.contains('light')){
            app.currentColor = "light";
        } else if (colorElement.classList.contains('highlight')){
            app.currentColor = "highlight";
        }
    }

}

app.init();