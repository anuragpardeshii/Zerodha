function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 mt-5 border-top">
        <h1 className="text-center pt-5">People</h1>
      </div>
      <div
        className="row p-3 text-muted fs-6 d-flex align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/Images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt=""
          />
          <h4 className="mt-4">Nitin Kamath</h4>
          <h6>Founer, CEO</h6>
        </div>
        <div className="col-6 p-3" style={{fontSize: "1.2rem"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p><a style={{textDecoration: "none"}} href="">Connect on Homepage</a> / <a style={{textDecoration: "none"}} href="">TradingQnA</a> / <a style={{textDecoration: "none"}} href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
