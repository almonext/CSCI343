class Listing {
    constructor(
      id,
      type,
      regionIds,
      name,
      description,
      imageUrl
    ) {
      this.id = id;
      this.type = type;
      this.regionIds = regionIds;
      this.name = name;
      this.description = description;
      this.imageUrl = imageUrl;
    }
  
    toString() {
      return ` ${this.name} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Listing;
