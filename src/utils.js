import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
// import axios from 'axios';
function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=INX&apikey=NSUNV8LPVSSN0247&outputsize=full

//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo&datatype=csv

export function getData() {
    //const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv ")
	const promiseMSFT = fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=INX&apikey=NSUNV8LPVSSN0247&outputsize=full")
	 	.then(response => response.text())
        .then(data => tsvParse(data, parseData(parseDate)))
        // .then((res) => {
        //     let values = res.data
        //     let data = values.map((obj) => {
        //         let date = obj.date + 'T05:00:00.000Z'
        //         obj.date = new Date(date)
        //         return obj
        //     })
        // })
	return promiseMSFT;
}


