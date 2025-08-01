import './App.css';
import { Route, Routes} from 'react-router';
import Google from './component/Google'
import Home from './component/Home'
import Flex from './component/Flex'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/google' element={<Google />}></Route>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/flex' element={<Flex />}></Route>
      </Routes>     
    </div>
  );
}

export default App;
