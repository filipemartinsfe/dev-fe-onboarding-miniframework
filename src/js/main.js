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

// Jquery
// $('.mainConversion button').click(function(){
//     $('.mainConversion').removeClass('mainConversion--toggled');
//     const elParent = $(this).closest('.mainConversion');
//     elParent.addClass('mainConversion--toggled');
// });


    let request = fetch('https://restcountries.eu/rest/v2/all').then( (res) => res.json());


    // let request = fetch('https://restcountries.eu/rest/v2/all').then(res => res.json())
