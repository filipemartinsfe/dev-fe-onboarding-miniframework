// Plain Javascript
// const btnClickedFunction = ( () => {
//     const parent = document.querySelectorAll('.mainConversion');

//    parent.forEach(element => {
//         const button = element.querySelector('button');

//         button.addEventListener('click', () => {
//             const clickedParent = button.closest(".mainConversion");
//             if(clickedParent.classList.contains('mainConversion--toggled')) {
//                 clickedParent.classList.remove('mainConversion--toggled')

//             } else {      
//             parent.forEach(clickedParent => {
//                 clickedParent.classList.remove('mainConversion--toggled');
//             });
//             clickedParent.classList.add('mainConversion--toggled');

//             }
//         });
//     });  
// })();


// events handling
// const container = document.querySelector('body');
// const buttons = [... container.querySelectorAll('button')];
// const parents = [... container.querySelectorAll('.mainConversion')];

// buttons.map(( el , index ) => {
//   el.addEventListener("click", () => {
//     var clickedParent = el.closest(".mainConversion");
//     clickedParent.classList.add('mainConversion--toggled');
//     const event = new CustomEvent("clickedParent", {
//       detail: {
//         parentIndex: index
//       }
//     });
//     container.dispatchEvent(event);
//   })
// });

// let activeParent = -1;

// container.addEventListener('clickedParent', (e) => {
//   const index = e.detail.parentIndex;
//   if(activeParent > -1) {
//     parents[activeParent].classList.remove('mainConversion--toggled');
//   }
//   activeParent = index;
// })


// Jquery
// $('.mainConversion button').click(function(){
//     $('.mainConversion').removeClass('mainConversion--toggled');
//     const elParent = $(this).closest('.mainConversion');
//     elParent.addClass('mainConversion--toggled');
// });

// let request = fetch('https://restcountries.eu/rest/v2/all').then( (res) => res.json());


//tryout events

const container = document.querySelector('.container');
const boxes = [ ... container.querySelectorAll('.container__el') ];
console.log(boxes);

boxes.map((el , index) => {
    console.log(index);

    el.addEventListener('click', (ev) => {
        const event = new CustomEvent('clickedIt', { 
            detail: {
                elIndex: index
            }
         });
         el.dispatchEvent(event);
    });


    el.addEventListener('clickedIt', (ev) => {
        let idx = ev.detail.elIndex;

        if(el.classList.contains('container__el--bgGreen') == true){
            el.classList.remove('container__el--bgGreen');
            
        } else {
            for(i = 0; i < boxes.length; i++){
                boxes[i].classList.remove('container__el--bgGreen')
            }
            boxes[idx].classList.add('container__el--bgGreen');
        }
    });
});


