import fs from "fs";

// Read the content of the file
const fileContent = fs.readFileSync("message.txt").toString();

// Manipulate the content (reverse the text)
const reversedContent = fileContent.split("").reverse().join("");

// Write the modified content back to the file, overwriting the original content
fs.writeFileSync("reverseMessage.txt", reversedContent);
