import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListUsersComponent from './components/ListUsersComponent';
import AddUserComponent from './components/AddUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ValidationComponent from './components/ValidationComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent />
        <Routes>
          <Route path = "/" exact element={<ListUsersComponent />}></Route>
          <Route path = "/users" exact element={<ListUsersComponent />}></Route>
          <Route path = "/add-user" exact element={<AddUserComponent />}></Route>
          <Route path = "/validation" exact element={<ValidationComponent />}></Route>
        </Routes>
        <FooterComponent />
      </Router>  
    </div>
  );
}

export default App;
