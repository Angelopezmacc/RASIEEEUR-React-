import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './componentes/Index'
import Proyectos from './componentes/Proyectos';



function App() {
  return (
    <div className="App">
      <Index />
      {/* <Proyectos /> */}
    </div>
  );
}

export default App;
