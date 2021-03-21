export default class Minigame {
  constructor(name = undefined, state = undefined, slug = undefined) {
    this.name = name || this.getMinigameName(slug);
    this.state = state || this.getMinigameState();
    this.slug = slug || this.getMinigameSlug(name);
  }

  getMinigameName = (slug) =>
    slug
      .split("-")
      .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
      .join(" ");

  getMinigameSlug = (name) => name.toLowerCase().replace(/\W+/g, "-");

  getMinigameState = () => `${this.name} State (eventually)`;
}
