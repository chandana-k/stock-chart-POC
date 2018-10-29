// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import Chart from './App_chart';
import { getData } from "./utils"
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	componentDidMount() {
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

render(
	<ChartComponent />,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

