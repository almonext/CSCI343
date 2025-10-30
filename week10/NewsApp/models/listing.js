class Listing {
    constructor(
      id,
      type,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description
    ) {
      this.id = id;
      this.type = type;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `${this.headline} on ${this.date} by ${this.author} from ${this.agency} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Listing;
