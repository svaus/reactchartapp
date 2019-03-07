import React, {Component} from 'react';
import {Bar, Line, Pie}  from 'react-chartjs-2';

class Chart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData        
        }
    }

    render(){
        return (
        <div className="chartname">
            <Bar 
                data = {this.state.chartData}
                width={20}
                height={10}
                options={{
                    
                }}
            />

            <Pie data ={this.state.chartData} />

            <Line data ={this.state.chartData} />

        </div>
        )
    }
}

export default Chart;