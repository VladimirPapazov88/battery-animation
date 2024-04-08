import {makeProject} from '@motion-canvas/core';

import battery from './scenes/battery?scene';
import buttonClick from './scenes/buttonClick?scene';

export default makeProject({
  scenes: [buttonClick, battery],
});
