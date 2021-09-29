import React from "react"
import { Menu } from "semantic-ui-react"

// TODO: submenus for content to display on main page?
// create the pages that need to be linked to
// ROUTING

const NavBar = () => {
    return(
    <Menu>
    <Menu.Item>recipe-holder</Menu.Item>
    <Menu.Item>search bar</Menu.Item>
    <Menu.Item position="right">user profile</Menu.Item>
    </Menu>)
}

export default NavBar