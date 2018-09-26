import BasicControlFlow from './examples/BasicControlFlow';
import BasicDRY from './examples/BasicDRY';
import BasicLogic from './examples/BasicLogic';
import MediumLogic from './examples/MediumLogic';
import Simple from './examples/Simple';

const Registry = {
  "simple": Simple,
  "basic control flow": BasicControlFlow,
  "basic DRY": BasicDRY,
  "basic logic": BasicLogic,
  "medium logic": MediumLogic,
};

export default Registry;
