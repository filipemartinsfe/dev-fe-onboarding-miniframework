// Plain Javascript
const btnClickedFunction = ( () => {
    const parent = document.querySelectorAll('.mainConversion');

   parent.forEach(element => {
        const button = element.querySelector('button');

        button.addEventListener('click', () => {
            const clickedParent = button.closest(".mainConversion");
            if(clickedParent.classList.contains('mainConversion--toggled')) {
                clickedParent.classList.remove('mainConversion--toggled')

            } else {      
            parent.forEach(clickedParent => {
                clickedParent.classList.remove('mainConversion--toggled');
            });
            clickedParent.classList.add('mainConversion--toggled');

            }
        });
    });  
})();