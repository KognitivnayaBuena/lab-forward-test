import React from "react";
// @ts-ignore
import AnyChart from "../../../node_modules/anychart-react/dist/anychart-react";

const Chart = () => {
  return (
    <AnyChart
      type="line"
      data={[3, 1, 2]}
      title="My Chart Title"
      legend="true"
    />
  );
};

export { Chart };
