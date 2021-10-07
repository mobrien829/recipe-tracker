import React from "react"
import { Container } from "semantic-ui-react"

// TODO: recipe list mapping or scrollable?
// create backend seeding and start pulling info from backend rather than hardcode

const UserPage = (props) => {


    console.log("user page rendering")
    return (
        <>
        <Container className="userName">{props.name}</Container>
        <Container className="about">{props.about}</Container>
        <Container className="recipeList">recipes</Container>
        </>
    )
}

export default UserPage