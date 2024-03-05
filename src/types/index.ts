export interface Root {
  services: Service[]
}

export interface Service {
  name: string
  title: string
  id: number
  url: string
  textoServices: string
  Duracao: number
}

export interface form{
  inputForm:formProps[],
}

export interface formProps{
  type:string,
  placeholder:string,
  labelInput:string,
}
