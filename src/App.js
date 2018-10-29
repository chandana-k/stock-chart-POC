import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './sChart/SChart';
import SearchForm from './searchForm/SearchForm';
import axios from 'axios';


//import Chart from './App_chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	componentDidMount() {
  //   const IEX_BASE = 'https://api.iextrading.com/1.0/'
  //   // const symbol = this.props.cellObject.symbol
  //   const filter = '?filter=date,open,high,low,close,volume'
  // axios
  //   .get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=INX&apikey=NSUNV8LPVSSN0247&outputsize=full')
  //   //.get('${IEX_BASE}stock/chart/1y${filter}')
  //   .then((res) => {
  //     let values = res.data
  //     let data = values.map((obj) => {
  //     let date = obj.date + 'T05:00:00.000Z'
  //     obj.date = new Date(date)
  //     return obj
  //   })
  //   this.setState({ data })
  // })
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <ChartComponent />
        <SearchForm/>
      </div>
    );
  }
}

export default App;