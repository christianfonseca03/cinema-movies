import { useEffect, useState } from "react";

interface Movie {
  original_title: string;
  id: number;
  overview: string; 
  poster_path: string;
}

interface MovieProps {
  count: number;
}

export function Movies({ count }: MovieProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const imagePath = "https://image.tmdb.org/t/p/w200";
  useEffect(() => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=ea08cd1d8878a63dbebf3adc9da30a74`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (count === -1) {
    return <div className="mt-3"></div>;
  }

  return (
    <div className="flex lg:m-12 m-6 flex-col lg:flex-row lg:items-start items-center">
      <img
        src={`${imagePath}${movies[count].poster_path}`}
        alt="poster"
        className="lg:h-80 lg:w-auto h-40 w-40"
      />
      <div className="flex flex-col items-center text-center lg:ml-3">
        <h1
          key={movies[count].id}
          className="text-white text-3xl mb-3 mt-3 font-semibold"
        >
          {movies[count].original_title}
        </h1>
        <p className="text-white w-96">{movies[count].overview}</p>
      </div>
    </div>
  );
}

/*
 return (
    <div>
      {movies.map((movie) => {
        return (
          <div className="flex m-12">
            <img
              src={`${imagePath}${movie.poster_path}`}
              alt="poster"
              className="h-80"
            />
            <div className="flex flex-col items-center ml-6">
              <h1
                key={movie.id}
                className="text-white text-3xl mb-3 font-semibold"
              >
                {movie.original_title}
              </h1>
              <p className="text-white w-96">{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
  */
