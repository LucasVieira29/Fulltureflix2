import { useMovie } from '../hooks/useMovie'; 
import {
    MovieListSection,
    MovieHeading,
    MovieListItem,
    MovieTitle,
    MoviePoster,
    MovieListGrid,
  } from "../style";
  import { Link } from "react-router-dom";
  import Banner from "../componentes/Banner";
  import Header from '../componentes/Header';
  import Footer from '../componentes/Footer';

export const MovieList = () => {
    const { movieData } = useMovie()
    console.log({ movieData })

    return (

      <div>
      
        
      <Header title="Home" />
        <MovieListSection>
          <Banner></Banner>
          <MovieHeading>Filmes Populares</MovieHeading>
          <MovieListGrid>
            {movieData.map((movie) => (
              <MovieListItem key={movie.id}>
                <Link to={`/movie/${movie.id}`} state={{ movie }}>
                  <MoviePoster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <p style={{color:'black'}}>Nota: {movie.vote_average.toFixed(2)}</p>
                  </Link>
              </MovieListItem>
            ))}
          </MovieListGrid>
        </MovieListSection>
        <Footer />
      </div>
        
      
        
        
      );
}