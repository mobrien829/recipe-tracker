import React from "react"
import { Container, Grid } from "semantic-ui-react"
import RecipeCard from "../components/RecipeCard"


const RecipeGrid = () => {
    return(
    <Container>
    <Grid className="RecipeGrid" padded="horizontally">
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <RecipeCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <RecipeCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <RecipeCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <RecipeCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <RecipeCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <RecipeCard />
        </Grid.Column>
    </Grid>
    </Container>
    )
}

export default RecipeGrid