//import http from "http";
import app from "./src/app.js";

const PORT = 3000;

/* const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livros",
    "/autores": "entrei na rota autores"
}; */

/* const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
}); */

//Trocou de server para app, pois criamos um arquivo para manager de rotas
app.listen(PORT, () => {
    console.log("servidor escutando!");
});