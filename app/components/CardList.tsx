import BBSDataType from "../types/types";
import BBSData from "../types/types";
import BBSCard from "./Card";

const CardList = ({bbsAllData}: {bbsAllData:BBSDataType[]}) => {
    return(
        <>
        {bbsAllData.map((bbsData: BBSData) => (
            <BBSCard key={bbsData.id} bbsData={bbsData}/>
        ))}
        </>
    )
}

export default CardList;