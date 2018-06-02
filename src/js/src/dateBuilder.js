export let dateBuilder = function() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date;
    let locale = "en-us";
    
    let newDate = d => {
        let parts = d.split('-');
        this.date = new Date(parts[0], parts[1] - 1, parts[2]);   
      return this;
    }
    
    let today = () => {
        this.date = new Date();
      return this;
    }
    
    let shortMonth = () => {
      // ref: https://jsfiddle.net/dstorey/Xgerq/
      return this.date.toLocaleString(locale, { month: "short"});
    }
    
    let longMonth = function() {
      // ref: https://jsfiddle.net/dstorey/Xgerq/
      return this.date.toLocaleString(locale, { month: "long" });
    }
    
    let toStrings = function() {    
        return this.date.toDateString();;
    }; 
    
    this.toLongDateString = function () {
        let date = this.date.getDate();
        let day = this.date.getDay();
        let month = longMonth();
        let year = this.date.getFullYear();
        let dateString = `${days[day]}, ${month} ${date} ${year}`;
        return dateString;
    }
    
    return {
      newDate: newDate,
      today: today,
      toStrings: toStrings,
      toLongDateString: toLongDateString
    }
    
  }();