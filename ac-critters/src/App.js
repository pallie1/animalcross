import React, { useState } from "react";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home";
import AllAnimalsDisplay from "./Components/AllAnimalsDisplay/AllAnimalsDisplay";
import SingleAnimal from './Components/SingleAnimal/SingleAnimal'
import SuggestionList from "./Components/SuggestionList/SuggestionList";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "font-awesome/css/font-awesome.min.css";
import "./App.scss";

function App() {
  const [wordFromSearch, setWordFromSearch] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleSubmit = (userWord) => {
    setWordFromSearch(userWord);
  };

  return (
    <div className="App">
      <Navbar id="nav" variant="dark">
        <Link className="nav-brand" to="/animalcross/">
          AC Critters
        </Link>
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/critters">Critters</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/fish">Fish</Link>
          </Nav.Item>
        </Nav>
        <Search onSubmitFromApp={handleSubmit} />
      </Navbar>

      <div className="small-page-nav">
        <Link className="nav-brand" to="/animalcross/">
          AC Critters
        </Link>
        <i
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className={mobileNavOpen ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"}
          aria-hidden="true"
        ></i>
      </div>

      {mobileNavOpen ? (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="mobile-nav-open"
        >
          <Link className="mobile-nav-text" to="/critters">
            Critters
          </Link>
          <Link className="mobile-nav-text" to="/fish">
            Fish
          </Link>
          <div className="small-search">
            <Search onSubmitFromApp={handleSubmit} />
          </div>
        </div>
      ) : null}

      {mobileNavOpen ? null : (
        <main>
          <Switch>
            <Route exact path="/animalcross/" component={Home} />
            <Route
              exact
              path="/critters"
              render={(routerProps) => <AllAnimalsDisplay {...routerProps} />}
            />
            <Route
              exact
              path="/fish"
              render={(routerProps) => <AllAnimalsDisplay {...routerProps} />}
            />
            <Route
              exact
              path="/search"
              render={(routerProps) => (
                <SuggestionList
                  wordFromSearch={wordFromSearch}
                  {...routerProps}
                />
              )}
            />
            <Route
              exact
              path="/:singlePath"
              render={(routerProps) => <SingleAnimal {...routerProps} />}
            />
          </Switch>
        </main>
      )}
    </div>
  );
}

export default App;
