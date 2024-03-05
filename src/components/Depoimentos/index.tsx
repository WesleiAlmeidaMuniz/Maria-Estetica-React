import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Depoimentos = () => {

    const imgCarroseul = [
        {id: '1', image: "images/depoimento1.jpg"},
        {id: '2', image: "images/depoimento2.jpg"},
        {id: '3', image: "images/depoimento3.jpg"},
        {id: '4', image: "images/depoimento4.jpg"},
        {id: '5', image: "images/depoimento5.jpg"},
    ];

    return (
        <div className="" id="Depoimentos">
            <h2 className="text-6xl mx-12 font-['Tangerine']">Depoimentos</h2>
            <hr></hr>
            <Carousel
                autoPlay
                showIndicators
                thumbWidth={80}
                infiniteLoop
                className="w-2/3 items-center flex justify-center flex-col m-auto my-12 max-md:w-full"
            >
                {imgCarroseul.map(imagem => (
                    <div 
                        key={imagem.id}
                    >
                        <img 
                            key={imagem.id}
                            src={imagem.image}
                            alt="Imagem depoimento Slider"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
