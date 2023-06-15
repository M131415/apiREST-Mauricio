var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre: {type: String, required: true, max:150},
    matricula: {type: Number, required: true},
    semestre: {type: Number, required: true},
    periodo: {type: String, required: true, max:20},
    materia1: {type: String, required: true, max:20},
    calificacion1: {type: Number, required:true},
    materia2: {type: String, required: true, max:20},
    calificacion2: {type: Number, required:true},
    materia3: {type: String, required: true, max:20},
    calificacion3: {type: Number, required:true},
    materia4: {type: String, required: true, max:20},
    calificacion4: {type: Number, required:true},
    materia5: {type: String, required: true, max:20},
    calificacion5: {type: Number, required:true},
});

module.exports = mongoose.model('boletas', UserSchema);