import fs from "fs";

fs.writeFileSync("hello.txt", "Hello from intent!\n");

// DAĆ ODNOŚNIE TEGO KOMENTARZ
// POWIEDZIEĆ, ZE PLIK TO SA 010110 (dosłownie ładunki elektrycze) i node tak to interpretuje, ale udostępnia sposób na transformację tego
// JAKOŚ FAJNY SLAJD DO TEGO??
fs.readFileSync("hello.txt").toString();
