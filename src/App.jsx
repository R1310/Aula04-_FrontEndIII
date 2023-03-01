import Header from "./Componentes/Header"
import Card from "./Componentes/Card"
import"./style.css"
import Footer from "./Componentes/Footer"


function App() {
  return(
    <div className="container" >
      <Header />
      <main>
            <h1 style={{textAlign:'center', fontFamily:'Tahoma' }}>FAST-FOOD HOUSE</h1>
           
      <section>
        <Card  title="Comida Japonesa"
        img= "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/10/01/1122754635-comidajaponesaaprenda6receitasfaceis.jpg"/>

        <Card  title="Comida Chinesa"
        img= "https://cdn.brasildefato.com.br/media/6eb6e3caef0a598bc3f03feb759d9b03.jpg"/>

        <Card title="Comida Arabe"
        img= "https://www.sabornamesa.com.br/media/k2/items/cache/178044b1339d92618b3b1af938fc75de_XL.jpg"/>

        <Card title="Comida Indiana"
        img= "https://conteudo.imguol.com.br/c/entretenimento/86/2021/02/03/comida-indiana-1612393160335_v2_450x337.jpg"/>

        <Card  title="Comida Francesa"
        img= "https://www.segurospromo.com.br/blog/wp-content/uploads/2022/01/Comida-francesa-740x360.jpg"/>
        </section>

      </main>
      <Footer />

    </div>
  )
  
}
export default App
