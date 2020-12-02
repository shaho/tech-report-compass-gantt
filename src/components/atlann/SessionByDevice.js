import React from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import hklogo from "../../assets/img/logo/hk-logo.png";

export default function SessionByDevice() {
  return (
    <Card className="text-center greet-user fixed-height">
      <CardHeader>
        <img
          src={hklogo}
          alt="Heineken"
          width="140"
          className="p-6 inline-flex"
          style={{ display: "block", margin: "0 auto" }}
        />
      </CardHeader>
      <CardBody>
        <h2 className="mb-4">Tech Status Report</h2>
        <p style={{ marginBottom: "8em" }}>19th Nov 2020</p>
        <p style={{ position: "absolute", right: "1em", bottom: "0.1em" }}>
          Powered by Atlann
        </p>
      </CardBody>
    </Card>
  );
}
