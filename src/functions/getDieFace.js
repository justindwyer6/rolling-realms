import d6Face1 from "../images/d6-1.png";
import d6Face2 from "../images/d6-2.png";
import d6Face3 from "../images/d6-3.png";
import d6Face4 from "../images/d6-4.png";
import d6Face5 from "../images/d6-5.png";
import d6Face6 from "../images/d6-6.png";

export default function getDieFace(thisDieFace) {
  if (thisDieFace === 1) {
    return d6Face1;
  }
  if (thisDieFace === 2) {
    return d6Face2;
  }
  if (thisDieFace === 3) {
    return d6Face3;
  }
  if (thisDieFace === 4) {
    return d6Face4;
  }
  if (thisDieFace === 5) {
    return d6Face5;
  }
  if (thisDieFace === 6) {
    return d6Face6;
  }
  throw Error(
    `Sorry, die can only be 1-6. ${thisDieFace} is not valid.`,
  );
}
