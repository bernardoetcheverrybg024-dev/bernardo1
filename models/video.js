import conexao from "../config/conexao.js"
const videoSchema = conexao.Schema({
    nome: {type: String, required: true},
    marca: {type: String},
    condicao:{type: String},
    preco: {type: Number},
    ano:{type: Date}

})

const video = conexao.model("video", videoSchema);
export default video