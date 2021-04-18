import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { AddUser } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./Components/Context/Context";

function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
