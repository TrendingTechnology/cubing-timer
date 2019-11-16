import Cube from 'cubejs';
import {storeScramble} from '../actions'
Cube.initSolver();
const cube = new Cube();
let scramble = cube.solve();

function newScramble(){
  cube.randomize();
}

export {scramble,newScramble}
