import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/User/Users";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import userReducer from "../src/store/reducers/user";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
const rootReducer = combineReducers({
  userData: userReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
