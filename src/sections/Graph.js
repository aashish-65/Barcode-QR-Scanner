import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../styles/Graph.css";

const Graph = () => {
  useLayoutEffect(() => {
    // Apply animated theme
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // Initial fade-in effect

    // Add legend
    chart.legend = new am4charts.Legend();

    // Add data
    chart.data = [
      { department: "CSE", count: 250 },
      { department: "AI", count: 48 },
      { department: "BCA", count: 25 },
      { department: "DS", count: 20 },
      { department: "ECE", count: 11 },
      { department: "ME", count: 1 },
      { department: "MCA", count: 1 },
      { department: "BBA", count: 1 },
      { department: "B.OPTM", count: 4 },
    ];

    // Add series
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "count";
    series.dataFields.category = "department";

    // Cleanup chart on component unmount
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <section className="graph-section">
      {/* <h2>Graph Section</h2> */}
      <div id="chartdiv" style={{ width: "100%"}}></div>
    </section>
  );
};

export default Graph;
