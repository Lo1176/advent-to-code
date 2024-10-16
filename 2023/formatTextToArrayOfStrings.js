import fs from 'fs';

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);

    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

function formatTextToArrayOfStrings(filePath) {
  const data = readFile(filePath);

  const arrayOfStrings = data.split('\n').map((line) => line.trim());

  return arrayOfStrings;
}

export default formatTextToArrayOfStrings;
