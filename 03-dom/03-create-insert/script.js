/*---------------------------------------------------------Element Creation and Insertion --------------------------------------------------------*/


/*----------------------------------------------------------------Element Creation ---------------------------------------------------------------*/

// create an li, and add a text node child
const div = document.createElement('li');
div.className = 'my-element';
div.setAttribute('title', 'cool-div');
const text = document.createTextNode('Pear Skin');
div.appendChild(text);

// put it at the end of the list with apples, orange juice, and crab shells
document.querySelector('ul').appendChild(div);

output = div;
console.log(output);


/*------------------------------------------------InnerHTML vs createElement()-------------------------------------------------------*/

// InnerHTML Way (Quick n Dirty) this way causes the dom to reparse ALL dom nodes so it's less efficient
function createListItem1(item){
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark">Remove</i> 
    </button>
    `;
    document.querySelector('.itemlist').appendChild(li);                // make li a child of the ul list in index.html (this renders it)
}
createListItem1("Chease");

// createElement Way (Clean and Performant)
function createListItem2(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red'                  // can add multipe classes as 1 string seperated with spaces like css
    li.appendChild(button)                                              // make button a child of the new li we made up top

    const button_text = document.createElement('i');
    button_text.className = 'fa-solid fa-xmark';
    button_text.innerText = "Remove"
    button.appendChild(button_text)                                     // make button_text a child of button
    

    document.querySelector('.itemlist').appendChild(li);                // make li a child of the ul list in index.html (this renders it)
}
createListItem2('Yardsticks')


/*-------------------------------------------------------Element Insertion --------------------------------------------------------*/

// insert a <p> before a specified element in the document
function insertElement(){
    // insert the element before the first element of filter class
    const filter = document.querySelector('.filter')
    const added = document.createElement('p');
    added.textContent = "Inserted via insertElement() in the script"

    filter.insertAdjacentElement('beforebegin', added);
    // filter .insertAdjacentElement('afterend', added);                    // to put after instead of before 
}

function insertBeforeItem(){
    const ul = document.querySelector('ul');
    const newli = document.createElement('li');
    newli.textContent = 'inserted with x.insertBefore(sixthItem, this)';
    const sixthItem = document.querySelector('li:nth-child(6)');            // 4th in a list of siblings... weird wording given 'child'
    console.log(`inserting before ${sixthItem.textContent}`);
    ul.insertBefore(newli, sixthItem);
}
insertElement();
insertBeforeItem();