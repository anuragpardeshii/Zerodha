function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pt-5 p-sm-2" style={{padding: "0 10%"}}>
      <div className="row mb-5 d-flex justify-content-center align-items-center gap-4">
        <div className="col-md-6 col-sm-12 ">
        <img src={imageURL} style={{width:"100%", minWidth: "15rem"}} alt="" />
        </div>
        <div className="col-md-6 col-sm-12 p-5 m-3 m-sm-1 p-sm-1 p-md-5 mb-5" style={{maxWidth: "30rem"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a style={{textDecoration: "none"}} href={tryDemo}>Try Demo  →</a>
            <a href={learnMore} style={{marginLeft: "7rem", textDecoration: "none"}}>Learn More  →</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/Images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft: "50px"}}>
              <img  src="media/Images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
