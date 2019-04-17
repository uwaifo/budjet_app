// budjet conrolleer
var budjetController = (function() {
  //use Capital Heading for constructor functions
  let Expense = function(id, descriction, value) {
    (this.id = id), (this.descriction = descriction), (this.value = value);
  };
  let Income = function(id, descriction, value) {
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
    //1.Get th field input
    let input = UICtrl.getInput();
    console.log(input);
    //2.Add th item  to budget controller

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
//creating income and expense functions
