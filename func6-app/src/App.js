import './App.css';
import React from 'react';
import { Navbar,ProfileDashboard,Trends,Feeds,HowToFollow } from './Compo';
class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Navbar />
      <div className='divide'>
      <div style={{width:"26%",float:"left"}}>
      <br />
      <ProfileDashboard />
      <br />
      <Trends />
      </div>
      <div style={{height:"460px",width:"26%",float:"left"}}>
      <br />
      <Feeds />
      </div>
      <div style={{width:"26%",float:"left"}}>
      <br />
      <HowToFollow />
      </div>
      </div>
      
    </div>
  );
}
}

export default App;