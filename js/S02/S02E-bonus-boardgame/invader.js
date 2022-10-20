const invader = {
    grille : "",
    palette : "",
    boardResult : document.querySelector('.boardResult'),
    form : document.querySelector('.configuration'),
    inputGrilleSize : document.querySelector('.invaderGridSize'),
    inputPixelSize : document.querySelector('.invaderPixelSize'),
    buttonValidateForm : document.querySelector('.startInvader'),
    currentColor : "",
    styles: [
        'empty',
        'plain',
        'light',
        'highlight',
    ],
    
    init : function() {
        // initialisation
        invader.boardResult.innerHTML = "";
        invader.currentColor = invader.styles[0];
        invader.palette = document.createElement('div');
        invader.grille = document.createElement('div');
        invader.grille.id = 'invader';
        invader.boardResult.appendChild(invader.grille);

        // add event listener
        invader.inputPixelSize.addEventListener('input', invader.changePixelSize)
        invader.buttonValidateForm.addEventListener('click', invader.gerenerateNewGrid);

        // create elements
        invader.gerenerateNewGrid();
        invader.createPalette();
    },
    
    createPalette: function(){
        for (let style of invader.styles) {
            let buttonColor = document.createElement('button');
            buttonColor.classList = style;
            buttonColor.addEventListener('click', invader.getCurrentColor);
            invader.palette.appendChild(buttonColor);
        }
        invader.palette.id = 'palette';
        invader.boardResult.appendChild(invader.palette);

    },

    changePixelSize: function(){
        const allPixels = document.querySelectorAll('.cellule');
        const pixelSize = invader.inputPixelSize.value;
        for (const pixel of allPixels) {
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;
        }
    },

    gerenerateNewGrid : function(event) {
        const grilleSize = invader.inputGrilleSize.value;
        const pixelSize = invader.inputPixelSize.value;
        invader.grille.innerHTML = "";

        for (i = 0 ; i < grilleSize ; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (x = 0 ; x < grilleSize ; x++) {
                const pixElement = document.createElement('div');
                pixElement.classList.add('cellule');
                pixElement.style.width = `${pixelSize}px`;
                pixElement.style.height = `${pixelSize}px`;
                pixElement.addEventListener('click', invader.handleClickPixElement);
                row.appendChild(pixElement);
            }
            invader.grille.appendChild(row);
        }
    },

    handleClickPixElement : function(event){
        const cellTarget = event.currentTarget;

        for(let style of invader.styles) {
            if (invader.currentColor !== style){
                cellTarget.classList.remove(style);
            } else {
                cellTarget.classList.toggle(invader.currentColor);
            }
        }
    },

    getCurrentColor : function(event){
        const colorElement = event.currentTarget;
        invader.currentColor = colorElement.className;
        
        const buttons = invader.palette.children;
        for (const button of buttons) {
            button.style.scale = "1";
        }
        colorElement.style.scale = "1.5";
    }
}