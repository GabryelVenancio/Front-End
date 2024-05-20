// import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import stripeLogo from './img/stripe.png';
import awsLogo from './img/aws.png';
import redditLogo from './img/reddit.png';
import imgflores from './img/imgflores.png';
import imgmulher from './img/imgmulher.png';
import imghomem from './img/imghomem.png';
import aprendalogo from './img/aprenda.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import somlogo from './img/som.png';
import tecladologo from './img/teclado.png';
import violaologo from './img/violao.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="app">
      <div className="fundo">
        <header className="header">
          <div className="logo">
            Doracorde
          </div>
          <nav className="navigation">
            <a href="/home">Home</a>
            <a href="/instrumentos">Instrumentos</a>
            <a href="/planos">Planos</a>
            <a href="/depoimentos">Depoimentos</a>
            <a href="/sobre">Sobre</a>
            <a href="/blog">Blog</a>
          </nav>
          <div className="buttons">
            <button className="login">Entrar</button>
            <button className="start-now">Comece Agora</button>
          </div>
        </header>
        <br />
        <section className="harmonia">
          <div className="harmonia-section">
            <div className="text-content">
              <h1>Harmonia para todos os <span style={{color:"#F9C402"}}>sentidos</span></h1>
              <br/>
              <p>Aqui se inicia uma nova era na educação musical, marcando o amanhecer de métodos inovadores e experiências transformadoras.</p>
            </div>
            <div className="image-content">
              <div className="img-wrapper"><img className="img1" src={imgmulher} alt="Descrição da imagem 2" /></div>
              <div className="img-wrapper"><img className="img2" src={imgflores} alt="Uma mulher negra com deficiencia visual, com borboleta em seu rosto" /></div>
              <div className="img-wrapper"><img className="img3" src={imghomem} alt="Descrição da imagem 3" /></div>
            </div>
          </div>
        </section>
      </div>
      <section className="patrocionios">
        <div className="img-section">
          <div className="logos-container">
            <img src={stripeLogo} alt="Logo Stripe" />
            <img src={awsLogo} alt="Logo AWS" />
            <img src={redditLogo} alt="Logo Carrinho" />
          </div>
        </div>
      </section>
      <br />
      <section className="aprenda">
        <div className="music-learning-section">
          <div className="text-content">
            <h1>Aprenda e Melhore Suas Habilidades</h1>
            <p>Prepare-se para uma experiência única e enriquecedora no mundo da música.</p>
            <br />
            <button className="discover-more-btn">Descubra Mais</button>
          </div>
          <div className="image-content2">
            <img src={aprendalogo} alt="Músicos tocando instrumentos" />
          </div>
        </div>
      </section>
      <br />
      <section className="instrumentos">
        < CardGroup >
          <Card>
            <Card.Img variant="top" src={somlogo} />
            <Card.Body>
              <Card.Title>Guitarra</Card.Title>
              <Card.Text>
                Entre agora para o nosso clube de descontos! Faça parte
                e tenha acesso exclusivo às melhores marcas e modelos de
                guitarra do mercado! Aulas online e presenciais com os melhores
                professores do Brasil!
              </Card.Text>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={violaologo} />
            <Card.Body>
              <Card.Title>Violão</Card.Title>
              <Card.Text>
                Entre agora para o nosso clube de descontos! Faça parte
                e tenha acesso exclusivo às melhores marcas e modelos de
                violão do mercado! Aulas online e presenciais com os melhores
                professores do Brasil!
              </Card.Text>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={tecladologo} />
            <Card.Body>
              <Card.Title>Piano</Card.Title>
              <Card.Text>
                Entre agora para o nosso clube de descontos! Faça parte
                e tenha acesso exclusivo às melhores marcas e modelos de
                piano do mercado! Aulas online e presenciais com os melhores
                professores do Brasil!
              </Card.Text>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup >
      </section>
    </div>
  );
}

export default App

