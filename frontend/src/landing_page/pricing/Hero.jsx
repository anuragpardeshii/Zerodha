function Hero() {
  return (
    <div className="container" style={{width: "75%"}}>
      <div className="row p-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-2">List of all charges and taxes</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-12 col-lg p-4">
          <img src="media/Images/pricingEquity.svg" alt="" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg col-md-12 p-4">
          <img src="media/Images/intradayTrades.svg" alt="" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg col-md-12 p-4">
          <img src="media/Images/pricingEquity.svg" alt="" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
