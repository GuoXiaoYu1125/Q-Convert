
// var QuantumCircuit = require("quantum-circuit");

// //
// // 8-bit quantum random number generator
// //

// var circuit = new QuantumCircuit();

// //circuit.addGate("h", -1, 0);
// circuit.addGate("cx",-1,[0,1]);

// // circuit.addMeasure(0, "c", 0); 
// // circuit.addGate("x", -1, 1, { 
// //     condition: { 
// //         creg: "c",
// //         value: 7
// //     }
// // });

var QuantumCircuit = require("quantum-circuit");

var circuit = new QuantumCircuit();
circuit.createCreg("cRegister", 4);

circuit.addGate("x", -1, 0);

circuit.addGate("h", -1, 4);

circuit.addGate("h", -1, 4);

circuit.appendGate("measure", 4, {
        creg: {
                name: "cRegister",
                bit:0
        }
});

circuit.addGate("h", -1, 5);

circuit.addGate("CNOT", -1, [5,0]);

circuit.addGate("CNOT", -1, [5,2]);


circuit.addGate("u1", -1, 0,{
        params: {
                lambda : "pi/2"
        },
        condition: {
                reg: "cRegister",
                value :1        }});

circuit.addGate("h", -1, 5);

circuit.appendGate("measure", 5, {
        creg: {
                name: "cRegister",
                bit:1
        }
});

circuit.addGate("h", -1, 6);

circuit.addGate("cswap:", -1, [6,0,3]);

circuit.addGate("cswap:", -1, [6,0,1]);


circuit.addGate("u1", -1, 6,{
        params: {
                lambda : "pi/2"
        },
        condition: {
                reg: "cRegister",
                value :1        }});


circuit.addGate("u1", -1, 6,{
        params: {
                lambda : "pi/4"
        },
        condition: {
                reg: "cRegister",
                value :1        }});

circuit.addGate("h", -1, 6);

circuit.appendGate("measure", 6, {
        creg: {
                name: "cRegister",
                bit:2
        }
});

var qiskit = circuit.exportToQiskit({comment:"Comment to insert at the beginning.\nCan be multi-line comment as this one."}, false, null, null);

console.log(qiskit);

