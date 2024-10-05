function Hero() {
  return (
    <>
      <div className="text-muted" style={{ backgroundColor: "#387ed1" }}>
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
          <div className="row">
            <div className="col-8">
              <h4>
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
              <div className="d-flex p-2">
                <p className="border-bottom pb-2 me-4">Track account opening</p>
                <p className="border-bottom pb-2 me-4">Track segment activation</p>
                <p className="border-bottom pb-2 me-4">Intraday margins</p>
                <p className="border-bottom pb-2 me-4">Kite user manual</p>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
