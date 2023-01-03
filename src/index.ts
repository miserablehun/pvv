import { Emp, Emps } from './emp';
import * as fs from 'node:fs';
import * as path from 'node:path';

const yash: Emp = {
  id: 1,
  name: 'yash aryan',
  salary: 1000,
};

const raj: Emp = {
  id: 2,
  name: 'raj aryan',
  salary: 2000,
};

const aryan: Emp = {
  id: 3,
  name: 'aryan',
  salary: 3000,
};

let employees: Emps = { emps: [yash, raj, aryan] };

const binary = Emps.toBinary(employees);
const binToJson = Emps.fromBinary(binary);

console.log(binary);
console.log(binToJson);

fs.writeFileSync(path.resolve(__dirname, '../src/binaryfile'), binary);

// The best part about protocol buffers is ->
// it's lightweight the same binaryfile if would have saved in json would be about 125bytes but here in 50 bytes the job is done
