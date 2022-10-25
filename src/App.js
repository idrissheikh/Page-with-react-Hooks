import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';
import Products from './components/pages/Services/Products';



import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
            <Navbar/>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/signUp' exact component={SignUp} />
            </Switch>
            <Footer/>
    </Router>
    
  );
}

export default App;
