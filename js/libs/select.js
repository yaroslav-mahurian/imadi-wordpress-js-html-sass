export default class Select {
    constructor() {

    }

    init() {
        let selectHeader = document.querySelectorAll(".select__header");
        let selectItem = document.querySelectorAll('.select__item');
    

        selectHeader.forEach(header => {
            header.addEventListener('click', function() {
                header.parentElement.classList.toggle('is-active');
                header.querySelector('.select__icon').classList.toggle('select__icon--active');

            });
            if (header.hasAttribute('data-select')) {
               
                header.closest('.select').querySelectorAll('.select__item').forEach(item => {
                    item.style.cursor = "pointer";
                    item.addEventListener('click', function(){
                        
                        let text = item.innerText;
                        let select = item.closest('.select');
                        let currentText = select.querySelector('.select__current');
                        currentText.innerText = text;
                        select.classList.remove('is-active');
                    });
                });
            }
        });

        let bapfHead = document.querySelectorAll(".bapf_head");
        bapfHead.forEach(head => {
            head.addEventListener('click', function() {
                head.parentElement.classList.toggle('is-active');
                /* head.querySelector('.select__icon').classList.toggle('select__icon--active'); */

            });
        });

        let selectHeaderCustom = document.querySelectorAll(".select__header--custom");
        selectHeaderCustom.forEach(head => {
            head.addEventListener('click', function() {
                head.parentElement.classList.toggle('is-active');
                /* head.querySelector('.select__icon').classList.toggle('select__icon--active'); */
            });
        });
        
    }
}