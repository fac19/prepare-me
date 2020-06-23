import Landscape2 from './Landscape2';
import Portrait2 from './Portrait2';
import FrontCover from './FrontCover';
import BackCover from './BackCover';
import SinglePicture from './SinglePicture';
import Pecs12 from './Pecs12';

/* Relates component names to the actual components */

const getPageTemplateByName = {
  Landscape2: Landscape2,
  Portrait2: Portrait2,
  FrontCover: FrontCover,
  BackCover: BackCover,
  SinglePicture: SinglePicture,
  Pecs12: Pecs12,
};

export default getPageTemplateByName;
