/* Replace Items */
function replaceFirstItem() {
    const firstItems = document.querySelector('li:first-child')

    const li = document.createElement('li');
    li.innerText = 'Replaced First';
    console.log(li.innerText);
    firstItems.replaceWith(li);
}

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');
    console.log(secondItem.outerHTML);
    console.log(secondItem.innerText);
    secondItem.outerHtml = '<li class="itemitem">Replaced Second</li>';
    console.log(secondItem.outerHTML);
    console.log(secondItem.innerText);
}

function replaceAllItems() {
    console.log("------")
    const lis = document.querySelectorAll('li');
    // lis.forEach((item, i) => item.innerHTML = `Replaced... ${i+1}`);         // replace li.innerHTML with "Replaced...i"
    lis.forEach((item, i) => {
        if (item.innerHTML ==="Crab Shells"){
            item.innerHTML = 'Crab Shells are not a real kind of food that is disgusting'
        } else {
            item.innerHTML = `Replaced...${i+1} line`
        }
    })
}

function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');
    console.log(header)
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();