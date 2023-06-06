const mongoose = require("mongoose");

const { Schema } = mongoose;

const defensivoSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    valor : {
        type: String,
        required: true,
    },
    data : {
        type: String,
        required: true,
    },
    descricao : {
        type: String,
        required: true
    },
    fabricante : {
        type: String,
        required: true
    }
},
    {timestamps: true}//salva a data de criação e data de atualização
);

const Defensivo = mongoose.model("Defensivos", defensivoSchema);

module.exports = Defensivo;