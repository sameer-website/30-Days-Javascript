
export default class countryItem{
    constructor (country){
        this.country = country
    }
    render = ()=>{
        const parentDiv = document.createElement("div");
      parentDiv.className = "col-3 mt-5";

      //card div
      const card = document.createElement("div");
      card.className = "card";

      //image
      const image = document.createElement("img");
      image.className = "card-img-top";
      image.src = this.country.flags.svg;
      image.style.height = "200px";
      image.alt = this.country.flags.alt;

      //card body
      const cardbody = document.createElement("div");
      cardbody.className = "card-body";

      //h5
      const h5 = document.createElement("h5");
      h5.className = "card-title text-center";
      h5.innerText = this.country.name.common;

      //append to cardbody
      cardbody.append(h5);

      // append to card
      card.append(image);
      card.append(cardbody);

      //append to parentDiv
      parentDiv.append(card);

     
      return parentDiv;
    }
}
