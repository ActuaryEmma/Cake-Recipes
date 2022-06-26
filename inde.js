
//grab all elements
const searchButton = document.getElementById("search");
const getStarted = document.getElementById("btn");
const titleRecipe = document.getElementById("recipe-name");
const category = document.getElementById("recipe-category")
const image = document.getElementById("recipe-image");
const instructions = document.getElementById("recipe-instructions");
const mealImage = document.getElementById("meal-img")
const mealName = document.getElementById("meal-name")
const recipeCloseBtn = document.getElementById("recipe-close-btn")
const recipe = document.getElementById("meal-recipes")
let searchQuery= "";
const food ="https://www.themealdb.com/api/json/v1/1/search.php?f=a";




//add eventlistener to search button
searchButton.addEventListener("submit", (event) => {
    event.preventDefault();
    searchQuery= event.target.querySelector("input").value;
    console.log(searchQuery.value)
})




fetch(food)
.then((res) => res.json())
.then (dataRecipes)

function dataRecipes(meals){
    console.log(meals)
    meals.forEach(dataRecipe)
}   
function dataRecipe(meal){
    const mealSpan = document.createElement("span");
    mealSpan.innerText = meal.strMeal
    recipe.aappend(mealSpan)

}
    