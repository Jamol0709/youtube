import Body from './root/body/body';
import './App.css';
import { Navbar} from './root/nav/nav';
import Sub from './root/SubNav/sub';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='wrap'><Sub/><Body/></div>
        

     
    </div>
  );
}

export default App;
