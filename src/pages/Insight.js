import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import Loader from "../components/common/Loader";
import { Title } from "../components/common/Text";

export default class Insight extends Component {
  state = {
    height: "100%"
  };
  componentDidMount() {
    const divElement = document.getElementById("viz1525064740653");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "100%";
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
  render() {
    return (
      <Fragment>
        <NavAppBar />
        <BreadcrumbsWithRouter />
        <PageContainer>
          <Grid container justify="center">
            <Grid item xs={8}>
              <div
                className="tableauPlaceholder"
                id="viz1525064740653"
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
                  <param
                    name="host_url"
                    value="https%3A%2F%2Fpublic.tableau.com%2F"
                  />
                  <param name="embed_code_version" value="3" />
                  <param
                    name="path"
                    value="views&#47;vizproject_0&#47;Distribution?:embed=y&amp;:display_count=y&amp;publish=yes"
                  />
                  <param name="toolbar" value="yes" />
                  <param
                    name="static_image"
                    value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;vi&#47;vizproject_0&#47;Distribution&#47;1.png"
                  />
                  <param name="animate_transition" value="yes" />
                  <param name="display_static_image" value="yes" />
                  <param name="display_spinner" value="yes" />
                  <param name="display_overlay" value="yes" />
                  <param name="display_count" value="yes" />
                  <param
                    name="filter"
                    value="publish=yes&Scientific Name=Sus scrofa"
                  />
                </object>
              </div>
            </Grid>
          </Grid>
        </PageContainer>
      </Fragment>
    );
  }
}
