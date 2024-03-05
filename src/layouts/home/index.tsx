import { Contato } from "../../components/Contato"
import { Depoimentos } from "../../components/Depoimentos"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Servicos } from "../../components/Servicos"
import { Sobremim } from "../../components/Sobremim"
import { Whatsapp } from "../../components/Whatsapp"

export const Home = () => {
  return (
    <>
      <Header />
      <Sobremim/>
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
      <Whatsapp />
    </>
  )
}
