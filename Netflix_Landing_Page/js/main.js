const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//SElect tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');

    //Grab content Item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

//removing border
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));



