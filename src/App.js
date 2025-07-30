import './App.css';
import { Route, Routes} from 'react-router';
import Google from './component/Google'
import Home from './component/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/google' element={<Google />}></Route>
        <Route path='/' element={<Home />}> </Route>
      </Routes>     
    </div>
  );
}

export default App;
