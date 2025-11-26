import conexao from "../config/conexao.js"
const perifericosSchema = conexao.Schema({
    nome: {type: String, required: true},
    marca: {type: String},
    preco: {type: Number}
})

const perifericos = conexao.model("perifericos", perifericosSchema);
export default perifericos