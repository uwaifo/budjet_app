// budjet conrolleer
var budjetController = (function() {
  //use Capital Heading for constructor functions
  var Expense = function(id, descriction, value) {
    (this.id = id), (this.descriction = descriction), (this.value = value);
  };
  var Income = function(id, descriction, value) {
    (this.id = id), (this.descriction = descriction), (this.value = value);
  };

  //Data structure for application
  let data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  //create a public method to enable external module to have access to adding new items to the dat structure

  return {
    addItem: function(type, des, val) {
      let newItem, ID;

      //create new ID
      if (data.allItems[type].length > 0) {
        // check if its not empty
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // assignt an ID
      } else {
        // the data structure is empty assign 0
        ID = 0;
      }

      //create new item based on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      //push to data structure
      data.allItems[type].push(newItem); // add newItem to the end of the array

      //return the new item elem ent
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };
})();

let UIController = (function() {
  let DOMStrings = {
    inputTypes: ".add__type",
    inputDesc: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputTypes).value,
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

// Global app controller
let controller = (function(budgetCtrl, UICtrl) {
  let setupEventListeners = function() {
    let DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      //console.log(event);
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  let ctrlAddItem = function() {
    //console.log("Adding gratually  . . . ");

    let input, newItem;
    //1.Get th field input
    input = UICtrl.getInput();
    console.log(input);

    //2.Add th item  to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //3.Add the item to the UI

    //4.Calculate the budget

    //5.Display the budjet  in the UI
  };

  return {
    init: function() {
      console.log("Application has started");
      setupEventListeners();
    }
  };
})(budjetController, UIController);

controller.init();
