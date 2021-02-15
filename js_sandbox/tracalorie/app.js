// storage controller

// item controller
const Item = (function() {
    // item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // data structure - state
    const data = {
        items: [
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Cookies', calories: 400},
            // {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
    }

    //public methods
    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name, calories){
            let ID;
            // create id
            if(data.items.length > 0) {
                ID = data.items[data.items.length -1].id + 1;
            } else {
                ID = 0;
            }

            // convert calories to number
            calories = parseInt(calories);

            // new item
            newItem = new Item(ID, name, calories);

            // add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function(id){
            let found = null;

            // loop thru items
            data.items.forEach(function(item){
                if (item.id === id){
                    found = item;
                }
            });

            return found;
        },
        updateItem: function(name, calories){
            // cals to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });

            return found;
        },
        deleteItem: function(id){
            // get id
            const ids = data.item.map(function() {
                return item.id;
            });

            // get index
            const index = ids.indexOf(id);

            // remove item
            data.item.splice(index, 1);
        },
        clearAll: function(){
            data.items = [];
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
           return data.currentItem; 
        },
        getTotalCalories: function(){
            let total = 0;

            // loop thru items and add cals
            data.items.forEach(function(item) {
                total += item.calories;
                
            });

            // set total cal in data struct
            data.totalCalories = total;

            // return total
            return data.totalCalories;
        },
        logData: function() {
            return data;
        }
    }
})();

// ui controller
const UI = (function() {
    const UISelectors = {
        item: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories'
    }
    
    return {
        populateItemList: function(items) {
            let html = '';

            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}:</strong> <em>${item.calories} Calories</em> <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>`;
            });

            // insert list items
            document.querySelector(UISelectors.item).innerHTML = html;
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemName).value,
                calories: document.querySelector(UISelectors.itemCalories).value,
            }
        },
        addListItem: function(item) {
            // show the list
            document.querySelector(UISelectors.item).style.display = 'block';
            // create li element
            const li = document.createElement('li');
            
            // add class
            li.className = 'collection-item';

            // add id
            li.id = `item-${item.id}`;

            // add html
            li.innerHTML = `<strong>${item.name}:</strong> <em>${item.calories} Calories</em> <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;

            // insert item
            document.querySelector(UISelectors.item).insertAdjacentElement('beforeend', li)
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem) {
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}:</strong> <em>${item.calories} Calories</em> <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
                }
            });
        },
        deleteListItem: function(id){
            const itemID = `#item=${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemName).value = '';
            document.querySelector(UISelectors.itemCalories).value = '';
        },
        addItemToForm: function(){
            document.querySelector(UISelectors.itemName).value = Item.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalories).value = Item.getCurrentItem().calories;
            UI.showEditState();
        },
        clearItems: function() {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // turn node list into array
            listItems = Array.from(listItems);
            listItems.forEach(function(item) {
                item.remove();
            });
        },
        hideList: function(){
            document.querySelector(UISelectors.item).style.display = 'none';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function(){
            UI.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function(){
            UI.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        getSelectors: function() {
            return UISelectors;
        }
    }
})();

// app controller
const App = (function(Item, UI) {
    
    // load event listeners
    const loadEventListeners = function() {
        const UISelectors = UI.getSelectors();

        // add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // disable submit on enter
        document.addEventListener('keypress', function () {
                if (e.keyCode === 13 || e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            });

        // edit icon click event
        document.querySelector(UISelectors.item).addEventListener('click', itemEditClick);

        // update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // back btn event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UI.clearEditState);

        // delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

         // clear item event
         document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItems);

    }

    // add item submit
    const itemAddSubmit = function(e) {
        // get form input from ui controller
        const input = UI.getItemInput();

        // check for name and calorie input
        if(input.name !== '' && input.calories !== '') {
            // Add item
            const newItem = Item.addItem(input.name, input.calories);

            // add item to ui list
            UI.addListItem(newItem);

            // get total calories
            const totalCalories = Item.getTotalCalories();

            // add total to UI
            UI.showTotalCalories(totalCalories);

            // clear fields
            UI.clearInput();
        }

        e.preventDefault();
    }

    // click edit item
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')) {
            
            // get list item id
            const listId = e.target.parentNode.parentNode.id;

            // break into an array
            const listIdArr = listId.split('-');

            // get actual id
            const id = parseInt(listIdArr[1]);

            // get item
            const itemToEdit = Item.getItemById(id);

            // set current item
            Item.setCurrentItem(itemToEdit);

            // add item to form
            UI.addItemToForm();
        }

        e.preventDefault();
    }

    // update item submit
    const itemUpdateSubmit = function() {
        //get item input
        const input = UI.getItemInput();

        // update item
        const updateItem = Item.updateItem(input.name, input.calories);

        // update UI
        UI.updateListItem(updateItem);

        // get total calories
        const totalCalories = Item.getTotalCalories();

        // add total to UI
        UI.showTotalCalories(totalCalories);

        UI.clearEditState();

        e.preventDefault();
    }

    // item delete
    const itemDeleteSubmit = function(e){
        // get current item
        const currentItem = Item.getCurrentItem();

        // delete from data struct
        Item.deleteItem(currentItem.id);

        // delete from UI
        UI.deleteListItem(currentItem.id);

        // get total calories
        const totalCalories = Item.getTotalCalories();

        // add total to UI
        UI.showTotalCalories(totalCalories);

        UI.clearEditState();

        e.preventDefault();
    }

    // clear all items
    const clearAllItems = function(){
        // delete all items from data struct
        Item.clearAll();

        // get total calories
        const totalCalories = Item.getTotalCalories();

        // add total to UI
        UI.showTotalCalories(totalCalories);

        // hide list
        UI.hideList();

        // remove from ui
        UI.clearItems();
    }

    // public methods
    return {
        init: function() {
            // clear edit state / set initial state
            UI.clearEditState();

            // fetch items from data
            const items = Item.getItems();

            //check if any tiems
            if(items.length === 0) {
                UI.hideList();
            } else {

            // populate list with items
            UI.populateItemList(items);

            }

            // get total calories
            const totalCalories = Item.getTotalCalories();

            // add total to UI
            UI.showTotalCalories(totalCalories);

            // load event listeners
            loadEventListeners();
        }
    }

})(Item, UI);

// initialize app
App.init();