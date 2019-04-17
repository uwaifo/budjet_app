// budjet conrolleer
var budjetController = (function() {})();

let UIController = (function() {})();

// Global app controller
let controller = (function(budgetCtrl, UICtrl) {
  let ctrlAddItem = function() {
    console.log("Adding gratually  . . . ");
    //Get th field input
    //Add th item  to budget controller
    //Add the item to the UI
    //Calculate the budget
    //Display the budjet  in the UI
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    //console.log(event);
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(budjetController, UIController);
