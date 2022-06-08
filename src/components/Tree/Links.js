import { linkHorizontal } from "d3";
import React from "react";

export default (props) => {
  const { links } = props;
  return (
    <g className="d3-tree-links">
      {links.map((link, i) => {
        if (
          link.source.data.NodeInfo._index.indexOf("alarm") === -1 &&
          link.target.data.NodeInfo._index.indexOf("alarm") === -1 &&
          link.source.data.NodeInfo._index !== "" &&
          link.target.data.NodeInfo._index !== ""
        ) {
          return (
            <g key={i}>
              <path
                d={linkHorizontal()
                  .x((d) => d.y)
                  .y((d) => d.x)(link)}
              />
            </g>
          );
        }
      })}
    </g>
  );
};
