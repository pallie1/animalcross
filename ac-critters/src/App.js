import React, { useState } from 'react';
import Search from './Components/Search/Search';
import Home from './Components/Home/Home'
import Critters from './Components/Critters/Critters';
import Fish from './Components/Fish/Fish';
import SingleCrit from './Components/SingleCrit/SingleCrit';
import SingleFish from './Components/SingleFish/SingleFish';
import Footer from './Components/Footer/Footer';
import SuggestionList from './Components/SuggestionList/SuggestionList';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.scss';

function App() {

const [wordFromSearch, setWordFromSearch] = useState("");

const handleSubmit = userWord => {
  // console.log('userword - ', userWord)
  setWordFromSearch(userWord)
} 

console.log('app side -', wordFromSearch)

  return (
    <div className="App">
      <Navbar id='nav' variant="dark" >
      <Link className='nav-brand' to='/project2reactAllie/'>AC Critters</Link>
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
          <Route exact path='/project2reactAllie/' component={Home} />
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
