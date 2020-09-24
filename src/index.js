import React, {useState}from 'react';
import './index.css';
import ReactDOM from 'react-dom';

function App() {
  const [data, setData] = useState("");

  const calcBtns = [];
  [9,8,7,6,5,4,3,2,1,0,".","%"].forEach(num => {
    calcBtns.push (
      <button onClick = {e => {
        setData(data + e.target.value)
      }}
      value={num}
      key={num} 
      >
        {num}
      </button>  
    )
  })
  return (
    <div className="wrapper">
      <div className= "result">{data}</div> 
      <div className = "digits-flex">{calcBtns}</div>
      <div className = "modifiers subgrid">
        <button onClick={() => setData(data.substr(0, data.length -1))}>
          Clear
        </button>
        <button onClick={()=> setData("")}>
          AC
        </button>
      </div>

      <div className="operations subgrid">
        <button onClick={e => setData(data + e.target.value)} value="+">
          +
        </button>
        <button onClick={e => setData(data + e.target.value)} value="-">
          -
        </button>
        <button onClick={e => setData(data + e.target.value)} value="*">
          *
        </button>
        <button onClick={e => setData(data + e.target.value)} value="/">
          /
        </button>
        <button onClick={e => {
          try
        {
          setData(
            String(eval(data)).length > 3 &&
            String(eval(data)).includes("") 
            ? String(eval(data).toFixed(4))
            : String(eval(data))
          )
        }
          catch(err) {
            console.log(err);
          } 
        }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
