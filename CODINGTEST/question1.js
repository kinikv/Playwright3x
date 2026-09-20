function normalizeJsBasicsLabel(label) {
  // write your code here
  if (!label || !label.trim()) {
    return "js-basic";
  }

  const cleaned = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `js-basic-${cleaned}`;
}