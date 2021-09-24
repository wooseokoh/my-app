import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import {Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Header/>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/login/:id" exact={true} component={LoginPage} />
      <Footer/>
    </div>
  );
}

export default App;
