import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  const onClick = (id: number, title: string) => {
    router.push(`/movies/${id}`);
  };
  return (
    <div>
      <Seo title="Home" />

      {results?.map((movie: IMovieProps) => (
        <div key={movie.id}>
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            {/* <h4 onClick={() => onClick(movie.id, movie.title)}> */}
            {movie.original_title}
            {/* </h4> */}
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  if (results) {
    return {
      props: {
        results,
      },
    };
  } else
    return {
      props: {
        results: null,
      },
    };
}
