import React, { useState } from 'react';
import './Die.scss';

const Die = (props) => {
  const [dieState, setDieState] = useState(props.dieState);

  const updateStandardDie = () => {
    dieState === "marked"
      ? setDieState("unmarked")
      : setDieState("marked");
  }

  const updateGrapeDie = () => {
    dieState === "marked"
      ? setDieState("unmarked")
      : dieState === "gained"
        ? setDieState("marked")
        : setDieState("gained");
  }

  const updateDie = () => {
    props.dieType === "grape"
      ? updateGrapeDie()
      : updateStandardDie();
  }

  return (
    <button className="dieButton" onClick={ updateDie }>
      <img
        className={ `${ props.dieType } ${ dieState }` }
        key={ `${props.dieFace}die` }
        src={ `./images/d6-${props.dieFace}.png` }
        alt={ `${props.dieFace}die` }
      />
    </button>
  );
}

export default Die;
