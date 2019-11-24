import Cube from 'cubejs';
Cube.initSolver();
const cube = new Cube();

export function newScramble(){
  cube.randomize();
  return cube.solve()
}
