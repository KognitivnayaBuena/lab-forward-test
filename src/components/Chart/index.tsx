import React from "react";
// @ts-ignore
import AnyChart from "../../../node_modules/anychart-react/dist/anychart-react";
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
        layout="vertical"
        width={1000}
        grid={[1]}
        // lineMarker={[
        //   1,
        //   {
        //     value: 2,
        //   },
        // ]}
        // step={2}
        // yAxis={[
        //   1,
        //   {
        //     orientation: "right",
        //     enabled: true,
        //     labels: {
        //       format: "{%Value}{decimalPoint:\\,}",
        //       fontColor: "red",
        //     },
        //   },
        // ]}
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
