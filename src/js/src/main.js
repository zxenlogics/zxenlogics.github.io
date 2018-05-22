'use strict';

//import data from './data';

var data = [
	{ 
		"ride": "Bloomin Metric",
		"date": "May 20, 2018",
		"website": "https://www.bloominmetric.com/",
		"register" : "https://www.bloominmetric.com/"
    },
	{ 
		"ride": "Nassau to Suffolk",
		"date": "June 24, 2018",
		"website": "https://www.n2sbc.org/",
		"register" : "https://www.n2sbc.org/"
    },    
    {
		"ride": "Gold Goast Tour",
		"date": "July 15, 2018",
		"website": "https://www.hbcli.org/gold_coast_tour",
		"register" : "https://www.active.com/greenlawn-ny/cycling/gold-coast-tour-2018"        
    }
];


let getRides = () => {
    let ride = 'Summer sportifs';
    let year = '2018';

    return `Here are the ${data[0].ride} of ${year}`;
}

console.log(getRides());
console.log(`here is the data ${JSON.stringify(data, null, 2)}`);