import React, { useState } from 'react';
import Search from './Components/Search/Search';
import Home from './Components/Home/Home'
import Critters from './Components/Critters/Critters';
import Fish from './Components/Fish/Fish';
import SingleCrit from './Components/SingleCrit/SingleCrit';
import SingleFish from './Components/SingleFish/SingleFish';
import Footer from './Components/Footer/Footer';
import SuggestionList from './Components/SuggestionList/SuggestionList';
import { Switch, Route } from 'react-router-dom';
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
      <Navbar.Brand className='nav-brand' href="/">AC Critters</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href='/critters'>Critters</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/fish'>Fish</Nav.Link>
          </Nav.Item>
        </Nav>
        <Search onSubmitFromApp={handleSubmit} />
     
      </Navbar>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
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
