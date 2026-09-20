function getJsBasicsKeywordMeaning(term) {
  // write your code here
  if (term === "NODE") {
    return "runtime";
  }
  else if (term === " v8 ") {
    return "engine";
  }
  else if (term === "npm") {
    return "package-manager";
  }
  else
  {
    return "unknown";
  }   
  
}