import React, { useState } from 'react';

const Die = (props) => {
  const [dieClasses, setDieClasses] = useState(props.dieClasses);

  const updateDefaultDie = () => {
    dieClasses.includes("usedDie")
      ? setDieClasses(props.dieClasses)
      : setDieClasses(dieClasses + " usedDie");
  }

  const updateGrapeDie = () => {
    dieClasses.includes("usedGrape")
      ? setDieClasses(props.dieClasses)
      : dieClasses.includes("gainedGrape")
        ? setDieClasses(dieClasses + " usedGrape")
        : setDieClasses(dieClasses + " gainedGrape");
  }

  const updateDie = () => {
    dieClasses.includes("grapeDie")
      ? updateGrapeDie()
      : updateDefaultDie();
  }

  return (
    <button className="dieButton" onClick={ updateDie }>
      <img
        className={ dieClasses }
        key={ `${props.i}die` }
        src={ `/images/d6-${props.i}.png` }
        alt={ `${props.i}die` }
      />
    </button>
  );
}

export default Die;
