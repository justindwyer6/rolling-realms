const minigames = {
  BetweenTwoCastles: {
    name: "Between Two Castles",
    rulesA: "Use 1 or 2 dice (1 per castle) to fill squares from the bottom up; #s on top must be lower than those below. When you complete a column, gain a bonus.",
    board: "",
    rulesB: "Score 1 {str} per completed row (each castle has 3 rows)."
  },
  BetweenTwoCities: {
    name: "Between Two Cities",
    rulesA: "Use 1 die in a square; same #s can’t be orthogonally adjacent. Gain a bonus when you complete a row/column.",
    board: "",
    rulesB: "Score stars equal to the lowest of the other 2 realms. This # cannot be higher than filled squares here."
  },
  Charterstone: {
    name: "Charterstone",
    rulesA: "Use 1 die to mark either a bonus (note the other rolled die on the crate) or all crates matching the die.",
    board: "",
    rulesB: ""
  },
  Euphoria: {
    name: "Euphoria",
    rulesA: "Use 1 die to either mark 1 # or (if a pair is rolled) mark both #s. Then bonus is based on the sum of that area.",
    board: "",
    rulesB: ""
  },
  MyLittleScythe: {
    name: "My Little Scythe",
    rulesA: "Use 1 die to mark a hex and gain a pumpkin/heart.",
    board: "",
    rulesB: "Score 1/2/3 {str} for 3+/6+/9+ {pkn} earned from anywhere throughout this round. Do the same for {hrt}."
  },
  Scythe: {
    name: "Scythe",
    rulesA: "Use 1 die to choose one of these options (all options remain available throughout the round):",
    board: "",
    rulesB: "Score 1 {str} per resource type if you have 2 extra resources. Score 2 {str} instead for 3+ extra resources."
  },
  Tapestry: {
    name: "Tapestry",
    rulesA: "",
    board: "",
    rulesB: ""
  },
  Viticulture: {
    name: "Viticulture",
    rulesA: "",
    board: "",
    rulesB: ""
  },
  Wingspan: {
    name: "Wingspan",
    rulesA: "",
    board: "/assets/Links/wingspan.png",
    rulesB: ""
  },
}

export default minigames
