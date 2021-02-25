export default function rollDice(diceState, setDiceState) {
  const dieFace1 = Math.ceil(Math.random() * 6);
  const dieFace2 = Math.ceil(Math.random() * 6);

  setDiceState([
    { ...diceState[0], dieFace: dieFace1 },
    { ...diceState[1], dieFace: dieFace2 },
  ]);
}
