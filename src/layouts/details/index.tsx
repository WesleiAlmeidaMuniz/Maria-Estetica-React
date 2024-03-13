import { useCallback, useEffect, useState } from "react";
import { Service } from "../../types";
import { CardService } from "../../services/card";
import { useParams } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Whatsapp } from "../../components/Whatsapp";

export const Details = () => {

    const [servicos, setServicos] = useState<Service[]>([]);

    const getServices = useCallback(async (value: string) => {
        try {
            const { services } = await CardService.getService(value)
            setServicos(services);
        } catch (error) {
            console.error("Erro na busca de serviços: ", error);
        }
    }, []);

    console.log(servicos);

    useEffect(() => {
        getServices('');
    }, [getServices]);


    const { id } = useParams();

    const numberID = Number(id);

    return (
        <>
            <Header />
            {servicos.map(servico => (
                servico.id === numberID ?
                    (<div className="w-4/5 flex items-center justify-center m-auto flex-col text-center">
                        <h1 className="font-medium text-5xl my-10 max-md:text-4xl">{servico.title}</h1>
                        <p className="text-center font-light my-5 indent-4 leading-7">{servico.textoServices}</p>
                        <a className="font-bold text-1xl my-10" href="https://wa.me/5511946101374?text=Olá Maria Silva, tudo bem? gostaria de um orçamento, por favor." target="_blank" rel="noreferrer">Duração de {servico.Duracao} minutos, Faça sua cotação aqui!</a>
                    </div>)
                    : ("")
            ))};
            <Footer />
            <Whatsapp />
        </>
    )
}
