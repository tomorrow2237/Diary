import BBSDataType from "@/app/types/types";
import Link from "next/link";

async function getDetailBBSData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  const bbsDetailData: BBSDataType = await response.json();

  return bbsDetailData;
}

const BBSDetailPage = async ({params}: {params: { id: number }}) => {
    const bbsDetailData = await getDetailBBSData(params.id)
    const {title, content, username } = bbsDetailData;

    return (
      <div className="mx-auto max-w-4xl p-5">
        <h1 className="text-2xl font-bold" >{title}</h1>
        <h3 className="text-xl font-bold">{username}</h3>
        <div className="mb-8 fontsize-2xl" >
          <p>{content}</p>
        </div>

        <Link href={"/"} className="bg-blue-500 py-3 px-4 text-white rounded-md font-medium">Back</Link>
      </div>
    )
}

export default BBSDetailPage;
