import Cube from 'cubejs';

Cube.initSolver();
const cube = new Cube();
let scramble = cube.solve();

function newScramble(){
  cube.randomize();
  scramble = cube.solve();
}
export {scramble,newScramble}
