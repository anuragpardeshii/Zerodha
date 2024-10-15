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
      <div className="col-md-6 col-sm-12 p-5 m-3 p-sm-1 p-md-5 m-sm-1 mb-5" style={{maxWidth: "30rem"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a style={{textDecoration: "none"}} href={learnMore}>Learn More  →</a>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
        <img src={imageURL} style={{width:"100%", minWidth: "15rem"}} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
