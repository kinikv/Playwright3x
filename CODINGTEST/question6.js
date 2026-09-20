function countPassingJsBasicsChecks(results) {
  let count = 0;

  for (const result of results) {
    if (result.trim().toLowerCase().endsWith("pass")) {
      count++;
    }
  }

  return count;
}