
var QuantumCircuit = require("quantum-circuit");

//
// 8-bit quantum random number generator
//

var circuit = new QuantumCircuit();

circuit.addGate("h", -1, 0);
circuit.addMeasure(0,"c",0)

var qiskit = circuit.exportToQiskit({comment:"Comment to insert at the beginning.\nCan be multi-line comment as this one."}, false, null, null);

console.log(qiskit);

