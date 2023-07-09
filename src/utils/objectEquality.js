function objectEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!obj2[key] || obj1[key].text !== obj2[key].text) return false;
  }

  return true;
}

module.exports = objectEquality;
