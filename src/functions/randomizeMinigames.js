import defaultRounds from "../rounds";

export default function randomizeMinigames(rounds, setRounds) {
  const allMinigames = Object.values(defaultRounds);

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex]; // eslint-disable-line no-param-reassign
      array[randomIndex] = temporaryValue; // eslint-disable-line no-param-reassign
    }
    return array;
  };

  const shuffledMinigames = shuffle(allMinigames);
  const roundsCopy = { ...rounds };
  // eslint-disable-next-line no-unused-vars
  Object.entries(roundsCopy).forEach(([key, value], i) => {
    roundsCopy[key] = shuffledMinigames[i];
  });
  setRounds({ ...roundsCopy });
}
