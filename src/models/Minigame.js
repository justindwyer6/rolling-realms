export default class Minigame {
  constructor(name, state = undefined, slug = undefined) {
    this.name = name;
    this.state = state || this.getMinigameState();
    this.slug = slug || this.getMinigameSlug();
  }

  getMinigameSlug = () =>
    this.name.toLowerCase().replace(/\W+/g, "-");

  getMinigameState = () => `${this.name} State (eventually)`;
}
