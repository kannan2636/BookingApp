import logo from './logo.svg';
import './App.css';
import Car from './components/Bike';
import Header from './components/Header';
import Activa from './components/CheckState';
import LoginForm from './components/LoginForm';

function Getteam(props) {
  const { nameBrand } = props;
  return <p>Welcome {nameBrand}</p>;
}

function Greeting() {
  const nameBrand = 'ford';
  const listData = [
    { type: "Fruits", name: "Apple" },
    { type: "Nuts", name: "badam" },
    { type: "Car", name: "ford" },
  ];

  const numList = [1, 2, 3, 4, 5, 6, 7];
  
  return (
    <>
      {/* <Car />
      <Getteam nameBrand={nameBrand} />
      <p>Hello Team</p>
      <ul>
        {listData.map((data, index) => (
          <li key={index}>{data.type}: {data.name}</li>
        ))}
      </ul>
      <ul>
      {numList.map((e,index) => (<li key={index}><p>{e}</p></li>))}
      </ul> */}
    </>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Car />
        <Header/>
        {/* <Greeting />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <LoginForm/>
      <Activa/>
    </div>
  );
}

export default App;
