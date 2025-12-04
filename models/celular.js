import conexao from "../config/conexao.js"
const celularSchema = conexao.Schema({
    nome: {type: String, required: true},
    marca: {type: String},
    preco: {type: Number}
})

const celular = conexao.model("celular", celularSchema);
export default celular