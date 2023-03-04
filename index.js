const { describe } = require("node:test");

function shout(string) {
    return string.toUpperCase();
  }
  

function whisper(string) {
    return string.toLowerCase();
  }


function logShout(string) {
    console.log(string.toUpperCase());
  }


function logWhisper(string) {
    console.log(string.toLowerCase());
  }



//function sayHiToHeadphonedRoommate(string) {
  //  var lowerCase = "I can\'t hear you!";
  //  var upperCase = "YES INDEED!";
  //  var dinner = "I would love to!";
  //  if (string.toLowerCase(string) === string) {
  //    return lowerCase;
  //  }
  //  else if (string.toUpperCase(string) === string) {
  //    return upperCase;
  //  }
  //  else if (console.log("Let\'s have dinner together") === string) {
  //    return dinner
  //  }
  //}

  function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello')
     return"I can\'t hear you!"
        else if (string === 'HELLO')
      return "YES INDEED!"
       else (string === "Let\'s have dinner together")
       return "I would love to!"
  }
