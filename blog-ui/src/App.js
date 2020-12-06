import './App.css';
import Home from './components/Home'
import AuthorPage from './components/AuthorPage'
import PostPage from './components/PostPage'
import {Switch,Route} from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
    <Nav/>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/post/:id' component={PostPage}/>
        <Route path='/authors/:id' component={AuthorPage}/>
      </Switch>
    </div>
  );
}

export default App;
