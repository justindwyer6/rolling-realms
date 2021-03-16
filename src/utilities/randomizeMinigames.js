import shuffle from "shuffle-array";

export default function randomizeMinigames(rounds, setRounds) {
  const allMinigames = rounds.map((round) => round.minigame);
  const shuffledMinigames = shuffle(allMinigames);

  setRounds(
    rounds.map((round, i) => {
      const roundCopy = { ...round };
      roundCopy.minigame = shuffledMinigames[i];
      return roundCopy;
    }),
  );
}
