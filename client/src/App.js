import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.css';
import Login from './componets/auth/Login';
import Register from './componets/auth/Register';
import Landing from './componets/layouts/Landing';
import Navbar from './componets/layouts/Navbar';
import { loadUser } from './actions/auth'

// Redux
import { Provider } from 'react-redux';
import store from './store'
import Alert from './componets/layouts/Alert';
import { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './componets/dashboard/Dashboard';
import PrivateRoute from './componets/routing/PrivateRoute';
import CreateProfile from './componets/profile-forms/CreateProfile';
import EditProfile from './componets/profile-forms/EditProfile';
import AddExperience from './componets/profile-forms/AddExperience';
import AddEducation from './componets/profile-forms/AddEducation';
import Profiles from './componets/profiles/Profiles'
import Profile from './componets/profile/Profile'
import Posts from './componets/posts/Posts';
import Post from './componets/post/Post'
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              <PrivateRoute exact path="/add-experince" component={AddExperience} />
              <PrivateRoute exact path="/add-education" component={AddEducation} />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
            </Switch>


          </section>


        </Fragment>

      </Router>

    </Provider>

  )
}

export default App;
