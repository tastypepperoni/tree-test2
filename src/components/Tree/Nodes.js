import React from "react";

export default (props) => {
  const { nodes, nodeRender } = props;

  //console.log(nodes);
  return (
    <g className="d3-tree-nodes">
      {nodes.map((node, i) => {
        // var pattern = '/-alarm-/';
        if (
          node.data.NodeInfo._index !== "" &&
          node.data.NodeInfo._index.indexOf("alarm") === -1
        ) {
          return (
            <g key={i} transform={`translate(${node.y},${node.x})`}>
              {nodeRender(node, i)}
            </g>
          );
        } else {
          return null;
        }
      })}
    </g>
  );
};
