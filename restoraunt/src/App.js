import React,{Component} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import first from './img/1.png'
import second from './img/2.png'
import third from './img/3.png'
import fourth from './img/4.png'

class  App extends Component() {
  renter(){
  return (
    <>
    
    <Navbar />

    <div className='container'>
      <h1>Welcome to Elite</h1>
      <div className='row'>
        <Card
        image ={first}
        plateName ={"plate name"}
        description={"Plate descriptio"}/>

       </div>
    </div>
    
     
    </>
    
  );
}

}

export default App;
