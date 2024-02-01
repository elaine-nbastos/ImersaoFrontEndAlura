import React from "react";
import './sidebar.css';
import logoSpotify from '../../assents/icons/logo-spotify.png';

export default function Sidebar () {
    return(
            <div className="sidebar">
                <nav className="sidebar__navigation">
                    <div className="logo">
                        <a href="">
                            <img src={logoSpotify} alt="logo do Spotify"/>
                        </a>
                    </div>                    
                    <ul className='sidebar__navigation__options'>
                        <li className="sidebar__navigation__options-itens">
                            <a href="">
                                <span className="fa fa-home"></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li className="sidebar__navigation__options-itens">
                            <a href="">
                                <span className="fa fa-search"></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="library">
                    <div className="library__content">
                        <button className="library__button">
                            <span className="fa fa-book"></span>
                            <span>Sua Biblioteca</span>
                        </button>
                        <span className="icone_mais fa fa-plus"></span>
                    </div>
                    <section className="section-playlist">
                        <div className="section-playlist__content musicas">
                            <span className="text title">Crie sua primeira playlist</span>
                            <span className="text subtitle">É facil, vamos te ajudar.</span>
                            <button className="section-playlist__button">
                                <span>Criar playlist</span>
                            </button>
                        </div>
                        <div className="section-playlist__content podcast">
                            <span className="text title">Que tal seguir um podcast novo?</span>
                            <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                            <button className="section-playlist__button-podcasts">
                                <span>Explore podcasts</span>
                            </button>
                        </div>
                    </section>

                    <div className="cookies">
                        <div className="cookies-items">
                            <a href="">Legal</a>
                        </div>
                        <div className="cookies-items">
                            <a href="">Centro de Privacidade</a>
                        </div>
                        <div className="cookies-items">
                            <a href="">Política de privacidade</a>
                        </div>
                        <div className="cookies-items">
                            <a href="">Cookies</a>
                        </div>
                        <div className="cookies-items">
                            <a href="">Sobre anúncios</a>
                        </div>
                        <div className="cookies-items">
                            <a href="">Acessibillidade</a>
                        </div>
                        <div className="cookies-items">
                            <a href="">Notice at Collection</a>
                        </div>
                        <div className="cookies-items">
                            <a href="">Your Privacy Choices</a>
                        </div>
                        <div className="">
                        <a href="">Cookies</a>
                        </div>
                    </div>

                    <div className="languages">
                        <button className="languages__button">
                            <span className="fa fa-globe"></span>
                            <span>Português do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}