/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

function correctSentence(text) {
  if (text.charAt(0)!=text.charAt(0).toUpperCase()){
    text = text.toUpperCase().charAt(0) + text.slice(1);
  }
  if (text.slice(-1) != '.'){
    text = text + '.';
  }
  return text;
}
export default correctSentence