//Funcion constructora 
function Emitter()
{
    this.events = {}; 
}

// Metodo on. Recibe dos parametros para insertar funciones
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || []; 
    this.events[type].push(listener); 
}

//Metodo emit. Recibe un parametro con el que se manda llamar las funciones
Emitter.prototype.emit = function (type) {
    if(this.events[type])
    {
        this.events[type].forEach(function (listener){
            listener(); 
        });
    }
}

//Se exporta el constructor
module.exports = Emitter; 