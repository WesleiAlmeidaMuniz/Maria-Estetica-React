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

    useEffect(() => {
        getServices('');
    }, [getServices])

    return (
        <div className="container px-4 py-5" id="serviços">
            <h2 className="pb-2 border-bottom font-style">Serviços</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
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
