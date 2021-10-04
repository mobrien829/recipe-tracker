import React from "react"
import { Container } from "semantic-ui-react"

// TODO: recipe list mapping or scrollable?
// create backend seeding and start pulling info from backend rather than hardcode

const UserPage = () => {
    console.log("user page rendering")
    return (
        <>
        <Container className="userName">Peyton Manning</Container>
        <Container className="about">About</Container>
        <Container className="recipeList">My Recipes</Container>
        </>
    )
}

export default UserPage