/* Insert Challenge */

function insertAfter(newEl, existEl){
    existEl.parentElement.insertBefore(newEl, existEl.nextSibling);

}

const li = document.createElement('li');
li.textContent = "Yeehaw";
const firstItem = document.querySelector('li:first-child');
console.log(firstItem.innerText);
insertAfter(li, firstItem);
