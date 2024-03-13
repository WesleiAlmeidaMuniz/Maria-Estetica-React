import { useCallback, useEffect, useState } from "react";
import { Service } from "../../types";
import { CardService } from "../../services/card";
import { Card } from "../Card";


export const Servicos = () => {

    const [servicos, setServicos] = useState<Service[]>([]);


    const getServices = useCallback(async (value:string) => {
        try{
            const {services} = await CardService.getService(value)
            //const servicos =  await fetch("servicos.json");
            //const service: CardResults = await servicos.json();
            setServicos(services);
        } catch(error){
            console.error("Erro na busca de serviços: ", error);
        }
    }, [])

    console.log(servicos);

    useEffect(() => {
        getServices('');
    }, [getServices])

    return (
        <div className="" id="servicos">
            <h2 className="text-6xl mx-12 font-['Tangerine']">Serviços</h2>
            <hr></hr>
            <div className="flex justify-center flex-wrap my-10 mx-10  max-md:flex-col max-md:py-5">
               {servicos.map( cards => (
                 <Card 
                    key={cards.id}
                    simpleCard={cards}
                 />
               ))}
            </div>
        </div>
    );
};
