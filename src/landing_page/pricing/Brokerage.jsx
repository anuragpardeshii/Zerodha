function Brokerage() {
  return (
    <div className="container" style={{width: "75%"}}>
      <div className="border-bottom d-flex justify-content-start align-items-center mb-4">
          <div className="p-3 border-bottom border-primary border-opacity-95"><h4><a style={{ textDecoration: "none"}} href="">Equity</a></h4></div>
          <div className="p-3"><h4><a style={{textDecoration: "none"}} href="">Currency</a></h4></div>
          <div className="p-3"><h4><a style={{textDecoration: "none"}} href="">Commodity</a></h4></div>
        </div>
        <table className="table table-light mb-5 table-light table-borderless border-start border-end border-top border-bottom">
        <thead>
          <tr className="border-bottom t-padding">
            <th scope="col"></th>
            <th scope="col">Equity delivery</th>
            <th scope="col">Equity intraday</th>
            <th scope="col">F&O - Futures</th>
            <th scope="col">F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr className="t-padding">
            <td>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr className="t-padding">
            <td>STT/CTT</td>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td>
                <ul>
                    <li>0.0125% of the intrinsic value on options that are bought and exercised</li>
                    <li>0.1% on sell side (on premium)</li>
                </ul>
            </td>
          </tr>
          <tr className="t-padding">
            <td>Transaction charges</td>
            <td>NSE: 0.00297% <br />BSE: 0.00375%</td>
            <td>NSE: 0.00297% <br />BSE: 0.00375%</td>
            <td>NSE: 0.00173% BSE: 0</td>
            <td>
            NSE: 0.03503% (on premium) <br />
            BSE: 0.0325% (on premium)
            </td>
          </tr>
          <tr className="t-padding">
            <td>GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr className="t-padding">
            <td>SEBI charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr className="t-padding">
            <td>Stamp Charges</td>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mt-5 fs-5 p-4 mb-5"><a style={{textDecoration: "none"}} href="">Calculate your costs upfront</a> using our brokerage calculator</p>
    </div>
  );
}

export default Brokerage;
