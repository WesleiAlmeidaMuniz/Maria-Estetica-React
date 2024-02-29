import { Root } from "../../types";

export class CardService{
    static async getService(page:string): Promise<Root>{
        const servicos =  await fetch("servicos.json");
        const service: Root = await servicos.json();
        return service;
    }
}