import conexao from "../config/conexao.js"
const kitUpgradeSchema = conexao.Schema({
    nome: {type: String},
    foto:{type: Buffer,
        get: (valor) => {
           if (!valor) return null;
             return `data:image/png;base64,${valor.toString('base64')}`;
         }

    }
})

const kitUpgrade = conexao.model("kitUpgrade", kitUpgradeSchema);
export default kitUpgrade