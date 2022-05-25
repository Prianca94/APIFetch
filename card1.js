import React from "react";
import axios from "axios";

class card1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {repodetails:[],owner : '',lang:[],msg:[]};
    }
 componentDidMount() {
        axios.get('https://api.github.com/users/akashpadhiyar/repos').then(res=>
         {
           const repodetails=res.data;
           console.log(repodetails);
           let lang=repodetails.map(details1=>{return `${details1.language}`});
           console.log(lang);
           console.log(lang.length);
           this.setState({repodetails,lang});
         });
                }
    render() {
        return (
            <div className="col-8">
                <div className="card" style={{width: "18"}}>   
                <ul className="list-group list-group-flush">
                       {
                         this.state.repodetails.map((details,index)=><li className="list-group-item" key={details.id}>{index}
                         <b style={{color:'blue'}}>{details.owner.login}</b>&nbsp;{details.visibility}<br/><br/><br/>
                         {details.language}&nbsp;&nbsp;<img src="/stars.jpeg" height="25"/>{details.stargazers_count}
                         &nbsp;&nbsp;&nbsp;&nbsp;<img src="/fork.jpeg" height="25"/>{details.forks_count}<br/></li>)
                      }
             <li className="list-group-item"></li>
             <li className="list-group-item">A third item</li>
              </ul>
              </div>
              </div>
        );
    }
}

export default card1;