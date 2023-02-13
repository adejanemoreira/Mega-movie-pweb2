
import React from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./styles/global/GlobalStyle";

// Context
import UserProvider from "./context/context";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
import Serie from "./components/Serie";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer/index.jsx";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/serie" element={<Serie />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
          <GlobalStyle />
        </UserProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
