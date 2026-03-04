import React from "react"
export default function Main() {
const [ingredients, setIngredients] = React.useState(["Note: Add only the Non Veg Ingridents"])
const ingredientItems = ingredients.map(ingredient=>(
  <li key={ingredient}>{ingredient}</li>

))

function handleSubmit(formData){
  
  const newIngrident = formData.get("ingredient")
  setIngredients(previous=> [...previous,newIngrident])
  
  
}

    return (
        <main>
            <form action={handleSubmit}className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredients</button>
            </form>
            <ul>
              {ingredientItems}
            </ul>
        </main>
    )
}