import shuffle from "shuffle-array";
import defaultRounds from "../models/rounds";

export default function randomizeMinigames(rounds, setRounds) {
  const allMinigames = defaultRounds.map((round) => round.minigame);

  const shuffledMinigames = shuffle(allMinigames);
  const roundsCopy = { ...rounds };
  // eslint-disable-next-line no-unused-vars
  Object.entries(roundsCopy).forEach(([key, value], i) => {
    roundsCopy[key] = shuffledMinigames[i];
  });
  setRounds({ ...roundsCopy });
}
