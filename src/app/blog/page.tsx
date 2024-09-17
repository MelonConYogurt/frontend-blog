import GetPost from "@/utils/GetPosts";
import Transition from "@/components/Transition";
import Posts from "@/components/Posts";
import {MenuSearch} from "@/components/MenuSearch";
import {Search} from "lucide-react";

async function getData() {
  try {
    const data = await GetPost(1000);
    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function Blog() {
  const data = await getData();
  return (
    <Transition>
      <div className="bg-gradient-to-b from-gray-50 to-white flex flex-col mb-20 justify-center items-center">
        <div className="flex felx-row gap-5 items-center justify-center mt-12  text-black">
          <h2 className="lg:text-4xl font-bold tracking-tighter sm:text-5xl text-center  text-black">
            Filtrar por categoria:
          </h2>
          <div className="flex flex-row gap-2 items-center justify-center">
            <MenuSearch />
            <button className="border p-1 rounded-sm">
              <Search />
            </button>
          </div>
        </div>
        <div className="container mt-20 px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Posts data={data}></Posts>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Blog;
