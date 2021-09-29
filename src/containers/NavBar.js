import React from "react"
import { Menu } from "semantic-ui-react"
import { Link, useHistory } from "react-router-dom"
// TODO: submenus for content to display on main page?
// create the pages that need to be linked to
// ROUTING
// create dropdown for right side menu - may need to figure out a way to pass down router props

const NavBar = () => {
    let history = useHistory()

    const homeHelper = () => {
        history.push("/")
    }
    
    const userHelper = () => {
        history.push("/user")
    }

    return(
    <Menu>
    <Menu.Item onClick={homeHelper}>recipe-holder</Menu.Item>
    <Menu.Item>search bar</Menu.Item>
    <Menu.Item position="right"  onClick={userHelper}>user profile</Menu.Item>
    </Menu>)
}

export default NavBar