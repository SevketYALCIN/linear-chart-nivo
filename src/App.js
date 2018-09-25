import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Line } from '@nivo/line';
import { squat } from './data/squat';
import { deadlift } from './data/deadlift';

class App extends Component {
  state = {
    // 1 = All, 2 = Squat only, 3 = Deadlift only
    elementsShown: 1
  };

  render() {
    let data;
    switch (this.state.elementsShown) {
      case 1:
        data = [squat, deadlift];
        break;
      case 2:
        data = [squat];
        break;
      case 3:
        data = [deadlift];
        break;
      default:
        data = [squat, deadlift];
        break;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Linear Chart using nivo</h1>
        </header>
        <p>
          <input
            type="button"
            onClick={() => this.setState({ elementsShown: 1 })}
            value="All"
          />
          <input
            type="button"
            onClick={() => this.setState({ elementsShown: 2 })}
            value="Squat"
          />
          <input
            type="button"
            onClick={() => this.setState({ elementsShown: 3 })}
            value="Deadlift"
          />
        </p>
        <div className="chart-container">
          <Line
            height="400"
            width="1300"
            data={data}
            curve="monotoneX"
            margin={{
              top: 50,
              right: 110,
              bottom: 50,
              left: 60
            }}
            xScale={{
              type: 'time',
              format: '%m/%d/%Y',
              precision: 'day'
            }}
            yScale={{
              type: 'linear',
              stacked: true,
              min: 'auto',
              max: 'auto'
            }}
            minY="auto"
            maxY="auto"
            stacked={true}
            axisBottom={{
              orient: 'bottom',
              legend: 'Time',
              legendOffset: 36,
              legendPosition: 'center',
              format: '%b %d'
            }}
            axisLeft={{
              orient: 'left',
              legend: 'kg',
              legendOffset: -40,
              legendPosition: 'center'
            }}
            dotSize={10}
            dotColor="inherit:darker(0.3)"
            dotBorderWidth={2}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="y"
            dotLabelYOffset={-12}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
