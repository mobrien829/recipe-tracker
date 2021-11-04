import React, { useState, useContext } from "react"
import { UserContext } from "../contexts/user-context"
import { useHistory } from "react-router-dom"
import { Container, Button } from "semantic-ui-react"


// TODO: set up state and login. afterwards need to set up new users.
const Login = () => { 

    const [user, setUser] = useContext(UserContext)

    console.log("rendering login")
    return (
        <Container></Container>
    )
}

export default Login