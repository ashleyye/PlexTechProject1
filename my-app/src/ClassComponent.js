import React from "react"
import App from "./App"

class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            arrayOfRecipes : []
        }
    }

    componentDidMount(){
        
        fetch('https://api.edamam.com/search?q=turkey&app_id=378b0f64&app_key=5588496977720f6d8466fb650afad113', {method: 'GET',
        redirect: 'follow'})
        .then(response => response.json())
        .then(result => this.setState({arrayOfRecipes: result.hits}))
        .catch(error => console.log("error"))
    }

    render(){
        return(
            <div>
                <h1>Thanksgiving Turkey Recipes</h1>
                {this.state.arrayOfRecipes.map(item =>
                <div>
                <h1>{item.recipe.label}</h1>
                {item.recipe.ingredients.map(ingredient =>
                    <div>  
                        <img src = {ingredient.image ? ingredient.image: " "} className = "image"/> 
                       <li>{ingredient.text} </li>
                    </div>
                )}
                <p>Health Labels: {item.recipe.healthLabels} </p>


            </div>)}
            
            </div>)
    }
}

export default ClassComponent;

/*<h1>{item.label}</h1>
                        <p>{item.description}</p>
                        <p>{item.source}</p> */