import { useState, useEffect, useRef } from 'react'

import "./header.css"

import smallLeft from '../../assents/icons/small-left.png'
import smallRight from '../../assents/icons/small-right.png'
import searchIcon from '../../assents/icons/search.png'
import playList from '../../assents/playlist/1.jpeg'

import playListTwo from '../../assents/playlist/2.png'
import playListThree from "../../assents/playlist/3.jpeg"
import playListFour from "../../assents/playlist/4.jpeg"
import playListFive from "../../assents/playlist/5.jpeg"
import playListSix from "../../assents/playlist/6.jpeg"
import playListSeven from "../../assents/playlist/7.jpeg"
import playListEight from "../../assents/playlist/8.jpeg"
import playListNine from "../../assents/playlist/9.jpeg"
import playListTen from "../../assents/playlist/10.jpeg"
import playListEleven from "../../assents/playlist/11.jpeg"
import playListTwelve from "../../assents/playlist/12.jpeg"
import playListThirTeen from "../../assents/playlist/13.jpeg"
import playListFourTeen from "../../assents/playlist/14.jpeg"
import playListFifTeen from "../../assents/playlist/15.jpeg"

export default function HeaderNavigation() {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);
    const [isHidden, setIsHidden] = useState(false);
    const resultArtist = useRef(null);
    const playlistContainer = useRef(null);
    const searchInput = useRef(null);

    useEffect(() => {
        if (searchTerm !== '') {
            requestApi(searchTerm)
        } else {
            setIsHidden(true)
        }
    }, [searchTerm])

    const requestApi = async (searchTerm) => {
        const url = `http://localhost:3000/artists?name_like=${searchTerm}`
        const response = await fetch(url)
        const result = await response.json()
        displayResults(result)
    }

    const displayResults = (result) => {
        setIsHidden(false)
        setResult(result)
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    return (
        <div className="main-container">
            <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="" />
                    </button>
                    <button className="arrow-right">
                        <img src={smallRight} alt="" />
                    </button>
                    <div className="header__search">
                        <img src={searchIcon} alt="" />
                        <input id="search-input" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="O que você quer ouvir?" value={searchTerm} onChange={handleInputChange} ref={searchInput} />
                    </div>
                </div>
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
            <div className="playlist-container" ref={playlistContainer} >
                <div id="result-playlists" className={isHidden ? '' :  'hidden'}>
                    <div className="playlist">
                        <h1 id="greeting"></h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>
    
                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">

                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src={playList} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                
                                <a href="" className="cards">
                                <div className="cards card2">
                                    <img src={playListTwo} alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card3">
                                    <img src={playListThree} alt="" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card4">
                                    <img src={playListFour} alt="" />
                                    <span>Creators</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card5">
                                    <img src={playListFive} alt="" />
                                    <span>Para treinar</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card6">
                                    <img src={playListSix} alt="" />
                                    <span>Podcasts</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card7">
                                    <img src={playListSeven} alt="" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card8">
                                    <img src={playListEight} alt="" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card9">
                                    <img src={playListNine} alt="" />
                                    <span>Funk</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card10">
                                    <img src={playListTen} alt="" />
                                    <span>MPB</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card11">
                                    <img src={playListEleven} alt="" />
                                    <span>Rock</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card12">
                                    <img src={playListTwelve} alt="" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card13">
                                    <img src={playListThirTeen} alt="" />
                                    <span>Indie</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card14">
                                    <img src={playListFourTeen} alt="" />
                                    <span>Relax</span>
                                </div>
                            </a>
            
                            <a href="" className="cards">
                                <div className="cards card15">
                                    <img src={playListFifTeen} alt="" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div id="result-artist" className={isHidden ? 'hidden' : ''}>
                <div className="grid-container">
                    {result.map((artist, index) => (
                        <div className="artist-card" id={`artist-${index}`} key={index}>
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" src={artist.urlImg} alt={artist.name} ref={resultArtist} />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title={artist.name} className="vst" href={artist.url}>
                                    <span className="artist-name" id="artist-name">{artist.name}</span>
                                    <span className="artist-categorie">{artist.genre}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}