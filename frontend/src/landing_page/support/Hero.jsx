function Hero() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#387ed1", padding: "2rem 5%" }}>
        <div className="row p-md-3 p-sm-1 m-5">
          <div className="d-flex justify-content-between">
            <a
              className="fs-4 mb-4"
              style={{ textDecoration: "none", color: "white" }}
            >
              Support Portal
            </a>
            <a
              className="fs-4 mb-4"
              style={{ textDecoration: "none", color: "white" }}
              href=""
            >
              Track Tickets
            </a>
          </div>
          <div className="row d-flex">
            <div className="col-7">
              <h4 className="pt-4 pb-4" style={{color: "white"}}>
                Search for an answer or browse help topics to create a ticket
              </h4>
              <div className="col p-2 w-100 d-flex flex-row align-items-center" style={{backgroundColor: "white"}}>
                <input
                  id="search-text"
                  className="border border-0 w-100 ps-2"
                  type="text"
                  autocomplete="off"
                  placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..."
                  autofocus=""
                />
                <span className="m-2 searching-img">
                <i class="fa fa-search w-100" aria-hidden="true"></i>
                </span>
              </div>
              <div className="d-flex flex-wrap pt-4 pb-4">
                <p className="border-bottom pb-2 me-4" style={{color: "white", fontSize: "1.2rem"}}>Track account opening</p>
                <p className="border-bottom pb-2 me-4" style={{color: "white", fontSize: "1.2rem"}}>Track segment activation</p>
                <p className="border-bottom pb-2 me-4" style={{color: "white", fontSize: "1.2rem"}}>Intraday margins</p>
                <p className="border-bottom pb-2 me-4" style={{color: "white", fontSize: "1.2rem"}}>Kite user manual</p>
              </div>
            </div>
            <div className="col-5 pt-4 ps-5" style={{lineHeight: "2"}}>
              <h3 style={{color: "white"}}>Features</h3>
              <ol>
                <li style={{color: "white", fontSize: "1.2rem"}}>Suspension of trading - IDFC Limited</li>
                <li style={{color: "white", fontSize: "1.2rem"}}>Rights Entitlements listing in October 2024</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
