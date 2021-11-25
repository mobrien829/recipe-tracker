import React, { useState, useContext } from "react"
import { UserContext } from "../contexts/user-context"
import { useHistory } from "react-router-dom"
import { Container, Button, Form, Input, TextArea } from "semantic-ui-react"


// TODO: set up state and login. afterwards need to set up new users.
// finish login helper to validate logins
const Login = () => { 

    let history = useHistory()

    const [user, setUser] = useContext(UserContext)

    const handleLogin = () => {
        console.log("logging in")
        // history.push("/")
    }

    console.log("rendering login")
    return (
        <Container>
            <Form>
                <Form.Field 
                id="login-email"
                control={Input}
                label="Email"
                placeholder="email"
                />
                <Form.Field 
                id="login-password"
                label="Password" 
                control={Input}
                type="password"
                placeholder="password"
                />
                <Form.Field 
                id="login-submit"
                control={Button}
                content="Login"
                onClick={handleLogin}
                />
            </Form>
        </Container>
    )
}

export default Login