import './App.css';
import { Object } from './components/vignettes/objects/object';
import { Naviguer } from './components/navigation/navigation';
import { Cherche } from './components/search/search';

function App() {

  return (
    <div className="App">
      <Naviguer/>
      <Cherche/>
      <Object/>
    </div>
  );
}

export default App;
