import logo from './logo.svg';
import './App.scss';
// import  Mycomponent from './Example/Mycomponent'
import ListTodo from './Todos/ListTodo';
import Mycomponent from './Example/Mycomponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUsers from './Users/ListUsers';
import UserDetail from './Users/UserDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

 let App =()=> {
  return (
    <Router>
       <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ListTodo />} />
          <Route path="/about" element={<Mycomponent />} />
          <Route path="/ListUsers" element={<ListUsers />} />
          <Route path="/ListUsers/:id" element={<UserDetail />} />
        </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        </div>
    </Router>
  );
}

export default App;
