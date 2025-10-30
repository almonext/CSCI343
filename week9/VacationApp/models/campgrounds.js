class Campground {
  constructor(id, stateId, name, avgCost, foundedYear, rating, imageUrl) {
    this.id = id;
    this.stateId = stateId;
    this.name = name;
    this.avgCost = avgCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - average Cost: ${this.avgCost}, Rating: ${this.rating}`;
  }
}

export default Campground;
