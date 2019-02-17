// This is a chart component

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';

const data = [
      {name: 'date', Deep: 2000, Light: 2400, rem: 2400},
      {name: 'Spring 2019', Deep: 3000, Light: 1398, rem: 2210},
      {name: 'Summer 2019', Deep: 2000, Light: 9800, rem: 2290},
      {name: 'Fall 2019', Deep: 2780, Light: 3908, rem: 2000},
      {name: 'Spring 2020', Deep: 1890, Light: 4800, rem: 2181},
      {name: 'Summer 2020', Deep: 2390, Light: 3800, rem: 2500},
      {name: 'Fall 2020', Deep: 3490, Light: 4300, rem: 2100},
];

const TimeSeriesChart = props => (
  <div>
    <LineChart width={800} height={400} data={props.data}
    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="Deep" stroke="#8884d8" strokeWidth={3} activeDot={{r: 6}}/>
        <Line type="monotone" dataKey="Light" stroke="#8884d8" strokeWidth={3} activeDot={{r: 6}}/>
        <Line type="monotone" dataKey="rem" stroke="#8884d8" strokeWidth={3} activeDot={{r: 6}}/>

  </LineChart>
  </div>
);

class Example_Chart extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
    return(
		<div>
		<h1 className="mx-auto text-center titletext">Summary Statistics </h1>
		<TimeSeriesChart data={data}/>
		</div>
  )
	}
}

export default Example_Chart;
