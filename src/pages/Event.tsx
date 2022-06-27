import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface Params {
  slug: string;
}

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1 m-auto items-center">
              <h1 className="text-green-400 text-center text-5xl">
                Selecione uma aula para assistir
              </h1>
          </div>
        }
        <Sidebar />
      </main>
    </div>
  )
}