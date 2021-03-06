import React, { Component } from "react";
import { DocumentationViewer } from "@brandwatch/axiom-documentation-viewer";
import Bars from "./Charts/Bars";
import BarChart from "./Charts/BarChart";
import Chart from "./Charts/Chart";
import DataPoint from "./Charts/DataPoint";
import DotPlotChart from "./Charts/DotPlotChart";
import Line from "./Charts/Line";
import LineChart from "./Charts/LineChart";
import RadarChart from "./Charts/RadarChart";
import SparkLine from "./Charts/SparkLine";
import WordCloud from "./Charts/WordCloud";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationViewer
        config={[
          {
            id: "bars",
            name: "Bars",
            Component: Bars,
          },
          {
            id: "bar-chart",
            name: "Bar Chart",
            Component: BarChart,
          },
          {
            id: "chart",
            name: "Chart",
            Component: Chart,
          },
          {
            id: "data-point",
            name: "Data Point",
            Component: DataPoint,
          },
          {
            id: "dot-plot-chart",
            name: "Dot Plot Chart",
            Component: DotPlotChart,
          },
          {
            id: "line",
            name: "Line",
            Component: Line,
          },
          {
            id: "line-chart",
            name: "Line Chart",
            Component: LineChart,
          },
          {
            id: "radar-chart",
            name: "Radar Chart",
            Component: RadarChart,
          },
          {
            id: "spark-line",
            name: "Spark Line",
            Component: SparkLine,
          },
          {
            id: "word-cloud",
            name: "Word Cloud",
            Component: WordCloud,
          },
        ]}
        path="/docs/packages/axiom-charts"
      />
    );
  }
}
