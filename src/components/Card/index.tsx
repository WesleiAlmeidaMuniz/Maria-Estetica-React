import { useNavigate } from "react-router";
import { Service } from "../../types";

interface CardProps{
    simpleCard: Service;
}

export const Card = ({simpleCard}: CardProps) => {

    const navigate = useNavigate();

    const handleDetailsPage = (id?:number) => {
        if(!id) return;

        navigate(`/details/${id}`);
    }


    return (
        <div 
            className="flex w-1/3 h-[250px] my-5 max-md:w-full max-md:justify-center cursor-pointer" 
            onClick={() => handleDetailsPage(simpleCard?.id)}>
            <div style={{ backgroundImage: `url(${simpleCard.url})` , textShadow: "0px 0px 5px black"}} className="flex items-end py-10 px-4 w-[90%] bg-cover rounded-3xl h-full border-[2px] border-gray-500" key={simpleCard.id}>
                <h3 className="font-bold text-white text-2xl">{simpleCard.name}</h3>
            </div>
        </div>
    )
}
