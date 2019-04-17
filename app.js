// budjet conrolleer
var budjetController = (function() {})();

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
  let DOM = UICtrl.getDOMStrings();
  let ctrlAddItem = function() {
    //console.log("Adding gratually  . . . ");
    //1.Get th field input
    let input = UICtrl.getInput();
    console.log(input);
    //Add th item  to budget controller
    //Add the item to the UI
    //Calculate the budget
    //Display the budjet  in the UI
  };
  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    //console.log(event);
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(budjetController, UIController);
