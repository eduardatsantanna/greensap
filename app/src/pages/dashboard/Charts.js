import React from "react"
import {
  XYPlot, VerticalGridLines, XAxis, YAxis,
  HorizontalBarSeriesCanvas, RadialChart
} from "react-vis";

export const Charts = () => {
  return (
    <div className="charts">
      <p className="title">Charts and analitycs</p>
      <div className="charts-area ">
        <div>
          <XYPlot width={300} height={300} stackBy="x" yType="ordinal">
            <VerticalGridLines />
            <XAxis />
            <YAxis left={0} />
            <HorizontalBarSeriesCanvas data={[{ y: "Project One", x: 10000 }, { y: "Project Two", x: 50000 }, { y: "Project Three", x: 15000 }]} />
          </XYPlot>
        </div>
        <div>
          <RadialChart
            getLabel={d => d.label}
            innerRadius={10}
            padAngle={10}
            data={[
              { angle: 1, color: "#FFF", name: "blue", opacity: 0.2 },
              { angle: 2, color: "#000", name: "yellow" },
              { angle: 5, color: "#1E96BE", name: "cyan" },
              { angle: 3, color: "#DA70BF", name: "magenta" },
              { angle: 5, color: "#F6D18A", name: "yellow again" }
            ]}
            labelsRadiusMultiplier={1.6}
            labelsStyle={{ fontSize: 16, fill: "#222" }}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}
