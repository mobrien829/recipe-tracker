import React from 'react'
import { Card } from "semantic-ui-react"

// functional component using the Card component from semantic
// will require <Image> in the future from semantic
// potentially changed into a class component downthe road, but unlikely
// only presents information, but can connect to context for stretch goals such as "liking"


function RecipeCard() {
    return(
    <Card>
        <Card.Content href=''>
        example card for first recipe
        <Card.Header className="recipeTitle">Chicken parm</Card.Header>
        <Card.Description className="author">Peyton Manning</Card.Description>
        </Card.Content>
    </Card>)
}

export default RecipeCard