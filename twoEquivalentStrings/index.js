function twoEquivalentStrings(word1,word2){
  let one = word1.join("");
  let two = word2.join("");

  return one===two;
}