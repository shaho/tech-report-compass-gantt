import React from "react";
import { connect } from "react-redux";

// import {} from ".."

import { getAllProducts } from "../../redux/actions/product";

import {
  Card,
  CardHeader,
  CardTitle,
  Table,
  UncontrolledTooltip,
  Progress,
} from "reactstrap";
import avatar1 from "../../assets/img/portrait/small/avatar-s-5.jpg";
import avatar2 from "../../assets/img/portrait/small/avatar-s-7.jpg";
import avatar3 from "../../assets/img/portrait/small/avatar-s-10.jpg";
import avatar4 from "../../assets/img/portrait/small/avatar-s-8.jpg";
import avatar5 from "../../assets/img/portrait/small/avatar-s-1.jpg";
import avatar6 from "../../assets/img/portrait/small/avatar-s-2.jpg";
import avatar7 from "../../assets/img/portrait/small/avatar-s-3.jpg";
import avatar8 from "../../assets/img/portrait/small/avatar-s-4.jpg";

class DispatchedOrders extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dispatched Orders</CardTitle>
        </CardHeader>
        {this.props.isFetching && <span>is loading...</span>}
        {this.props.error && <h1>{this.props.error}</h1>}
        <Table
          responsive
          className="dashboard-table table-hover-animation mb-0 mt-1"
        >
          <thead>
            <tr>
              <th>ORDER</th>
              <th>STATUS</th>
              <th>HOURS SPENT</th>
              <th>LOCATION</th>
              <th>DISTANCE</th>
              <th>START DATE</th>
              <th>EST DEL. DT</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products &&
              this.props.products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.tool}</td>
                    <td>
                      <div
                        className="bg-success"
                        style={{
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                          display: "inline-block",
                          marginRight: "5px",
                        }}
                      />
                      <span>{product.status}</span>
                    </td>
                    <td className="p-1">
                      <ul className="list-unstyled users-list m-0 d-flex">
                        <li className="pull-up">{product.duration}</li>
                      </ul>
                    </td>
                    <td>Anniston, Alabama</td>
                    <td>
                      <span>130 km</span>
                      <Progress
                        className="mb-0 mt-1"
                        color="success"
                        value="80"
                      />
                    </td>
                    <td>14:58 26/07/2018</td>
                    <td>28/07/2018</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card>
    );
  }
}
// export default DispatchedOrders;

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    isFetching: state.products.isFetching,
    error: state.products.error,
  };
};

export default connect(mapStateToProps, { getAllProducts })(DispatchedOrders);
