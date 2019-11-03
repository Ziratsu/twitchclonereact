import React, {useState, useEffect} from 'react';
import logo from './IconeTwitch.svg'
import search from './Search.svg'
import menuIco from './MenuIco.svg'
import croix from './Croix.svg'
import {Link} from 'react-router-dom';

function Header(){

    const [menu, showMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearch] = useState('');

    useEffect(() => {


        const mediaQuery = window.matchMedia("(max-width: 900px)");
        // addlistener c'est comme addeventlisterner pour les medias queries en JS
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }

    })

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }

    const toggleNavRes = () => {
        showMenu(!menu);
    }

    const hideMenu = () => {

        if(menu === true) {
            showMenu(!menu);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        setSearch(e.target.value);
    }


    return (
        <div>

            <nav className="headerTop">
                {(menu || !smallScreen) && (

          
                <ul className="listeMenu">

                    <li onClick={hideMenu} className="liensNav">
                        <Link className="lien" to="/">
                          <img src={logo} alt="logo twitch" className="logo"/>
                        </Link>
                    </li>
                    <li onClick={hideMenu} className="liensNav">
                        <Link className="lien" to="/">
                          Top Games
                        </Link>
                    </li>
                    <li onClick={hideMenu} className="liensNav">
                         <Link className="lien" to="/top-streams">
                             Top Streams
                         </Link>
                    </li>
                    <li className="liensNav">
                        <form className="formSubmit" onSubmit={handleSubmit}>

                            <input required value={searchInput} onChange={(e) => handleKeyPress(e)} type="text" className="inputRecherche"/>

                        <Link
                        className="lien"
                        to={{
                            pathname: `/resultats/${searchInput}`
                        }}
                        >
                            <button type="submit">
                                <img src={search} alt="icone loupe" className="logoLoupe"/>
                            </button>
                        </Link>
                        </form>
                    </li>

                </ul>

            )}

            </nav>

        <div className="menuResBtn">
            <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco"/>
        </div>

        </div>
    )
}

export default Header