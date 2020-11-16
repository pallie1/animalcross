import React, { useState } from 'react';
import Search from './Components/Search/Search';
import Home from './Components/Home/Home'
import Critters from './Components/Critters/Critters';
import Fish from './Components/Fish/Fish';
import SingleCrit from './Components/SingleCrit/SingleCrit';
import SingleFish from './Components/SingleFish/SingleFish';
import SuggestionList from './Components/SuggestionList/SuggestionList';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.scss';

function App() {

const [wordFromSearch, setWordFromSearch] = useState("");

const handleSubmit = userWord => {
  setWordFromSearch(userWord)
} 

  return (
    <div className="App">
      <Navbar id='nav' variant="dark" >
      <Link className='nav-brand' to='/animalcross/'>AC Critters</Link>
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to='/critters'>Critters</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/fish'>Fish</Link>
          </Nav.Item>
        </Nav>
        <Search onSubmitFromApp={handleSubmit} />
     
      </Navbar>
      <main>
        <Switch>
          <Route exact path='/animalcross/' component={Home} />
          <Route exact path='/critters' component={Critters} />
          <Route exact path='/fish' component={Fish} />
          <Route 
           exact path='/search' 
          render={routerProps => <SuggestionList wordFromSearch={wordFromSearch} {...routerProps} />} />

          <Route 
          exact path='/:singlePath' 
          render={ routerProps => 
            <> 
              <SingleCrit {...routerProps} />  
              <SingleFish {...routerProps} /> 
            </> 
          }/>          
        </Switch>
      </main>
    </div>
  );
}

export default App;
