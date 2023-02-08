import './App.css';
import { Object } from './components/vignettes/objects/object';
import { Naviguer } from './components/navigation/navigation';
import { Cherche } from './components/search/search';

function App() {

  let mode = true;

  let light = {
    backgrounColor:"inherit",
    color:"inherit"
  }

  let dark = {
    backgroundColor: "black",
    color: "white",
  }

  return (
    <div className="App">
      <Naviguer mode = {mode} dark = {dark} light={light}/>
      <Cherche mode = {mode} dark = {dark} light={light}/>
      <Object mode = {mode} dark = {dark} light={light}/>
    </div>
  );
}

export default App;
