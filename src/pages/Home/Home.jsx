import React from 'react';
import '../../styles/main.sass';
import Node from '../../assets/Icons/nodejs-icon.svg';
import ReactIcon from '../../assets/Icons/react-icon.svg';
import Sass from '../../assets/Icons/icon-sass.png';
import JS from '../../assets/Icons/icon-javascript.png';
import Whats from '../../assets/Icons/whatsapp.png';
import Insta from '../../assets/Icons/instagram.png';
import Git from '../../assets/Icons/github.png';
import Linkedin from '../../assets/Icons/linkedin.png';
import Email from '../../assets/Icons/email.png';
import Logo from '../../assets/logo.png';

export default function Home() {
  return (
    <div>
      <div className="background">
        <div className="menu">
          <a>Inicio</a>
          <a href="#sobreMim">Sobre mim</a>
          <div className="menu-logo">
            <img src={Logo} />
            <span>Rafa.Pinheiro</span>
          </div>
          <a href="#projetos">Projetos</a>
          <a href="#contatos">Contatos</a>
        </div>
        <div className="inicio">
          <div className="banner-mobile"></div>
          <div className="banner-pc"></div>
          <div className="banner-mask"></div>
        </div>
      </div>

      <div id="sobreMim" className="sobre-mim">
        <div className="profile">
          <div className="image"></div>
        </div>
        <div className="text">
          <h2>Olá,</h2>
          <p className="text-p">
            Sou o Rafael Pinheiro, desenvolvedor web iniciando na programação.
            Busco novas oportunidades para ampliar meus conhecimentos.
            Desenvolvendo aplicações front-end, com as seguintes tecnologias:
            HTML, CSS, JavaScript, React e React Native.
          </p>
        </div>
      </div>

      <div id="habilidades" className="habilidades">
        <h3>Minhas Habilidades</h3>
        <ul>
          <li>
            <img src={JS} className="habilidade-icons" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={ReactIcon} className="habilidade-icons" />
            <p>React JS</p>
          </li>
          <li>
            <img src={Sass} className="habilidade-icons" />
            <p>Sass</p>
          </li>
          <li>
            <img src={Node} className="habilidade-icons" />
            <p>Node.js</p>
          </li>
        </ul>
      </div>

      <section id="projetos" className="projetos">
        <article className="title-projetos">
          <h3>Meus Projetos</h3>
        </article>
        <article className="carrosel">
          <div className="card">
            <div className="jogo-da-velha"></div>
            <div className="card-title-large">Jogo da velha</div>
            <p className="card-description">
              Padrão jogo da velha feito com react.
            </p>
            <div className="links">
              <a
                href="https://github.com/RafaMPinheiro/Jogo-da-Velha"
                target="_blank"
                className="card-cta"
              >
                GitHub
              </a>
              <a
                href="https://jogo-da-velha-peach-eta.vercel.app/"
                target="_blank"
                className="card-cta"
              >
                Site
              </a>
            </div>
          </div>
          <div className="card">
            <div className="to-do"></div>
            <div className="card-title-large">To-Do list</div>
            <p className="card-description">
              Padrão jogo da velha feito com react.
            </p>
            <div className="links">
              <a
                href="https://github.com/RafaMPinheiro/To-Do"
                target="_blank"
                className="card-cta"
              >
                GitHub
              </a>
              <a
                href="https://to-do-rho-lac.vercel.app/"
                target="_blank"
                className="card-cta"
              >
                Site
              </a>
            </div>
          </div>
          <div className="card">
            <div className="pomodoro"></div>
            <div className="card-title-large">Pomodoro timer</div>
            <p className="card-description">
              Padrão jogo da velha feito com react.
            </p>
            <div className="links">
              <a
                href="https://github.com/RafaMPinheiro/Pomodoro"
                target="_blank"
                className="card-cta"
              >
                GitHub
              </a>
              <a
                href="https://pomodoro-mu-five.vercel.app/"
                target="_blank"
                className="card-cta"
              >
                Site
              </a>
            </div>
          </div>
          <div className="card">
            <div className="pokedex"></div>
            <div className="card-title-large">Pokedex</div>
            <p className="card-description">
              Padrão jogo da velha feito com react.
            </p>
            <div className="links">
              <a
                href="https://github.com/RafaMPinheiro/PokedexReact"
                target="_blank"
                className="card-cta"
              >
                GitHub
              </a>
              <a
                href="https://pokedex-react-d8ktj6zhz-rafampinheiro.vercel.app/"
                target="_blank"
                className="card-cta"
              >
                Site
              </a>
            </div>
          </div>
        </article>
      </section>
      <footer id="contatos" className="contatos">
        <h2>Fale Comigo</h2>
        <div className="contatos-text">
          <div className="icons-contato">
            <a
              href="https://wa.me/5553984473069?text=Ol%C3%A1%2C+Tudo+bem%3F+Gostaria+de+conversar+sobre+seus+servi%C3%A7os%21"
              target="_blank"
            >
              <img className="image-contato" src={Whats} />
              <h5 className="text-contato">(53) 98447-3069</h5>
            </a>
            <a href="mailto:Raff1zpinheiro@gmail.com">
              <img className="image-contato" src={Email} />
              <h5 className="text-contato">Raff1zpinheiro@gmail.com</h5>
            </a>
          </div>
          <div className="icons-contato">
            <a href="https://github.com/RafaMPinheiro" target="_blank">
              <img className="image-contato" src={Git} />
              <h5 className="text-contato">@RafaMPinheiro</h5>
            </a>
            <a
              href="https://linkedin.com/in/rafamessiaspinheiro"
              target="_blank"
            >
              <img className="image-contato" src={Linkedin} />
              <h5 className="text-contato">Raff1zpinheiro@gmail.com</h5>
            </a>
            <a href="https://www.instagram.com/rafa_pinheir00/" target="_blank">
              <img className="image-contato" src={Insta} />
              <h5 className="text-contato">@Rafa_pinheir00</h5>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
