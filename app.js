/*

BUDJET CONTROLLER  

*/
var budjetController = (function() {
  //use Capital Heading for constructor functions
  var Expense = function(id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };
  var Income = function(id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };

  //Data structure for application
  var data = {
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

      //create new ID// Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
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

/*

USER INTERFACE CONTROLLER

*/
let UIController = (function() {
  let DOMStrings = {
    inputTypes: ".add__type",
    inputDesc: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputTypes).value,
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;

      //1.create html string witg placeholder text

      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      //2.replace the placeholder text with some actual data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);

      //3.finally we insert the html into the DOM
      //document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },
    clearFields: function() {
      let fields, fieldsArr;

      fields = document.querySelectorAll(
        DOMStrings.inputDesc + ", " + DOMStrings.inputValue
      );
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      });
      fieldsArr[0].focus();
    },

    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

/*

MAIN APPLICATION CONTROLLER

*/
let controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      //console.log(event);
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newItem;
    //1.Get th field input
    input = UICtrl.getInput();
    //console.log(input);

    //2.Add th item  to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //3.Add the item to the UI
    UICtrl.addListItem(newItem, input.type);

    //clear the fields
    UICtrl.clearFields();
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
