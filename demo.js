'use strict'; 
// regular expression object 
// searching strings with RegExp.exec() function
(function() {
  
  function findAlerts(logData) {
    // regex capture groups to retrun data from the input string
    let regex = /ERROR(.*?):(.*?);/g;

    // displayRegexArray(regex.exec(logData));
    // display('----------------------------------');
    // display(regex.exec(logData));

    let result = regex.exec(logData);
    while(result !== null) {
      display(result[1]);
      display(result[2]);
      display('----------------------------------');
      result = regex.exec(logData);

    }
  }

  let logData = 'INFO:Ok;ERROR(HIGH):Broken;ERROR(MED):Upset; ERROR(LOW):Suspect;';
  findAlerts(logData);

}) ();
// statefull - you can exec multiple times and keep finding multiple matches in the string