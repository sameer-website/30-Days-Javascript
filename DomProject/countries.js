import countryItem from "./countryItem.js";
export default  class countries {
    getCountries = async () => {
      let response = await fetch("https://restcountries.com/v3.1/all");
      this.countries = await response.json();
    };
  
    render = async () => {
      await this.getCountries();
      let root = document.getElementById("root");
  
      for (const country of this.countries) {
         let el = new countryItem(country);
         let parentDiv = el.render();
          
         //apend to root
         root.append(parentDiv);
  
      }
    };
  }