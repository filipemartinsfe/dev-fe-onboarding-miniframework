// Plain Javascript
{
    const toggleAll = document.querySelectorAll('.mainConversion__toggled');

    document.querySelectorAll('.mainConversion').forEach(element => {
        const button = element.querySelector('button');
        const toggle = element.querySelector('.mainConversion__toggled');

        button.addEventListener('click', () => {
            toggleAll.forEach(info => {
                if(toggle !== info){
                    info.classList.add('off');
                }
            });  
            toggle.classList.toggle('off');
        });
    });  
}

// Plain Javascript attempt to change color
// const toggleAll = document.querySelectorAll('.mainConversion__toggled');

// document.querySelectorAll('.mainConversion').forEach(element => {
//     const button = element.querySelector('button');
//     const toggle = element.querySelector('.mainConversion__toggled');
//     const toggleBefore = element.querySelector('.toggled__info');
 
//     button.addEventListener('click', () => {
//         const color = window.getComputedStyle(button, null).getPropertyValue("background-color");
//         toggleAll.forEach(info => {
//             if(toggle !== info){
//                 info.classList.add('off');
//             }
//         });  
//         const pseudoElementContent = window.getComputedStyle(toggleBefore, ':before')
//   .getPropertyValue('border-bottom');
//   console.log(pseudoElementContent);
//         toggle.style.backgroundColor = color;
//         toggle.classList.toggle('off');
//     });
// });



// Jquery
// $('.mainConversion').click(function(){
//     var others = $(this).siblings().find('.mainConversion__toggled');
//     $(others).addClass('off');
//     $(this).find('.mainConversion__toggled').toggleClass('off');
// });