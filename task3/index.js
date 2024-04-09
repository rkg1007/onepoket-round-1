const fs = require("fs/promises");

async function countOfWords(fileName) {
  try {
    const data = await fs.readFile(fileName, { encoding: "utf8" });
    const words = data.split(" ").filter((word) => word.trim().length > 0);
    console.log(
      `Counts the number of words in file ${fileName} are :-`,
      words.length
    );
  } catch (error) {
    console.error("Error reading the file:", error.message);
  }
}

countOfWords("data.txt");
