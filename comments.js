(function() {
  // **********************************************************************
  // **********************************************************************
  // Bad comments
  // **********************************************************************
  // **********************************************************************

  // Function that returns a + b    (sans blague??)

  function add(a, b) {
    return +a + +b;
  }

  // **********************************************************************

  // Éviter le bruit inutile!

  function divide(a, b) {
    if (b == 0) {
      // Division par zéro! <-- C'était suffisamment clair
      //												 sans commentaire!
      return false;
    }
    return +a / +b;
  }

  // **********************************************************************

  // Éviter les "ghost comments" ! Ils doievent être effacés,
  // si vous voulez les récupérer : Git est là pour ça.

  function calculateHard(a, b) {
    // a = Math.sin(a) * Math.cos(b) + Math.cos(a) * Math.sin(b)
    a = Math.sin(a + b);
  }

  // **********************************************************************

  // Éviter le versionnage! Git est là pour ça!

  /**
   * function updated 06/09/19 - sergeBayet - added id testing
   **/

  function getUserDateCreation(id) {}

  // **********************************************************************
  // **********************************************************************
  // Good comments
  // **********************************************************************
  // **********************************************************************

  function addSetEntry(set, value) {
    /*    Don't return `set.add` because it's not chainable 
					in IE 11.  */
    set.add(value);
    return set;
  }

  // **********************************************************************

  function multiply(a, b) {
    /* TODO */
    // Correct mais temporaire!
  }

  // **********************************************************************

  // Ajouter une url lorsqu'un on fait un copier-coller d'un site
  // web...
  // From : https://davidwalsh.name/essential-javascript-functions

  var getAbsoluteUrl = (function() {
    var a;

    return function(url) {
      if (!a) a = document.createElement("a");
      a.href = url;

      return a.href;
    };
  })();

  // Usage
  getAbsoluteUrl("/something"); // https://davidwalsh.name/something

  // **********************************************************************
  // **********************************************************************
  // Ugly comments
  // **********************************************************************
  // **********************************************************************

  /* This code sucks, you know it and I know it.  
		 Move on and call me an idiot later.*/

  function doSillyStuff(a) {
    a++;
    a--;
    return a;
  }

  // **********************************************************************

  /* Class used to workaround Richard being a f***ing idiot */

  class workAround {
    /* ... */
  }
})();
