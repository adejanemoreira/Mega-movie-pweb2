import React, { useEffect } from "react";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Thumbnail from "./Thumbnail";
// Fallback Image
import NoImage from "../images/no_image.jpg";
import Button from "./Button";
import HeroImage from "./HeroImage";

const Serie = () => {

  const { state, loading, error, setIsLoadingMore } = useHomeFetch("serie");

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <React.Fragment>
      <HeroImage
          image=""
          title=""
          text=" "
        />

      <Grid header={"Series"}>
        {state.results.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Carregar mais</Button>
      )}
    </React.Fragment>
  );
};

export default Serie;

