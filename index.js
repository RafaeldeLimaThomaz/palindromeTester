module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}
// checks emptyness or blankness
String.prototype.blank = function() {
  if (Array.from(this) == '/\^s+^/')
    return true;
}

String.prototype.last = function() {
  return Array.from(this).slice(-1);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example: 
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true if the phrase is a palindrome, false otherw.
  this.palindrome = function palindrome() {
    return this.processedContent() === 
    this.processedContent().reverse();
  }

  // Makes the phrase LOUDER.
  this.louder = function(){
    return this.content.toUpperCase();
  };
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent(){
    return this.processor(this.translation);
  }

  
}

TranslatedPhrase.prototype = new Phrase();




























function emailParts(email){
  let lowCaseEmail = email.toLowerCase();
  let userName = "";
  let domain = "";
  let i = 0;
  while(lowCaseEmail.charAt(i) != '@'){
    userName = userName + lowCaseEmail.charAt(i);
    i++;
  }
  i ++;
  while(lowCaseEmail.charAt(i) != '.'){

    domain = domain + lowCaseEmail.charAt(i);
    i++;
  }

  return "userName: " + userName + "   " + "domain: " + domain;
}







































