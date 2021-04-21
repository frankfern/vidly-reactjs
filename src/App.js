import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRoute";
import RegisterForm from "./components/register";
import MovieList from "./components/moviesList";
import MovieForm from "./components/movieCreate";
import Customers from "./components/customers";
import LoginForm from "./components/login";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import Logout from "./components/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={MovieList} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" omponent={Rentals} />
            <Route path="/not_found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
