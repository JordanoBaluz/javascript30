const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
//if localstorage empty, create a blank array
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    //preventdefault stop the page from reloading
    e.preventDefault();
    //this select the entire form, then queryselector select the the attribute of name item
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    //localstore stores only string, that's why stringify is called
    localStorage.setItem('items', JSON.stringify(items));
    //reset clear the input and remove the item typed
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
    //when map return an array, join will turn into one big string
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    //tell the index of the toogle checked
    const index = el.dataset.index;
    //access the property done and  change the property
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

//add items to the list of meals
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);