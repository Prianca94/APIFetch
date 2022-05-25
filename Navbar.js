import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
      
      <img src='/giticon.jpeg' height="40px"/>
    <a className="navbar-brand" href="#"></a>
    <form className="d-flex" >
        <input className="form-control me-2 bg-dark" type="search" placeholder="Search or jump to..." aria-label="Search"/>
        </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pull requests</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="#">Issues</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="#">Marketplace</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="#">Explore</a>
        </li>
        
              </ul>
      
    </div>
  </div>
</nav>
            
        );
    }
}

export default Navbar;