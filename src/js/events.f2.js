// events handling
const container = document.querySelector('body');
const buttons = [... container.querySelectorAll('button')];
const parents = [... container.querySelectorAll('.mainConversion')];

buttons.map(( el , index ) => {
  el.addEventListener("click", () => {
    var clickedParent = el.closest(".mainConversion");
    clickedParent.classList.add('mainConversion--toggled');
    const event = new CustomEvent("clickedParent", {
      detail: {
        parentIndex: index
      }
    });
    container.dispatchEvent(event);
  })
});

let activeParent = -1;

container.addEventListener('clickedParent', (e) => {
  const index = e.detail.parentIndex;
  if(activeParent > -1) {
    parents[activeParent].classList.remove('mainConversion--toggled');
  }
  activeParent = index;
})