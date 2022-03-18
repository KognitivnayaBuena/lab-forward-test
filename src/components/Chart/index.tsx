import React from "react";
// @ts-ignore
import AnyChart from "anychart-react";
import { CHART_DATA_1, CHART_DATA_2 } from "../../data";

const Chart = () => {
  const data_1 = CHART_DATA_1.split("	");
  const data_2 = CHART_DATA_2.split("	");

  return (
    <>
      <AnyChart
        type="line"
        data={data_1}
        title="First Chart"
        legend="true"
        width={1000}
      />
      <AnyChart
        type="column"
        data={data_2}
        title="Second Chart"
        legend="true"
        width={1000}
      />
    </>
  );
};

export { Chart };
