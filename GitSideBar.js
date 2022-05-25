import axios from 'axios';
import React from 'react';

export default class GitSideBar extends React.Component 
{
    state = {detaile : ''}
    
    componentDidMount()
    {
        axios.get('https://api.github.com/users/akashpadhiyar')
        .then(res => 
            {
                var image = res.data.avatar_url;
                console.log(image)

                var name = res.data.name;
                var login = res.data.login;
                var bio = res.data.bio;
                console.log(name)

                this.setState({image,name,login,bio})
            })
    }
    render()
    {
        return(
            
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "380px"}}>
    
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <img src={this.state.image} height='350'/>
      </li>
      <li>
      <span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">
          <h3 className="vcard-names "><br/>{this.state.name}</h3>{this.state.login}<br/>{this.state.bio}
        </span>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"/></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"/></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"/></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
    </div>
        )
    }
}