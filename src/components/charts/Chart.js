import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 40,
    pv: 24
  },
  {
    name: "Feb",
    uv: 30,
    pv: 13
  },
  {
    name: "Mar",
    uv: 20,
    pv: 98

  },
  {
    name: "Apr",
    uv: 27,
    pv: 39
  },
  {
    name: "May",
    uv: 18,
    pv: 48
  },
  {
    name: "Jun",
    uv: 23,
    pv: 38
  },
  {
    name: "Jul",
    uv: 34,
    pv: 43
  },
  {
    name: "Aug",
    uv: 34,
    pv: 43
  },
  {
    name: "Sep",
    uv: 34,
    pv: 43
  },
  {
    name: "Oct",
    uv: 34,
    pv: 43
  },
  {
    name: "Nov",
    uv: 34,
    pv: 43
  },
  {
    name: "Dec",
    uv: 34,
    pv: 43
  }
];

export default function Chart() {
  return (
    <BarChart
      width={1556}
      height={341}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="pv" fill="#FF6F1E" />
      <Bar dataKey="uv" fill="#282052" />
    </BarChart>
  );
}
