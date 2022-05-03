import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllEvents from "./components/Homepage";
import SingleEvent from "./components/SingleEvent";
import CreateEvent from "./components/CreateEvent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
          <AllEvents />
          </Route>
          <Route exact path='/events/:id'>
         <SingleEvent />
         </Route>
         <Route path="/create-event">
          <CreateEvent />
         </Route>
        </Switch>
      )}
    </>
  );
}

export default App;