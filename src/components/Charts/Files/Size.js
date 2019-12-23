import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

import { ChartContainer } from "./styles";

import api from "../../../services/api";

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value} MB`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/hqnrgxpj/";

  state = {
    activeIndex: 0,
    values: null
  };

  async componentWillMount() {
    const token = await localStorage.getItem("@userIdentification");
    const response = await api
      .get(`/size`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(function(error) {
        console.log(error.response.data);
      });

    if (response) {
      this.setState({
        values: [
          {
            name: "usado",
            value: response.data.size
          },
          {
            name: "Livre",
            value: 1000 - response.data.size
          }
        ]
      });
    }

    if (!response) {
      this.setState({
        used: "Error on get size",
        free: "Error on get size"
      });
    }
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    console.log(this.state.values);
    return (
      <ChartContainer>
        <PieChart width={800} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.state.values}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          />
        </PieChart>
      </ChartContainer>
    );
  }
}
