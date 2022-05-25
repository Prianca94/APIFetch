import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { details:'' };

        
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/akashpadhiyar').then(res=>
        {
           const details=res.data;
            
            var login=res.data.login;
        
            var imgurl=res.data.avatar_url;
            
            var followers=res.data.followers;
            var following=res.data.following;
            var name=res.data.name;
            var bio=res.data.bio;
            var company=res.data.company;
            var blog=res.data.blog;
            var twitter=res.data.twitter_username;

            this.setState({details,login,imgurl,followers,following,name,bio,company,blog,twitter});

        })
    }
    render() {
        return (
            <div class="col-4">
<div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "380px"}}>
    
  
  <hr/>
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
    
        <img src={this.state.imgurl} height='350px'/>
        </li>
        <li>
        <span className="p-name vcard-fullname d-block overflow-hidden" itemProp="name">
             <h3 className="vcard-names">{this.state.name}</h3> {this.state.login}<br/></span>
        </li>
        <li>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="button" className="btn btn-light">Unfollow</button>
</div><br/>
        </li>
        <li>
        <span className="p-name vcard-fullname d-block overflow-hidden" itemProp="name">
             {this.state.bio}<br/><br/><img src='/follow.jpeg' height='25'/> &nbsp;&nbsp;<b>{this.state.followers}</b>&nbsp;Followers <b>{this.state.following}</b> &nbsp;Following
             <br/><img src='/company.jpeg' height='25'/>&nbsp;&nbsp;{this.state.company}<br/><img src='/connect.jpeg' height='25'/>&nbsp;&nbsp;{this.state.blog}
             <br/><img src='/twitter.jpeg' height='25'/>&nbsp;&nbsp;@{this.state.twitter}

             </span>
        </li>
       
        <li>
      <a href="#" className="nav-link link-dark">
        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg>
        
        
      </a>
    </li>
    <li>
      <a href="#" className="nav-link link-dark">
        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"/></svg>
      </a>
    </li>
      </ul>
  <hr/>
  <div className="dropdown">
    <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
      <strong>mdo</strong>
    </a>
    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
      <li><a className="dropdown-item" href="#">New project...</a></li>
      <li><a className="dropdown-item" href="#">Settings</a></li>
      <li><a className="dropdown-item" href="#">Profile</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Sign out</a></li>
    </ul>
  </div>
  
</div>
</div>



    
            
        );
    }
}

export default Sidebar;