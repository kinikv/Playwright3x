function isValidIdentifier(name) {
  const keywords = new Set([
    "break", "case", "catch", "class", "const", "continue",
    "debugger", "default", "delete", "do", "else", "export",
    "extends", "finally", "for", "function", "if", "import",
    "in", "instanceof", "let", "new", "return", "super",
    "switch", "this", "throw", "try", "typeof", "var",
    "void", "while", "with", "yield", "enum", "await",
    "implements", "interface", "package", "private",
    "protected", "public", "static"
  ]);

  // Must start with a letter, _ or $
  // Remaining characters can also contain digits
  const identifierRegex = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

  return identifierRegex.test(name) && !keywords.has(name);
}