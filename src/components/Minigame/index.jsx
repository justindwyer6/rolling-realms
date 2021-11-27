import React from "react";
import ErrorBoundary from "components/ErrorBoundary";
import Board from "components/Board";
import MinigameSelector from "components/MinigameSelector";
import Star from "components/Star";
import "./Minigame.scss";

const Minigame = ({ index, realm, updateMinigame }) => {
  const { name, slug } = realm;
  const stars = [1, 2, 3, 4, 5, 6];

  return (
    <ErrorBoundary>
      <div className={`Minigame ${slug}`}>
        <MinigameSelector
          index={index}
          minigameName={name}
          updateMinigame={updateMinigame}
        />
        <Board minigameName={name} />
        <>
          {stars.map((star) => (
            <Star key={star} index={`${index}-star-${star}`} />
          ))}
        </>
      </div>
    </ErrorBoundary>
  );
};

// Minigame.propTypes = {
//   index: PropTypes.number.isRequired,
//   realm: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     realm: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//   }),
//   updateMinigame: PropTypes.func.isRequired,
// };

export default Minigame;
