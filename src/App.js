import PreLoginView from "./widgets/preLoginView/preLoginView";
import LandingPage from './widgets/landingView/landingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<PreLoginView />} />
          <Route exact path='/landingPage' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
