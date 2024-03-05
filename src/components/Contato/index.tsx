import { Formulario } from "../Formulario";

export const Contato = () => {

    const formInputs = [
        {type: 'text', placeholder: 'Nome', labelInput: 'Nome'},
        {type: 'tel', placeholder: 'Telefone', labelInput: 'Telefone'},
        {type: 'text', placeholder: 'Mensagem', labelInput: 'Mensagem'},
    ];
    return (
        <div className="" id="Contato">
            <h1 className="text-6xl mx-12 font-['Tangerine']">Contato</h1>
            <hr></hr>
            <div className="my-12 flex items-center justify-center max-md:block">
                <iframe title="myFrame" className="max-w-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.5894239331137!2d-46.310574159525615!3d-23.547265215100964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7b6fdca4cf33%3A0x2b11fd3452aed8f8!2sMaria%20Silva%20Est%C3%A9tica%20Integrativa!5e0!3m2!1spt-BR!2sbr!4v1708546075616!5m2!1spt-BR!2sbr"
                    width="600" height="450" style={{border:"0"}} referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
                <Formulario
                    inputForm={formInputs}
                />
            </div>
        </div>
    )
}
