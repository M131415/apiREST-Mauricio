var mongoose = require('mongoose');
var mongoDB = process.env.MONGO_URI || process.env.DB_URL;

mongoose.connect(mongoDB, {
     useNewUrlParser: true, 
     useUnifiedTopology:true
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongo DB no puede conectarse'));

var User = require('./user');

exports.user_create = function(req, res){
    var user = new User({
        nombre: req.body.nombre,
        matricula: req.body.matricula,
        semestre: req.body.semestre,
        periodo: req.body.periodo,
        materia1: req.body.materia1,
        calificacion1: req.body.calificacion1,
        materia2: req.body.materia2,
        calificacion2: req.body.calificacion2,
        materia3: req.body.materia3,
        calificacion3: req.body.calificacion3,
        materia4: req.body.materia4,
        calificacion4: req.body.calificacion4,
        materia5: req.body.materia5,
        calificacion5: req.body.calificacion5,
    });
    user.save(function(err){
        if(err){
            return next(err)
        }
    res.send({'message': 'mauricio ya se registro tu movimiento'})
    });
}

//READ - FIND
exports.user_details = function(req,res){
    User.findById(req.query.id, function(err, user){
        if(err) return next(err)
        res.send(user)
    })
}

// UPDATE PUT/PATH
exports.boleta_update = function(req,res){
    User.findByIdAndUpdate(req.query.id,{$set: req.body}, function(err, user){
        if(err) return next(err)
        res.send({"message": "se actualizo tu registro"})
    })
}

// DELETE
exports.boleta_delete = function(req,res){
    User.findByIdAndRemove(req.query.id, function(err, user){
        if(err) return next(err)  
        res.send({"message": "se elimino tu registro"})
    })
}