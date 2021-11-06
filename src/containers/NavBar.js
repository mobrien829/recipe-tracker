import React, { useContext } from "react"
import { Dropdown, Menu } from "semantic-ui-react"
import { useHistory } from "react-router-dom"
import Login from "../components/Login"
import { UserContext } from "../contexts/user-context"
// TODO: submenus for content to display on main page?
// create the pages that need to be linked to
// ROUTING
// logout is placeholder for the moment - need to connect to auth

const NavBar = () => {

    const [user, setUser] = useContext(UserContext)

    let history = useHistory()

    // returns to home page
    const homeHelper = () => {
        history.push("/")
    }
    
    // causes user page to render
    const userHelper = () => {
        history.push("/user")
    }

    const loginHelper = () => {
        // history.push("/login")
        console.log("login clicked")
    }

    const logoutHelper = () => {
        console.log("logout clicked")
    }

     // selectively renders based on logged in/lout TODO: refactor into its own component
     const navBarMenu = () => {
         return (<>
        {user ? 
        (
            <>
                <Dropdown.Item onClick={userHelper}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={logoutHelper}>Log Out</Dropdown.Item>
            </>
        ) :
            (
            <>
                <Dropdown.Item onClick={loginHelper}>Log In</Dropdown.Item>
            </>
            )}</>)
    }


    return(
    <Menu>
    <Menu.Item onClick={homeHelper}>recipe-holder</Menu.Item>
    <Menu.Item>search bar</Menu.Item>
    <Menu.Menu position="right">
        <Dropdown item text="Account">
            <Dropdown.Menu>
                {navBarMenu()}
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Menu>
    </Menu>)
}

export default NavBar