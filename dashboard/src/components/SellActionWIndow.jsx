import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContent";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext); // Use context methods
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  

  const handleSellClick = async () => {
    try {
      const response = await axios.delete("http://localhost:3002/deleteOrder", {
        params: {
          name: uid,         // Assuming these values are defined in your component
          qty: stockQuantity,
          price: stockPrice,
          mode: "Sell",
        },
      });
      console.log(response.data.message);
      GeneralContext.closeSellWindow();
    } catch (error) {
      console.error("Error while selling stock:", error.response?.data || error.message);
    }
  };
  
  

  const handleCancelClick = () => {
    closeSellWindow(); // Close the sell window on cancel
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
