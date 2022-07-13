import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './Components/History/History';
import NavBar from './Components/NavBar.js/NavBar';
import Report from './Components/Report.js/Report';

function App() {
  return (
    <div className='App'>
      <div className='transaction-conatainer'>
        <NavBar />
        <Routes>
          <Route path='/' element={<History />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
