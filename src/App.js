import react from 'react-dom'
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">

       <div className="App">
       <div id="root"></div>
         <h1>Random Images</h1> 
       </div>

        <div className="row" >
         <img className = "App-logo" src="https://source.unsplash.com/random/550x700?sig=3"  alt=""/>
         <img className = "App-logo" src="https://source.unsplash.com/random/550x700?sig=1"  alt=""/>
         <img className = "App-logo" src="https://source.unsplash.com/random/550x700?sig=2/" alt=""/>
        </div>
     
      </header>
    </div>
    
  );



  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    react.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);


  
}



export default App;
