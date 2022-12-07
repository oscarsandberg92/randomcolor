import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';

function App() {
  function randomColor() {
    const colors = [
      'red',
      'yellow',
      'green',
      'blue',
      'white',
      'orange',
      'pink',
      'purple',
      'silver',
      'gray',
      'maroon',
      'fuchsia',
      'lime',
      'olive',
      'navy',
      'teal',
      'aqua',
    ];
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  let color1 = randomColor();
  let color2 = randomColor();
  let color3 = randomColor();
  let color4 = randomColor();
  return (
    <div className="fluid-container">
      <h1>Press any button to set a new random color!</h1>
      <div className="row text-center justify-content-center">
        <div className="col-5 text-center" id="col1" style={{ background: color1 }}>

          <button onClick={() => {
            let thisColor = randomColor();
            document.getElementById('col1').style.background = thisColor;
          }}>Change me!
          </button>
        </div>

        <div className="col-5" id="col2" style={{ background: color2 }}>
          <button onClick={() => {
            let thisColor = randomColor();
            document.getElementById('col2').style.background = thisColor;
          }}>Change me!
          </button>
        </div>

        <div className="col-5" id="col3" style={{ background: color3 }}>
          <button onClick={() => {
            let thisColor = randomColor();
            document.getElementById('col3').style.background = thisColor;
          }}>Change me!
          </button>
        </div>

        <div className="col-5" id="col4" style={{ background: color4 }}>
          <button onClick={() => {
            let thisColor = randomColor();
            document.getElementById('col4').style.background = thisColor;
          }}>Change me!
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
