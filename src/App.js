import './App.scss';
import { Cards } from './components/Cards';
import { SideBar } from './components/SideBar';



function App() {
  return (
    <div className="App">
      <SideBar/>
      <Cards />
    </div>
  );
}

export default App;
