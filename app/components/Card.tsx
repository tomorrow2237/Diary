import { Card,CardHeader,CardTitle,CardDescription,CardFooter } from "@/components/ui/card";
import Link from "next/link";
import BBSDataType from "../types/types";


const BBSCard = ({bbsData}: {bbsData:BBSDataType[]}) => {
    const { id,title,username } = bbsData;
    return(
        <>
        <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{username}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
            <Link href={`/bbs-posts/${id}`} className="text-blue-500">
                More Detail
            </Link>
            </CardFooter>
        </Card>
        </>
    )
}

export default BBSCard