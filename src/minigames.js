const minigames = {
  betweenTwoCastles: {
    name: "Between Two Castles",
    rulesA: "Use 1 or 2 dice (1 per castle) to fill squares from the bottom up; #s on top must be lower than those below. When you complete a column, gain a bonus.",
    game: {},
    rulesB: "Score 1 {str} per completed row (each castle has 3 rows)."
  },
  betweenTwoCities: {
    name: "Between Two Cities",
    rulesA: "Use 1 die in a square; same #s can’t be orthogonally adjacent. Gain a bonus when you complete a row/column.",
    game: {},
    rulesB: "Score stars equal to the lowest of the other 2 realms. This # cannot be higher than filled squares here."
  },
  charterstone: {
    name: "Charterstone",
    rulesA: "Use 1 die to mark either a bonus (note the other rolled die on the crate) or all crates matching the die.",
    game: {},
    rulesB: ""
  },
  euphoria: {
    name: "Euphoria",
    rulesA: "Use 1 die to either mark 1 # or (if a pair is rolled) mark both #s. Then bonus is based on the sum of that area.",
    game: {},
    rulesB: ""
  },
  littleScythe: {
    name: "My Little Scythe",
    rulesA: "Use 1 die to mark a hex and gain a pumpkin/heart.",
    game: {},
    rulesB: "Score 1/2/3 {str} for 3+/6+/9+ {pkn} earned from anywhere throughout this round. Do the same for {hrt}."
  },
  scythe: {
    name: "Scythe",
    rulesA: "Use 1 die to choose one of these options (all options remain available throughout the round):",
    game: {},
    rulesB: "Score 1 {str} per resource type if you have 2 extra resources. Score 2 {str} instead for 3+ extra resources."
  },
  tapestry: {
    name: "Tapestry",
    rulesA: "Use 1 die to fill a shape (rotating is ok; no limit to uses of each #). If you complete a BIG square, gain a bonus.",
    game: {},
    rulesB: "Score 1 {str} per completed BIG row/column (6 total)."
  },
  viticulture: {
    name: "Viticulture",
    rulesA: "Either use 1 die to gain a grape (circle it) or use the sum of 1 die and at least 1 gained grape (cross it off) to fill a wine order.",
    game: {},
    rulesB: ""
  },
  wingspan: {
    name: "Wingspan",
    rulesA: "Use 1 die in a square on any bird, left to right. The 1st and 2nd squares on each bird provide a bonus.",
    game: {},
    rulesB: "Score 2 per complete bird whose sum = wingspan."
  },
}

export default minigames
