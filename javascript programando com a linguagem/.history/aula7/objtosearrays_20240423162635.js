var Airbus = new Object();

Airbus.a380 = "Intercontinental";
Airbus.a320 = "Curtas distancias";
Airbus.voar = function () {
    console.log(this.a380);
    console.log(this.a320);
}
console.log(Airbus);