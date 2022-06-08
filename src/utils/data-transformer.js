import { get } from "lodash";
import { hierarchy } from "d3";

export const transformData = (data) => {
  console.log(data);
  const notShowNoChildren = (arr) => {
    var returnArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].NodeInfo._index === "") {
        continue;
      } else {
        arr[i].Childs = notShowNoChildren(arr[i].Childs);
        console.log(123);
        returnArr.push(arr[i]);
      }
    }
    return returnArr;
  };
  console.log(notShowNoChildren(data.data));
  const root = get(data, "data[0]", null);
  if (root !== null) {
    return hierarchy(root, (d) => d.Childs);
  } else {
    return null;
  }
};
