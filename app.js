console.log("ok");
var budjetController = (function() {
  var age = 4;
  var newAge = function(addAge) {
    return age + addAge;
  };

  return {
    publicTest: function(arg) {
      return newAge(arg);
    }
  };
})();

let UIController = (function() {})();

let controller = (function(budgetCtrl, UICtrl) {
  var x = budgetCtrl.publicTest(44);
  return {
    publicMethod: function() {
      console.log(x);
    }
  };
  /// CODES TO BE ADDED
})(budjetController, UIController);
