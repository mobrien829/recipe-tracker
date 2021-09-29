import React, { Component } from 'react'
import { Card } from "semantic-ui-react"

// functional component using the Card component from semantic
// will require <Image> in the future from semantic
// potentially changed into a class component downthe road, but unlikely
// only presents information, but can connect to context for stretch goals such as "liking"
// must be clickable to a recipe page

class RecipeCard extends Component {

    handleRecipeClick = () => {
        this.props.history.push(`/recipes`)
        console.log("clicked")
    }

    render() {

    return(
    <Card onClick={this.handleRecipeClick}>
        <Card.Content>
        example card for first recipe
        <Card.Header className="recipeTitle">Chicken parm</Card.Header>
        <Card.Description className="author">Peyton Manning</Card.Description>
        </Card.Content>
    </Card>)}
}

export default RecipeCard