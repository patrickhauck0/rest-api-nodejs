import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
})

const app = express();
routes(app);

//Middleware > alterar req e res e converter para json
/* app.use(express.json()); */

/* const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2, 
        titulo: "O Hobbit"
    }
] */

/* function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
} */

/* app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
}); */

//Deletar o app gets, já que passamos para o controller e routes.
/* app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
}) */

/* app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado")
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
}) */

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(204).send("O livro foi excluido.");
});

export default app;

