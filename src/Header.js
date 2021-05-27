import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import ForumIcon from '@material-ui/icons/Forum'
import { IconButton } from '@material-ui/core'
function Header() {
    return (
        <div className = "header" >
        
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>

        <IconButton>
        <WhatshotIcon fontSize="large" className="header__logo"/>
        </IconButton>
        
        <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
        </IconButton>
        </div>
    ) 
}

export default Header
