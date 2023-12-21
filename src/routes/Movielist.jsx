// import styled from 'styled-components'
import { useMovie } from '../hooks/useMovie'; // Add this import statement
import {
    MovieListSection,
    MovieHeading,
    MovieListItem,
    MovieTitle,
    MoviePoster,
    MovieListGrid,
  } from "../style";
  import { Link } from "react-router-dom";
  import Banner from "../../src/banner";

export const MovieList = () => {
    const { movieData } = useMovie()
    console.log({ movieData })

    return (
        
        <MovieListSection>
          <Banner></Banner>
          <MovieHeading>Filmes Populares</MovieHeading>
          <MovieListGrid>
            {movieData.map((movie) => (
              <MovieListItem key={movie.id}>
                <Link to={`/movie/${movie.id}`} state={{ movie }}>
                  <MoviePoster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <p>Data de Lançamento: {movie.release_date.replace(/-/g, "/")}</p>
                  <p>Nota: {movie.vote_average.toFixed(2)}</p>
                  </Link>
              </MovieListItem>
            ))}
          </MovieListGrid>
        </MovieListSection>
      );
}