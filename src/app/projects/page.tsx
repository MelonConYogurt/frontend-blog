import GetProjects from "@/utils/GetProjects";
import Link from "next/link";
import {SiGithub, SiYoutube} from "@icons-pack/react-simple-icons";
import "highlight.js/styles/atom-one-dark.css";
import Transition from "@/components/Transition";
import Posts from "@/components/Posts";

async function fetchProjects() {
  try {
    const projects = await GetProjects();
    return projects || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function Project() {
  const data = await fetchProjects();

  return (
    <Transition>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black mb-2">
                  Mis proyectos están documentados
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Visita mi página de Github o Youtube para más información
                </p>
              </div>
              <div className="space-x-4 flex flex-row gap-3">
                <Link
                  href="https://github.com/MelonConYogurt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 border p-3 rounded-lg text-white w-fit bg-black justify-center items-center"
                >
                  <SiGithub className="mr-2" />
                  Github
                </Link>
                <Link
                  href="https://www.youtube.com/@AlejandroVg-io3zb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 border p-3 rounded-lg text-white w-fit bg-black justify-center items-center"
                >
                  <SiYoutube className="mr-2" color="red" />
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white bg-opacity-70  py-12   md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
            Proyectos
          </h2>
          <div className="grid gap-8 mx-20 sm:grid-cols-2 lg:grid-cols-3">
            <Posts data={data}></Posts>
          </div>
        </section>
      </div>
    </Transition>
  );
}
