// This is a chart component

import { AreaChart, Area, Label,XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
import get_user_data from './compute_chart_data.js'

var orig_data = get_user_data();
const data = orig_data.slice(1,8)

console.log(data)


const TimeSeriesChart = props => (
  <div>
    <AreaChart width={800} height={400} data={props.data}
    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="Date" padding={{left: 30, right: 30}}>
        </XAxis>
        <YAxis value="Date" label={{ value: 'Minutes of Sleep', angle: -90, position: 'insideLeft' }} />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend position="insideTopRight"/>
        <Area type="monotone" dataKey="Light Sleep" stroke="#82ca9d" fill='#82ca9d'/>
        <Area  type="monotone" dataKey="REM Sleep" stroke="#868788" fill='#868788'/>
        <Area type="monotone" dataKey="Deep Sleep" stroke="#8884d8" fill="#8884d8" strokeWidth={3} activeDot={{r: 6}}/>
        
    </AreaChart>
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
