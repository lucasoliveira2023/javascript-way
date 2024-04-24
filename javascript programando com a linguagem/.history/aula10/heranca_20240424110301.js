Date.prototype.diasSemana = ['dom', 'seg', 'ter', 'quad', 'quint', 'sex', 'sab'];
Date.prototype.hoje = function () {
    return this.diasSemana[this.getDay()];
}
var agora = new Date();
console.log(agora.hoje);