import PreLoginView from "./widgets/preLoginView/preLoginView";
import LandingPage from './widgets/landingView/landingPage';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<PreLoginView />} />
        <Route exact path='/landingPage' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
