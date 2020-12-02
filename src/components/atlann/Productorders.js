import React from "react";
import { connect } from "react-redux";

import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

// import { getAllProducts } from "../../redux/actions/product";

class Productorders extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Request Orders</CardTitle>
        </CardHeader>
        <CardBody>
          {/* <div className="mt-4">
            <h5 className="primary text-bold-600">Active Sprints</h5>
            <hr />
            <h5 className="text-bold-600">Taxonomy Tools</h5>
            <p>Comment About Taxonomy Tool</p>

            <hr />
            <h5 className="text-bold-600">Insight API</h5>
            <hr />
            <h5 className="text-bold-600 success">Backlog</h5>
            <hr />
            <h5 className="text-bold-600">Taxonomy Tools</h5>
            <p>Comment About Taxonomy Tool</p>
          </div> */}
          <div className="mt-4">
            <h5 className="primary text-bold-600">Active Sprints</h5>
            <hr />
            {this.props.products &&
              this.props.products.order &&
              this.props.products &&
              this.props.products.order.map((product, index) => {
                return (
                  <div key={index}>
                    <h5
                      className="text-bold-600"
                      style={{ color: `${product.statuse.color.hex}` }}
                    >
                      {product.toolName.name}
                    </h5>
                    <p>{product.summaryComment}</p>
                    <hr />
                  </div>
                );
              })}
            {/* <h5 className="primary text-bold-600">Active Sprints</h5>
            <hr />
            <h5 className="text-bold-600">Taxonomy Tools</h5>
            <p>Comment About Taxonomy Tool</p>

            <hr />
            <h5 className="text-bold-600">Insight API</h5>
            <hr />
            <h5 className="text-bold-600 success">Backlog</h5>
            <hr />
            <h5 className="text-bold-600">Taxonomy Tools</h5>
            <p>Comment About Taxonomy Tool</p> */}
          </div>
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

export default connect(mapStateToProps, null)(Productorders);
