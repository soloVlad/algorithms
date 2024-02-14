const isUnique = (item, index, array) => {
  return array.indexOf(item) === index;
}

const getUnique = (array) => {
  return array.filter(isUnique);
}

module.exports = {
  getUnique,
}