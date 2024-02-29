import { Service } from "../../types";

interface CardProps{
    simpleCard: Service;
}

export const Card = ({simpleCard}: CardProps) => {
    return (
        <div className="flex">
            <div style={{ backgroundImage: `url(${simpleCard.url})` }} className="flex bg-cover text-xl h-full overflow-hidden text-bg-dark rounded-2xl shadow-lg" key={simpleCard.id}>
                <div className="flex flex-col h-full py-12 px-12 text-white shadow-sm">
                    <h3 className="pt-5 mt-5 mb-4 text-font lh-1 fw-bold">{simpleCard.name}</h3>
                </div>
            </div>
        </div>
    )
}
