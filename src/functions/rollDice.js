import d6Face1 from "../images/d6-1.png";
import d6Face2 from "../images/d6-2.png";
import d6Face3 from "../images/d6-3.png";
import d6Face4 from "../images/d6-4.png";
import d6Face5 from "../images/d6-5.png";
import d6Face6 from "../images/d6-6.png";

const dice = [d6Face1, d6Face2, d6Face3, d6Face4, d6Face5, d6Face6];

export default function rollDice() {
  const dieFace = Math.ceil(Math.random() * 6);

  return dice[dieFace];
}
