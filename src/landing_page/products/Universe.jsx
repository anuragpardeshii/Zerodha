function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ps-md-5 pe-md-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div
          className="row d-flex align-items-center ps-md-5 pe-md-5"
          style={{ padding: "2rem 10%" }}
        >
          <div className="col-lg-4 p-lg-5 col-md-6 col-sm-12 p-5 p-sm-0 mt-sm-4">
            <img
              src="media/Images/smallcaseLogo.png"
              style={{ width: "100%" }}
              alt=""
            />
            <p className="text-center text-small text-muted mt-3">
              Thematic Investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-lg-4 p-lg-5 col-md-6 col-sm-12 p-5 p-sm-0 mt-sm-4">
            <img
              src="media/Images/streakLogo.png"
              style={{ width: "100%" }}
              alt=""
            />
            <p className="text-center text-small text-muted mt-3">
              Systematic trading platform that allows you to create and backlet
              strategies without coding.
            </p>
          </div>
          <div className="col-lg-4 p-lg-5 col-md-6 col-sm-12 p-5 p-sm-0 mt-sm-4">
            <img
              src="media/Images/dittoLogo.png"
              style={{ width: "100%" }}
              alt=""
            />
            <p className="text-center text-small text-muted mt-3">
              Personalised advise on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
          <div className="col-lg-4 p-lg-5 col-md-6 col-sm-12 p-5 p-sm-0 mt-sm-4">
            <img
              src="media/Images/goldenpiLogo.png"
              style={{ width: "100%" }}
              alt=""
            />
            <p className="text-center text-small text-muted mt-3">
              Investment reasearch platform that offers detailed insights on
              stocks, sectors, supply chains and more.
            </p>
          </div>
          <div className="col-lg-4 p-lg-5 col-md-6 col-sm-12 p-5 p-sm-0 mt-sm-4">
            <img
              src="media/Images/sensibullLogo.svg"
              style={{ width: "100%" }}
              alt=""
            />
            <p className="text-center text-small text-muted mt-3">
              Options trading platform that kets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII and
              more.
            </p>
          </div>
          <div className="col-lg-4 p-lg-5 col-md-6 col-sm-12 p-5 p-sm-0 mt-sm-4">
            <img
              src="media/Images/zerodhaFundhouse.png"
              style={{ width: "100%" }}
              alt=""
            />
            <p className="text-center text-small text-muted mt-3">
              Our assest management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-md-4 col-sm-12 mx-auto">
      <button className="p-2 btn btn-primary btn-lg mt-5 fs-5 mb-5"> Signup</button>
      </div>
    </div>
  );
}

export default Universe;
