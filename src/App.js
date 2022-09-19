import React from "react";
import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const Home = lazy(() => import ('./Pages/Home'));
// const SignInPage = lazy(() => import ('./Pages/SignInPage'));


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home /> } />
          <Route path="/signup" exact element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
