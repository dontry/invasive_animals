import React, { Component} from "react";

export function renderMap(id,width="100%") {
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

export class GeographicalDistribution extends Component {
  componentDidMount() {
    renderMap("viz1525295396952", this.props.width);
    this.setState({ loadScript: true });
  }

  render() {
    const { species } = this.props;
    return (
      <div
        className="tableauPlaceholder"
        id="viz1525295396952"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Distribution "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;vi&#47;vizproject_0&#47;Distribution&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param
            name="path"
            value="views&#47;invasivespecies&#47;GeographicalDistribution?:embed=y&amp;:display_count=y"
          />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;GeographicalDistribution&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param
            name="filter"
            value={`publish=yes${species && `&&CommonName=${species}`}`}
          />
        </object>
      </div>
    );
  }
}

export class GeograhicalDensity extends Component {
  componentDidMount() {
    renderMap("viz1525295396953");
    this.setState({ loadScript: true });
  }
  render() {
    return (
      <div
        className="tableauPlaceholder"
        id="viz1525295396953"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Geographical Density - All "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;GeographicalDensity&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="invasivespecies&#47;GeographicalDensity" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;invasivespecies&#47;GeographicalDensity&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
        </object>
      </div>
    );
  }
}
