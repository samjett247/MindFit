// This is a chart component 

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';

const data = [
      {name: 'Feb 01', Sleep: 4000, Param2: 2400, Param3: 2400},
      {name: 'Spring 2019', Sleep: 3000, Param2: 1398, Param3: 2210},
      {name: 'Summer 2019', Sleep: 2000, Param2: 9800, Param3: 2290},
      {name: 'Fall 2019', Sleep: 2780, Param2: 3908, Param3: 2000},
      {name: 'Spring 2020', Sleep: 1890, Param2: 4800, Param3: 2181},
      {name: 'Summer 2020', Sleep: 2390, Param2: 3800, Param3: 2500},
      {name: 'Fall 2020', Sleep: 3490, Param2: 4300, Param3: 2100},
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
        <Line type="monotone" dataKey="Sleep" stroke="#8884d8" strokeWidth={3} activeDot={{r: 6}}/>
        <Line type="monotone" dataKey="Param2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Param3" stroke="#868788" />
    </LineChart>
  </div>
);

class Example_Chart extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		<div>
		<h1> An Example Chart </h1>
		<TimeSeriesChart data={data}/>
		</div>
	}
}

export default Example_Chart;