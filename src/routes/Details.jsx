import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';
import { Link } from "react-router-dom";

import {
    MovieDetailsContainer,
    LeftColumn,
    RightColumnContainer,
    MovieTitleDetails,
    MovieDetailsDescription,
    MovieDetailsButton,
  } from "../style";

  import Header from '../componentes/Header';
  import Footer from '../componentes/Footer';


 





function Details() {
    const { movieId } = useParams();
    const { getMoviesById } = useMovie();
    const movie = getMoviesById(movieId);

        return (
            <div>
              <Header title={movie?.title} />
              <MovieDetailsContainer>
                <LeftColumn>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title}
                    style={{ width: "100%", height: "100%" }}
                  />
                </LeftColumn>
                <RightColumnContainer>
                  <MovieTitleDetails>
                    <span>Título:</span> {movie?.title}
                  </MovieTitleDetails>
                  <MovieDetailsDescription>
                    <span>Sinopse:</span> {movie?.overview}
                  </MovieDetailsDescription>
                  <p className="movie-title-date">
                    <span><b>Data de lançamento:</b></span> {movie?.release_date.replace(/-/g, "/")}
                  </p>
                  <p className="movie-title-rating">
                    <span><b>Nota:</b></span> {movie?.vote_average.toFixed(2)}
                  </p>
                  <Link to="/">
                    <MovieDetailsButton>Voltar para Home</MovieDetailsButton>
                  </Link>
                </RightColumnContainer>
              </MovieDetailsContainer>
              <Footer />
            </div>
          );
    
}

export default Details