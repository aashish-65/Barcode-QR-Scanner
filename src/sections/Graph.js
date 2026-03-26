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
    chart.hiddenState.properties.opacity = 0;
    chart.innerRadius = am4core.percent(25);
    chart.depth = 30;
    chart.angle = 40;

    // Chart background - transparent for dark theme
    chart.background.fill = am4core.color("transparent");

    // Custom color palette matching the dark theme
    chart.colors.list = [
      am4core.color("#7c3aed"),  // purple
      am4core.color("#06b6d4"),  // cyan
      am4core.color("#3b82f6"),  // blue
      am4core.color("#8b5cf6"),  // violet
      am4core.color("#14b8a6"),  // teal
      am4core.color("#f59e0b"),  // amber
      am4core.color("#ec4899"),  // pink
      am4core.color("#22c55e"),  // green
      am4core.color("#ef4444"),  // red
    ];

    // Add legend with light text
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = am4core.color("#a0a0b8");
    chart.legend.valueLabels.template.fill = am4core.color("#f0f0f5");
    chart.legend.fontSize = 13;
    chart.legend.fontFamily = "Inter, sans-serif";
    chart.legend.itemContainers.template.paddingTop = 4;
    chart.legend.itemContainers.template.paddingBottom = 4;
    chart.legend.markers.template.width = 14;
    chart.legend.markers.template.height = 14;

    // Add data
    chart.data = [
      { department: "CSE", count: 250 },
      { department: "AI", count: 48 },
      { department: "BCA", count: 25 },
      { department: "DS", count: 20 },
      { department: "ECE", count: 11 },
      { department: "B.OPTM", count: 4 },
      { department: "ME", count: 1 },
      { department: "MCA", count: 1 },
      { department: "BBA", count: 1 },
    ];

    // Add series
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "count";
    series.dataFields.category = "department";

    // Slice styling
    series.slices.template.strokeWidth = 1;
    series.slices.template.strokeOpacity = 0.3;
    series.slices.template.stroke = am4core.color("#0a0a0f");
    series.slices.template.cornerRadius = 4;

    // Hover state
    let hoverState = series.slices.template.states.getKey("hover");
    hoverState.properties.shiftRadius = 0.06;
    hoverState.properties.scale = 1.03;

    // Label styling - light text
    series.labels.template.fill = am4core.color("#f0f0f5");
    series.labels.template.fontSize = 13;
    series.labels.template.fontFamily = "Inter, sans-serif";
    series.labels.template.fontWeight = "500";
    series.labels.template.text = "{category}: {value.percent.formatNumber('#.0')}%";

    // Tick (connector line) styling
    series.ticks.template.stroke = am4core.color("#4a4a5e");
    series.ticks.template.strokeWidth = 1;
    series.ticks.template.strokeOpacity = 0.6;

    // Tooltip styling
    series.slices.template.tooltipText = "{category}: {value} students ({value.percent.formatNumber('#.0')}%)";
    series.tooltip.label.fill = am4core.color("#f0f0f5");
    series.tooltip.background.fill = am4core.color("#1a1a2e");
    series.tooltip.background.strokeWidth = 1;
    series.tooltip.background.stroke = am4core.color("#7c3aed");
    series.tooltip.background.cornerRadius = 8;
    series.tooltip.label.fontSize = 13;
    series.tooltip.label.fontFamily = "Inter, sans-serif";

    // Cleanup chart on component unmount
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <section className="graph-section">
      <h2>Department-wise Registration</h2>
      <p className="graph-subtitle">Breakdown of registered students across departments</p>
      <div id="chartdiv" style={{ width: "100%"}}></div>
    </section>
  );
};

export default Graph;

