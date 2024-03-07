import CardList from "./components/CardList";
import BBSData from "./types/types";

const getAllData = async () => {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsALLData: BBSData[] = await response.json();

  return bbsALLData;
}

export default async function Home() {
  const bbsAlldata = await getAllData();
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4" >
      <CardList bbsAllData={bbsAlldata}/>
    </main>
  );
}