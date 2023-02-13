import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg, TMDBLogoImg, Nav } from "./Header.styles";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Nav>
          <a href="/">Home</a>
          <a href="/serie">Series</a>
          <a href="/movies">Filmes</a>
        </Nav>
      </Content>
    </Wrapper>
  );
};

export default Header;
