import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home'
import {
  Switch,
  Route,
} from "react-router-dom";
import { SignForm } from './components/SignForm/SignForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Switch>
        <Route path="/cursor.edu-hw-react-styled/" exact component={Home} />
        <SignForm path="/cursor.edu-hw-react-styled/sign-in" variant="signIn">Sign In</SignForm>
        <SignForm path="/cursor.edu-hw-react-styled/sign-up" variant="signUp">Sign Up</SignForm>
      </Switch>
    </div>
  );
}

export default App;
