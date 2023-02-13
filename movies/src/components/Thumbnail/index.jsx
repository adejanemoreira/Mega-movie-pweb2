import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import { Image, Button, Content } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable, movieHeight }) => {
  return (
    <React.Fragment>
      <Content>
        {clickable ? (
          <>
            <Link to={`/movie/${movieId}`}>
              <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
            </Link>
            <Link to={`/movie/${movieId}`}>
              <Button>Detalhes</Button>
            </Link>
          </>
        ) : (
          <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
        )}
      </Content>
    </React.Fragment>
  );
};

Thumbnail.prototype = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumbnail;
