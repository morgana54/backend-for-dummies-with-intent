import fs from "fs";

fs.writeFileSync("hello.txt", "Hello from intent!\n");

fs.readFileSync("hello.txt").toString();

// fs. --> 'TAB'
