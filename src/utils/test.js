const getStrIndexes = originalStr => {
  const dataHashTable = {};
  for (let i = 0; i < originalStr.length; i++) {
    const currentItem = originalStr[i];
    const currentNumber = Number(currentItem);
    const itemIsNumber = Number.isInteger(currentNumber);
    if (!itemIsNumber) {
      dataHashTable[i] = currentItem;
    }
  }
  return dataHashTable;
};

const swapStrLetters = (originalStr, dataHashTable = {}) => {
  let reversedStr = '';
  let positiveIndex = 0;
  for (let i = originalStr.length - 1; i >= 0; i--) {
    const x = positiveIndex.toString();
    const shouldReplaceLetter = dataHashTable[x];
    reversedStr += shouldReplaceLetter
      ? dataHashTable[positiveIndex.toString()]
      : originalStr[i];
    positiveIndex++;
  }
  return reversedStr;
};

const reverseStrNumbers = originalStr => {
  const originalStrIndexes = getStrIndexes(originalStr);
  return swapStrLetters(originalStr, originalStrIndexes);
};

const test = {
  reverseStrNumbers,
};

export default test;
