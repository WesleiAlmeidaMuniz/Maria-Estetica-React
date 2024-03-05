import { form } from "../../types"

export const Formulario = ({inputForm}:form) => {

    return (
        <div className="max-w-full flex flex-col justify-center items-center mx-3 max-md:my-5">
            <form className="w-full bg-[#FFEBCD] py-12 px-12 rounded-md">
                <h5 className="text-center text-6xl font-['Tangerine']">Contato via E-mail</h5>
                {inputForm.map(inputs => (
                    inputs.placeholder === "Mensagem" ? (
                        <div key={inputs.placeholder} className="flex flex-col bg-white my-3 rounded-sm">
                            <textarea 
                                name={inputs.type}
                                placeholder={inputs.placeholder}
                                className="py-3 px-3"
                                cols={30} 
                                rows={5}
                            ></textarea>
                        </div>
                    ) : ( 
                        <div key={inputs.placeholder} className="flex flex-col bg-white my-3 rounded-sm">
                            <input 
                                type={inputs.type}
                                placeholder={inputs.placeholder}
                                className="py-3 px-3"
                            />
                        </div>
                )
                    
                ))}
                <button className="w-full bg-[#f84301] rounded-md py-2 px-2 text-white " type="submit">Enviar</button>
            </form>
        </div>
    )
}
