import React, {useState} from 'react'
import styled from '@emotion/styled'
import { rem } from 'polished'
import NavMenu from './NavMenu'

function Header(props) {

    const bar1X = {
        transform: "rotate(-45deg) translate(-4px, 7.5px)"
    }

    const bar1 = {
        transform: ""
    }

    const bar2X = {
        opacity: "0"
    }

    const bar2 = {
        opacity: "1"
    }

    const bar3X = {
        transform: "rotate(45deg) translate(-4px, -9.5px)"
    }

    const bar3 = {
        transform: ""
    }

    const [navOpen, setNavOpen] = useState(false)

    function openNav() {
        if(navOpen) {
            setNavOpen(false);
        } else {
            setNavOpen(true);
        }
    }

    const returnNavMenu = () => <NavMenu />


   



    return (
        <HeaderStyled 
        onMouseOver={props.onMouseOver}
        className={props.className}>
            <TitleStyled className={props.headerTitle}
            style={props.titleStyle}>
                {props.title}
            </TitleStyled>
            <UtilityStyled>
              <LogoStyled>
                <img style={{width: "calc(1rem + 3.5vmin"}} src="/rr_drkPnk.png"/>
              </LogoStyled>
              <input style={{width: "40vmin", height: "3vh", fontFamily:"Arial, FontAwesome"}} type="text" placeholder="&#xF002;"/>
              <NavStyled>
                <NavBarsStyled onClick={openNav}>
                  <BarStyled style={navOpen ? bar1X : bar1} />
                  <BarStyled style={navOpen ? bar2X : bar2} />
                  <BarStyled style={navOpen ? bar3X : bar3} />
                </NavBarsStyled>
              </NavStyled>
            </UtilityStyled>
            {navOpen ? returnNavMenu : ""}
        </HeaderStyled>
    );
}

/* polished.js.org/docs --> functions for css */

const HeaderStyled = styled.header`
    width: 100vw;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    position: relative;
    top: 0;
    left: 0;
`

const TitleStyled = styled.h1`
    color: ${props => props.theme.colors.Brwn};
    text-align: center;
    font-size: 6vmin;
    letter-spacing: 2vw;
    width: 100vw;
    height: 15vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.lgtGry};
`

const UtilityStyled = styled.div`
    width: 100vw;
    height: 10vh;
    display: grid;
    grid-template-columns: 20vw 60vw 20vw;
    justify-items: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.white};
`
const LogoStyled = styled.div`
    grid-column: 1 / 2;
`

const NavStyled = styled.div`
    color: ${props => props.theme.colors.white};
    text-align: center;
    grid-column: 3 / 4;
    display: block;
`
const NavBarsStyled = styled.div`
    display: inline-block;
    cursor: pointer;
`

const BarStyled = styled.div`
    width: 30px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
`

export default Header;