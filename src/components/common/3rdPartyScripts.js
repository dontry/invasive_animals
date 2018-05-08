import React from "react";
import Script from "react-load-script";

export const TableauScript = () => {
  return (
    <Script
      url="https://public.tableau.com/javascripts/api/viz_v1.js"
      onCreate={() => {
        console.log("create script");
      }}
      onError={() => {
        console.log("load script error");
      }}
      onLoad={() => {
        console.log("load tableau script");
      }}
    />
  );
};
