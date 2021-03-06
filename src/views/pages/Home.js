import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import { getAllProducts } from "../../redux/actions/product";

// import SessionByDevice from "../../components/atlann/SessionByDevice";
import ProductOrders from "../../components/atlann/Productorders";
import SupportTracker from "../../components/atlann/SupportTracker";
import DispatchedOrders from "../../components/atlann/DispatchedOrders";

import "../../assets/scss/pages/card-analytics.scss";

let $primary = "#7367F0",
  // $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  // $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  // $info_light = "#1edec5",
  // $stroke_color = "#b9c3cd",
  // $label_color = "#e7eef7",
  // $purple = "#df87f2",
  $white = "#fff";

class Home extends React.Component {
  // return <h4>You're Home!.</h4>;
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <div id="dashboard-analytics" style={{ marginTop: "-60px" }}>
        <Row>
          {/* <Col lg="3" sm="12">
            <SessionByDevice
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col> */}

          <Col lg="4" sm="12">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="8" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="divider divider-left-center">
              <div className="divider-text">
                <h3>Active Sprints</h3>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null, { getAllProducts })(Home);
