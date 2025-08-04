import './App.css';
import { Route, Routes} from 'react-router';
import Home from './component/HomePage/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>     
    </div>
  );
}

export default App;
