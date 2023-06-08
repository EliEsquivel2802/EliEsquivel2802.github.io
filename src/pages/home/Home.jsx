import Footer from "../../components/Footer"
import Movie from "../../components/Movie"
import Nav from "../../components/Nav"

const Home = () => {

  return (
    <>
      <Nav />
      <header className="main-header">
        <section className="main-header-content">
          <div className="main-header-content-first">
            <div className="main-header-content-first-slap">
              Front End
            </div>
            <h2>Challenge React</h2>
            <p>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
          <div className="main-header-content-second">
            <div className="main-header-content-second--img">
              <img src="../../../public/header.png" />
            </div>
          </div>
        </section>
      </header>
      <main className="main-home">
        <section className="main-home__category">
          <section className="main-home__category-carrousel carrousel">
            <Movie link='../../../public/1.png' />
            <Movie link='../../../public/2.png' />
            <Movie link='../../../public/3.png' />
          </section>
        </section>
        <section className="main-home__category-header">
          <div className="main-home__category-header-slap" style={{backgroundColor: '#00C86F'}}>
            Back end
          </div>
          <p>
            Formación Back End de Alura Latam
          </p>
        </section>
        <section className="main-home__category">
          <section className="main-home__category-carrousel carrousel">
            <Movie link='../../../public/4.png' />
            <Movie link='../../../public/5.png' />
            <Movie link='../../../public/6.png' />
          </section>
        </section>
        <section className="main-home__category-header">
          <div className="main-home__category-header-slap" style={{backgroundColor: '#FE8C2A'}}>
            Back end
          </div>
          <p>
            Innovación y Gestión
          </p>
        </section>
        <section className="main-home__category">
          <section className="main-home__category-carrousel carrousel">
            <Movie link='../../../public/7.png' />
            <Movie link='../../../public/8.png' />
            <Movie link='../../../public/9.png' />
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home