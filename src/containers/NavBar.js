import React from "react"
import { Dropdown, Menu } from "semantic-ui-react"
import { useHistory } from "react-router-dom"
// TODO: submenus for content to display on main page?
// create the pages that need to be linked to
// ROUTING
// logout is placeholder for the moment - need to connect to auth

const NavBar = () => {
    let history = useHistory()

    // returns to home page
    const homeHelper = () => {
        history.push("/")
    }
    
    // causes user page to render
    const userHelper = () => {
        history.push("/user")
    }

    return(
    <Menu>
    <Menu.Item onClick={homeHelper}>recipe-holder</Menu.Item>
    <Menu.Item>search bar</Menu.Item>
    <Menu.Menu position="right">
        <Dropdown item text="Account">
            <Dropdown.Menu>
                <Dropdown.Item onClick={userHelper}>Profile</Dropdown.Item>
                <Dropdown.Item>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Menu>
    </Menu>)
}

export default NavBar