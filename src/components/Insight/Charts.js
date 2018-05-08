import React, { Component, Fragment } from "react";
import { TableauScript } from "../common/3rdPartyScripts";

export function renderChart(id, width="100%") {
  const divElement = document.getElementById(id);
  if (!divElement) return;
  const vizElement = divElement.getElementsByTagName("object")[0];
  if (!vizElement) return;
  vizElement.style.width = width
  vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

export class RecordsByState extends Component {
  state = {
    loadScript: false
  };
  componentDidMount() {
    renderChart("viz1525295303036", this.props.width);
    this.setState({ loadScript: true });
  }
  render() {
    const { loadScript } = this.state;
    return (
      <div
        className="tableauPlaceholder"
        id="viz1525295303036"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Records By State - All "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;RecordsByState&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="invasivespecies&#47;RecordsByState" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;RecordsByState&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
        </object>
        {/* {loadScript && <TableauScript />} */}
      </div>
    );
  }
}

export class MonthlyRecords extends Component {
  state = {
    loadScript: false
  };
  componentDidMount() {
    renderChart("viz1525295474778", this.props.width);
    this.setState({ loadScript: true });
  }
  render() {
    const { loadScript } = this.state;
    return (
      <div
        className="tableauPlaceholder"
        id="viz1525295474778"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Monthly Records - All "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;MonthlyRecords_1&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="invasivespecies&#47;MonthlyRecords_1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;MonthlyRecords_1&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
        </object>
        {/* {loadScript && <TableauScript />} */}
      </div>
    );
  }
}

export class TimeSeries extends Component {
  state = {
    loadScript: false
  };
  componentDidMount() {
    renderChart("viz1525295432167", this.props.width);
  }
  render() {
    const { loadScript } = this.state;
    return (
      <div
        className="tableauPlaceholder"
        id="viz1525295432167"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Time Series - All "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;TimeSeries&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="invasivespecies&#47;TimeSeries" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;TimeSeries&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
        </object>
        {/* {loadScript && <TableauScript />} */}
      </div>
    );
  }
}
