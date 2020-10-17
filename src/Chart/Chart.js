import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { chartData } from "../App";

class Chart extends Component {
  state = {
    labels: [],
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [],
      },
    ],
  };

   getData = async () => {
    await chartData().then((res)=>{
      for (let i = 0; i < res.data.myBudget.length; i++) {
        this.state.datasets[0].data[i] = res.data.myBudget[i].budget;
        this.state.labels[i] = res.data.myBudget[i].title;
      }
    })
   
    return this.state;
  };
  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState({ data: await this.getData() });
        } catch (e) {
          //...handle the error...
        }
      })();
    }
  }
  render() {
    return (
      <div>
        {this.state.labels.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Pie
            data={this.state}
            options={{
              padding: "0px",
              defaultFontSize: "14px",
              responsive: true,
              maintainAspectRatio: true,
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        )}
      </div>
    );
  }
}
export default Chart;
