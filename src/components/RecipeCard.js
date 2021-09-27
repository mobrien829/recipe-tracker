import React from 'react'
import { Card } from "semantic-ui-react"

function RecipeCard() {
    return(
    <Card>
        <Card.Content href=''>
        example card for first recipe
        <Card.Header className="recipe-title">Chicken parm</Card.Header>
        <Card.Description className="author">Peyton Manning</Card.Description>
        </Card.Content>
    </Card>)
}

export default RecipeCard