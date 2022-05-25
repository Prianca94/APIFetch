import React from "react";
import axios from "axios";

class Gitdetails extends React.Component {
    constructor(props) {
        super(props);
        this.state={details:''}
         }

    componentDidMount() {
        axios.get('https://api.github.com/users/akashpadhiyar').then(res=>
        {
           const details=res.data;
            console.log(details);
            var login=res.data.login;
            console.log(login);
            var imgurl=res.data.avatar_url;
            console.log(imgurl);
            var followers=res.data.followers;
            var following=res.data.following;

            this.setState({details,login,imgurl,followers,following});

        })
    }
    render() {
        
        return (
            <React.Fragment>
                
                    
                        <h2>{this.state.login}</h2>
                        <img src={this.state.imgurl} height='300px'/><br/>
                       <h2>Followers: {this.state.followers} Following: {this.state.following}</h2>
                   
            </React.Fragment>
            
        );
    }
}

export default Gitdetails;