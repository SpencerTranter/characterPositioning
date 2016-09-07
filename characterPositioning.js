var args = process.argv.slice(2);

function countLetters(word) {
  var splitWord = word.join('').toLowerCase().split('');

  var obj = {};
    for(var i = 0; i < splitWord.length; i++) {
      if (!obj.hasOwnProperty(splitWord[i]))  {
        obj[splitWord[i]] = [i];
      } else {
        obj[splitWord[i]].push(i);
      }
    }
  console.log(obj);
}

countLetters(args);