"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emp_1 = require("./emp");
const fs = require("node:fs");
const path = require("node:path");
const yash = {
    id: 1,
    name: 'yash aryan',
    salary: 1000,
};
const raj = {
    id: 2,
    name: 'raj aryan',
    salary: 2000,
};
const aryan = {
    id: 3,
    name: 'aryan',
    salary: 3000,
};
let employees = { emps: [yash, raj, aryan] };
const binary = emp_1.Emps.toBinary(employees);
const binToJson = emp_1.Emps.fromBinary(binary);
console.log(binary);
console.log(binToJson);
fs.writeFileSync(path.resolve(__dirname, './src/binaryfile'), binary);
