import logo from './logo.svg';
import Praktika1 from './views/Praktika1/Praktika1';
import Praktika2 from './views/praktika2/Praktika2';
import Uzduotis3 from './views/Uzduotis3/Uzduotis3';
import Uzduotis4 from './views/Uzduotis4/Uzduotis4';
import Uzduotis5 from './views/Uzduotis5/Uzduotis5';
import Uzduotis6 from './views/Uzduotis6/Uzduotis6';
import Uzduotis7 from './views/Uzduotis7/Uzduotis7';
import Uzduotis8 from './views/Uzduotis8/Uzduotis8';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Uzduotis9 from './views/Uzduotis9/Uzduotis9';

function App() {
  return (
    <div className="App">
      <h1>Uzduotis 1.</h1>
      <Praktika2/>
      <h1>Uzduotis 2.</h1>
      <Praktika1/>
      <h1>Uzduotis 3.</h1>
      <Uzduotis3/>
      <h1>Uzduotis 4.</h1>
      <Uzduotis4/>
      <h1>Uzduotis 5.</h1>
      <Uzduotis5/>
      <h1>Uzduotis 6.</h1>
      <Uzduotis6/>
      <h1>Uzduotis 7.</h1>
      <Uzduotis7/>
      <h1>Uzduotis 8. ir Uzduotis 10.</h1>
      <Uzduotis8/>
      <h1>Uzduotis 9.</h1>
      <Uzduotis9/>
    </div>
  );
}

export default App;
