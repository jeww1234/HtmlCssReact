import './App.css';
import { Route, Routes} from 'react-router';
import Google from './component/Google'
import Home from './component/Home'
import Flex from './component/Flex'
import Spotify from './component/Spotify';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/google' element={<Google />}></Route>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/flex' element={<Flex />}></Route>
        <Route path='/spotify' element={<Spotify />}></Route>
      </Routes>     
    </div>
  );
}

export default App;
