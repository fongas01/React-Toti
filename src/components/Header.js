import React from "react"

function Header(){
    return(
        <header>
            <img className="logo" src="/" alt="Logo do site"/>
            <nav>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Sobre</li></a>
                    <a href="#"><li>Contato</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header
