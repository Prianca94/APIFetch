import React from "react";
import { BrowserRouter,Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
      </a>
<BrowserRouter>
<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
       <b> <Link><li><img src="/Overview.jpeg" height="40"/>Overview</li></Link></b>&nbsp;&nbsp;&nbsp;&nbsp;
       <b><Link> <li><img src="/Repository.jpeg" height="40"/>Repositories</li></Link></b>&nbsp;&nbsp;&nbsp;
       <b><Link> <li><img src="/Projects.jpeg" height="40"/>Projects</li></Link></b>&nbsp;&nbsp;&nbsp;
       <b><Link> <li><img src="/packages.jpeg" height="40"/>Packages</li></Link></b>&nbsp;&nbsp;&nbsp;
       <b><Link> <li><img src="/stars.jpeg" height="40"/>Stars</li></Link></b>&nbsp;&nbsp;&nbsp;
        
      </ul>
      </BrowserRouter>
      

      <div className="col-md-3 text-end">
        </div>
    </header>
  </div>
            
        );
    }
}

export default Header;