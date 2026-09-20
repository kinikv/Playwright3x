function classifyJsBasicsScore(score) {
  // write your code here
  if (score >= 90)
  {
    return "EXCELLENT";
  }
  else if (score >= 75 && score <= 89)
  {
    return "GOOD";
  }
  else if (score >= 50 && score <= 75)
  {
    return "NEEDS_PRACTICE";
  }
  else
  {
    return "REVISIT";
  }
 
}