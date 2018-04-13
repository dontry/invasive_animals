export function indicesOf(substr, str) {
  const indices = [];
  let i = -1;
  while ((i = str.indexOf(substr, i + 1)) >= 0) indices.push(i);
  return indices;
}
