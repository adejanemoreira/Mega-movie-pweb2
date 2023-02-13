import React from "react";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Thumbnail from "./Thumbnail";
// Fallback Image
import NoImage from "../images/no_image.jpg";
import SearchBar from "./SearchBar";
import HeroImage from "./HeroImage";
import Button from "./Button";

const Movies = () => {

  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

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
          text=""
        />
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Grid header={searchTerm ? "Resultado da pesquisa" : "Filmes"}>
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

export default Movies;

