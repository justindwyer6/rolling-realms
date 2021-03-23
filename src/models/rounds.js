import Minigame from "./Minigame";
import Round from "./Round";

const rounds = [
  new Round("1a", new Minigame("Scythe")),
  new Round("1b", new Minigame("Between Two Cities")),
  new Round("1c", new Minigame("Charterstone")),
  new Round("2a", new Minigame("Between Two Castles")),
  new Round("2b", new Minigame("Viticulture")),
  new Round("2c", new Minigame("Euphoria")),
  new Round("3a", new Minigame("My Little Scythe")),
  new Round("3b", new Minigame("Tapestry")),
  new Round("3c", new Minigame("Wingspan")),
];

const roundSlugs = rounds.map((round) => round.minigame.slug);

const roundIds = rounds.map((round) => round.id);

export { rounds as default, roundSlugs, roundIds };
