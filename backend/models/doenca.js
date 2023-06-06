const mongoose = require("mongoose");

const { Schema } = mongoose;

const doencaSchema = new Schema({
    nome : {
        type : String,
        required: true
    },
    data : {
        type: Date,
        required: true,
        
    },
    sintomas : {
        type: String,
        required: true,
        
    },
    tratamento : {
        type: String,
        required: true,
        
    },
    gravidade : {
        type: String,
        required: true,
        
    }
},
    {timestamps: true}//salva a data de criação e data de atualização
);

const Doenca = mongoose.model("Doencas", doencaSchema);

module.exports = Doenca;