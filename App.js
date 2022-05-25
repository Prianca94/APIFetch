import logo from './logo.svg';
import './App.css';
import Gitdetails from './Gitdetails'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import GitSideBar from './GitSideBar';
import Card from './Card'
import Header from './Header';
import Card1 from './card1';

function App() {
  return (
    <div className="container">
<div className="row">

      <Header/>
      <Sidebar/>
      <Card/>
      
    </div>
    </div>
  );
}

export default App;
