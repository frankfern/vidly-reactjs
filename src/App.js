import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import MovieList from './components/moviesList';
import Rentals from "./components/rentals";
import Customers from './components/customers';
import MovieDetail from './components/movieDetail';
import NavBar from './components/common/navBar';


function App() {
  return (
  <div>
      <NavBar/>
      <div className="content">
        <Switch>
          <Route path="/movies" component={MovieList}/>
          <Route path="/movies/:id" component={MovieDetail}/>
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Redirect from="/" to="/movies"/>
        </Switch>
      </div>
  </div>
  );
}

export default App;
