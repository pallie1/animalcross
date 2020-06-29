import React from 'react';
import Search from './Components/Search';
import Home from './Components/Home/Home'
import Critters from './Components/Critters/Critters';
// import SingleCrit from './Components/SingleCrit/SingleCrit';
import Footer from './Components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar id='nav' variant="dark" >
      <Navbar.Brand href="/">AC Critters</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href='/critters'>Critters</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
        {/* <Search /> */}
     
      </Navbar>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/critters' component={Critters} />
          {/* <Route 
          exact path='/critter/:singleCrit' 
          render={routerProps => <SingleCrit {...routerProps} />}/> */}

          <Route path='*' render={() => <Redirect to='/'/>}/>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
