import Hero from "./Hero";
import React from "react";
import Brokerage from "./Brokerage";
import OpenningCharges from "./OpenningCharges";
import OpenAccount from "../OpenAccount";

function Pricing() {
    return (
      <div>
          <Hero />
          <OpenAccount />
          <Brokerage />
          <OpenningCharges />
      </div>
    );
  }
  
  export default Pricing;
  