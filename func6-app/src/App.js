import "./App.css";
import React from "react";
import { Navbar, ProfileDashboard, Trends, Feeds, HowToFollow } from "./Compo";
class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Navbar />
          <div className="section">
              <div className="left">
                <ProfileDashboard />
                <Trends />
              </div>
              <div className="center">
                <Feeds/>
              </div>
              <div className="right">
                <HowToFollow />
              </div>

          </div>
        </div>
      </>
      // <div style={{width:"90%",margin:"auto"}}>
      //   <Navbar />
      //   <div className='divide'>
      //   <div style={{width:"25%",float:"left"}}>
      //   <br />
      //   <ProfileDashboard />
      //   <br />
      //   <Trends />
      //   </div>
      //   <div style={{height:"460px",width:"25%",float:"left"}}>
      //   <br />
      //   <Feeds />
      //   </div>
      //   <div style={{width:"25%",float:"left"}}>
      //   <br />
      //   <HowToFollow />
      //   </div>
      //   </div>

      // </div>
    );
  }
}

export default App;
