import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import {Route , Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComponent from './Components/Posts/PostComponent';
import Header from './Components/Header/Header';
import CommentsComponent from './Components/Comments/Comments';


function App() {
  return (
    <>
    <Header />   
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Comments" component={CommentsComponent} />
      <Route path="/Register" component={Registration} />
      <Route path="/Posts" component={PostComponent} />
    </Switch>
    </>
  );
}

export default App;
