import React from "react";
import App from "./App";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import { Redirect } from "react-router";
import axios from "axios";
//import Protected from "./Protected";
import { useDataLayerValue } from "./DataLayer";
function Home() {
  const [{ logged }, dispatch] = useDataLayerValue();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/songs/")
      .then((res) => {
        dispatch({
          type: "SET_SONGS",
          songs: res.data,
        });
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/songs/happy")
      .then((res) => {
        dispatch({
          type: "SET_HAPPY",
          happy: res.data,
        });
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/songs/neutral")
      .then((res) => {
        dispatch({
          type: "SET_NEUTRAL",
          neutral: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/app"
            exact
            component={() => (!logged ? <Redirect to="/" /> : <App />)}
          />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route component={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
