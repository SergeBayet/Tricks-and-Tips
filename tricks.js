(function() {
  const resultsElement = document.querySelector("#result");

  const SHORT_CUTS = 1;
  const FALSY_VALUES = 2;
  const ASSIGNATION_ERROR = 3;
  const RANDOM_ITEM_FROM_ARRAY = 4;
  const RANDOM_NUMBER_IN_SPECIFIC_RANGE = 5;
  const SHUFFLE = 6;
  const APPLY = 7;
  const EMPTY_ARRAY = 8;
  const TRUNCATE_ARRAY = 9;
  const OR_AND_CONDITIONS = 10;
  const NEGATIVE_BITWISE_OPERATOR = 11;
  const SWAP = 12;
  const MERGE_OBJECTS = 13;
  const GET_RID_OF_BAD_VALUES = 14;

  let trick = SHORT_CUTS;

  switch (trick) {
    case SHORT_CUTS:
      testShortCuts();
      break;
    case FALSY_VALUES:
      testFalsyValues();
      break;
    case ASSIGNATION_ERROR:
      testAssignationError();
      break;
    case RANDOM_ITEM_FROM_ARRAY:
      testRandomItemFromArray();
      break;
    case RANDOM_NUMBER_IN_SPECIFIC_RANGE:
      testRandomNumberInSpecificRange();
      break;
    case SHUFFLE:
      testShuffle();
      break;
    case APPLY:
      testApply();
      break;
    case EMPTY_ARRAY:
      testEmptyArray();
      break;
    case TRUNCATE_ARRAY:
      testTruncateArray();
      break;
    case OR_AND_CONDITIONS:
      testOrAndConditions();
      break;
    case NEGATIVE_BITWISE_OPERATOR:
      testNegativeBitwiseOperator();
      break;
    case SWAP:
      testSwap();
      break;
    case MERGE_OBJECTS:
      testMergeObjects();
      break;
    case GET_RID_OF_BAD_VALUES:
      testGetRidOfBadValues();
      break;
  }
  function testShortCuts() {
    let number = 1;
    let stringNumber = "1";
    let stringBoolean = "";

    number += "";
    stringNumber = +stringNumber;
    stringBoolean = !!stringBoolean;

    resultsElement.innerHTML =
      "<p>" +
      number +
      " : " +
      typeof number +
      "</p><p>" +
      stringNumber +
      " : " +
      typeof stringNumber +
      "</p><p>" +
      stringBoolean +
      " : " +
      typeof stringBoolean +
      "</p>";
  }

  function testGetRidOfBadValues() {
    let myArray = [1, 5, 3, 2, 5, 9, 10, 5, 8, 2, 17];
    myArray = myArray
      .map(item => {
        if (item % 2) return false;
        return item;
      })
      // Get rid of bad values
      .filter(Boolean);
    resultsElement.innerHTML = myArray.toString();
  }

  function testMergeObjects() {
    const person = { name: "David Walsh", gender: "Male" };
    const tools = { computer: "Mac", editor: "Atom" };
    const attributes = { handsomeness: "Extreme", hair: "Brown", eyes: "Blue" };

    const summary = { ...person, ...tools, ...attributes };

    resultsElement.innerHTML = "<p>" + JSON.stringify(summary) + "</p>";
  }

  function testSwap() {
    // Sans utilisation de variable intermédiaire... Déstructuration is wild!!
    let a = 42,
      b = 12;
    resultsElement.innerHTML = "<p>a = " + a + " ; b = " + b + "</p>";
    [a, b] = [b, a];
    resultsElement.innerHTML += "<p>a = " + a + " ; b = " + b + "</p>";
  }

  function testNegativeBitwiseOperator() {
    let numbersArray = [1, 2, 3, 4, 5];
    let index = numbersArray.indexOf(6); // index is equal to -1
    if (!index) {
      resultsElement.innerHTML =
        "<p>Ceci n'apparaitra que pour la Première valeur du tablau</p>";
    }
    if (!~index) {
      resultsElement.innerHTML = "<p>6 n'est pas dans le tableau</p>";
    }
  }

  async function testOrAndConditions() {
    let foo = "Leny";
    foo == "Leny" && testEmptyArray();
    await sleep(5000);
    foo == "Nico" || testTruncateArray();
  }

  function testTruncateArray() {
    let myArray = [15, 12, 8, 7, "foo", "bar"];
    let html = "<p> Old value : " + myArray.toString() + "</p>";
    myArray.length = 3;
    resultsElement.innerHTML =
      html + '<p> New value : "' + myArray.toString() + '"</p>';
  }

  function testEmptyArray() {
    let myArray = [15, 12, 8, 7, "foo", "bar"];
    let html = "<p> Old value : " + myArray.toString() + "</p>";
    myArray.length = 0; // equivalent to myArray = [];
    resultsElement.innerHTML =
      html + '<p> New value : "' + myArray.toString() + '"</p>';
  }

  function testApply() {
    let numbers = [5, 458, 120, -215, 228, 400, 122205, -85411];
    let maxInNumbers = Math.max.apply(Math, numbers); // equivalent to Math.max(5, 458, 120 ...)
    let minInNumbers = Math.min.apply(Math, numbers);
    let html =
      "<p>" +
      numbers.toString() +
      "</p><p>Max : " +
      maxInNumbers +
      "</p><p>Min : " +
      minInNumbers +
      "</p>";
    resultsElement.innerHTML = html;
  }

  function testShuffle() {
    let numbers = [5, 458, 120, -215, 228, 400, 122205, -85411];
    numbers = numbers.sort(function() {
      return Math.random() - 0.5; // Value between -0.5 and 0.5 (exclude) -> false or true
    });
    resultsElement.innerHTML = numbers.toString();
  }

  function testRandomNumberInSpecificRange() {
    let min = 200,
      max = 400;
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    resultsElement.innerHTML = x;
  }

  function testRandomItemFromArray() {
    let items = [12, 548, "a", 2, 5478, "foo", 8852, , "Doe", 2145, 119];
    let randomItem = items[Math.floor(Math.random() * items.length)];

    let html = "<p>" + randomItem + "</p>";
    resultsElement.innerHTML = html;
  }

  function testAssignationError() {
    let a = 0;
    if ((a = 0)) {
      console.log("a est égal à 0");
    } else {
      console.log("Tiens, ça ne lance pas une erreur!");
    }
    // if(0 = a)
    // {
    // 	console.log('a est égal à 0');
    // }
  }

  function testFalsyValues() {
    let a = [undefined, null, 0, NaN, false, ""];

    let html = "";
    a.forEach(val => {
      html += "<p>'" + val + "' : " + !!val + "</p>";
    });
    resultsElement.innerHTML = html;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
})();
