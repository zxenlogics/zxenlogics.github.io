export let dateBuilder = function() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let locale = "en-us";
    
    let newDate = function(d) {
        let parts = d.split('-');
        date = new Date(parts[0], parts[1] - 1, parts[2]);   
        return this;
    };
    
    let today = () => {
        date = new Date();
      return this;
    };
    
    let shortMonth = () => {
      // ref: https://jsfiddle.net/dstorey/Xgerq/
      return date.toLocaleString(locale, { month: "short"});
    };
    
    let longMonth = function() {
      // ref: https://jsfiddle.net/dstorey/Xgerq/
      return date.toLocaleString(locale, { month: "long" });
    };
    
    let toString = function() {    
        return date.toDateString();;
    }; 
    
    let toLongDateString = function () {
        let dt = date.getDate();
        let day = date.getDay();
        let month = longMonth();
        let year = date.getFullYear();
        let dateString = `${days[day]}, ${month} ${dt}, ${year}`;
        return dateString;
    };

    let hasPast = function () {
        let today = new Date();
        return  date < today;
    };
    
    let isToday = function() {
        let today = new Date();
        return  date === today;
    }

    return {
      newDate: newDate,
      today: today,
      isToday: isToday,
      hasPast: hasPast,
      toString: toString,
      toLongDateString: toLongDateString
    }    
  }