import React from 'react';
import Search from './Components/Search';
import Home from './Components/Home/Home'
import Critters from './Components/Critters/Critters';
import Footer from './Components/Footer/Footer';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>AC Critters</Link>
        <Link to='/critters'>Critters</Link>
        <Search />
      </nav>
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
