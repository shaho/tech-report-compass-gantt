import React from "react";
import Chart from "react-google-charts";

import { connect } from "react-redux";

import { getAllProducts } from "../../redux/actions/product";

import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

class SupportTracker extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Active Sprints Gantt Chart
            <h6 style={{ color: "rgb(184, 194, 204" }}>Last 6 Months</h6>
          </CardTitle>
        </CardHeader>

        <CardBody>
          {this.props.products && this.props.products.gantt && (
            <Chart
              style={{ marginTop: "2em" }}
              width={"100%"}
              height={"200px"}
              chartType="Gantt"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: "string", label: "Name" },
                  { type: "string", label: "Epic Name" },
                  { type: "string", label: "Resource" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" },
                ],
                ...this.props.products.gantt.map((item, index) => [
                  item.toolName.name,
                  item.toolName.name,
                  `${item.toolName.epic.name} ${index}`,
                  new Date(item.startDate),
                  new Date(item.endDate),
                  null,
                  item.completePercentage,
                  null,
                ]),
              ]}
              options={{
                height: 200,
                gantt: {
                  trackHeight: 30,
                },
              }}
              rootProps={{ "data-testid": "2" }}
            />
          )}
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    isFetching: state.products.isFetching,
    error: state.products.error,
  };
};

export default connect(mapStateToProps, null)(SupportTracker);
