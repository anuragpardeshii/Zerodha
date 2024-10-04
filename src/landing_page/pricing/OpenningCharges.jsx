function Hero() {
    return (
      <div className="container" style={{width: "75%"}}>
        <h4 className="mb-4">Charges for account opening</h4>
        <table class="table  mb-5 table-border border-start border-end border-top border-bottom">
  <thead>
    <tr>
      <th scope="col">Type of account</th>
      <th className="text-center" scope="col">Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Online account</td>
      <td className="text-center"><span className="free-tag p-1 text-center" >Free</span></td>
    </tr>
    <tr>
      <td>Offline account</td>
      <td className="text-center"><span className="free-tag p-1" >Free</span></td>
    </tr>
    <tr>
      <td>NRI account (offline only)</td>
      <td className="text-center">₹ 500</td>
    </tr>
    <tr>
      <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
      <td className="text-center">₹ 500</td>
    </tr>
  </tbody>
</table>
      </div>
    );
  }
  
  export default Hero;
  