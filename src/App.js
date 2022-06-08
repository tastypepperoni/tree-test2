import React, { Fragment } from "react";
import data from "./mocks/data.json";
import Tree from "./components/Tree";
import alert from "./image/alert.svg";
import web from "./image/web.svg";
import "./styles.css";
import { transformData } from "./utils/data-transformer";

const transformedData = transformData(data);

export default function App() {
  return (
    <div className="App">
      <Tree
        data={transformedData}
        nodeRender={(node) => {
          // console.log(node)
          if (node.data.Flag) {
            return (
              <Fragment>
                <circle className="outter_alarm" r={38} />
                <circle className="inner_alarm" r={35} />
                <text dy="50" alignmentBaseline="hanging">
                  {node.data.DisplayName}
                </text>
                <image x="-23" y="-90" width="45px" href={alert}></image>
                <image x="-20" y="-26" width="40px" href={web}></image>
                <text dy="15" alignmentBaseline="hanging">
                  5
                </text>
              </Fragment>
            );
          } else {
            return (
              <Fragment>
                <circle className="outter" r={38} />
                <circle className="inner" r={35} />
                <text dy="50" alignmentBaseline="hanging">
                  {node.data.DisplayName}
                </text>

                <image x="-20" y="-26" width="40px" href={web}></image>
                <text dy="15" alignmentBaseline="hanging">
                  5
                </text>
              </Fragment>
            );
          }
        }}
      />
    </div>
  );
}
