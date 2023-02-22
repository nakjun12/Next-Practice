import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "1932b9e2f02fd3f152a4611317a68e97";

interface IMovie {
  id: number;
  original_title: string;
}
export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
