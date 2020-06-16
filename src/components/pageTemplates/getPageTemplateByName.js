import Landscape2 from './Landscape2';
import Portrait2 from './Portrait2';
import FrontCover from './FrontCover';
import BackCover from './BackCover';
import SinglePicture from './SinglePicture';

const getPageTemplateByName = {
  Landscape2: Landscape2,
  Portrait2: Portrait2,
  FrontCover: FrontCover,
  BackCover: BackCover,
  SinglePicture: SinglePicture,
};

export default getPageTemplateByName;
