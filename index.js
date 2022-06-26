

//const searchButton = document.getElementById("search-bar"); 
const searchForm = document.querySelector("#form"); 
const getStarted = document.getElementById("btn");
const titleRecipe = document.getElementById("recipe-name");
const category = document.getElementById("recipe-category")
const image = document.getElementById("recipe-image");
const instructions = document.getElementById("recipe-instructions");
const mealImage = document.getElementById("meal-img")
const mealName = document.getElementById("meal-name")
const recipeCloseBtn = document.getElementById("recipe-close-btn")
const recipe = document.getElementById("meal-recipes")
const mealList = document.getElementById("meal")

const mealRecipe = document.querySelector(".meal-recipes")
searchForm.addEventListener("submit", (event) => {
    const searchButton = document.querySelector(".search-bar").value; 
    event.preventDefault();
    console.log(searchButton)
    const food =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchButton}`;
    fetch(food)
    .then((res) => res.json())
    .then (dataRecipes => {
        mealRecipe.innerHTML = ``
        displayMeal(dataRecipes)

    })
    .catch(error =>{
        alert("Meal or recipe does not exist.")

    })
    document.location.href="#meal-recipes"
    console.log("data")
    
})






function displayMeal(dataRecipes){
    let mealArrays = dataRecipes.meals
    //console.log(mealArrays)
    mealArrays.forEach(mealObject => {
        //console.log(mealObject)
        console.log(mealObject.strMeal)
        let mealName = mealObject.strMeal;
        let mealImage = mealObject.strMealThumb;
        let mealArea = mealObject.strArea
        let mealInstructions = mealObject.strInstructions
        let mealIngredient1 = mealObject.strIngredient1
        let mealIngredient2 = mealObject.strIngredient2
        let mealIngredient3 = mealObject.strIngredient3
        let mealIngredient4 = mealObject.strIngredient4
        let mealIngredient5 = mealObject.strIngredient5
        let mealIngredient6 = mealObject.strIngredient6
        let mealIngredient7 = mealObject.strIngredient7
        let mealIngredient8 = mealObject.strIngredient8
        let mealIngredient9 = mealObject.strIngredient9
        let mealIngredient10 = mealObject.strIngredient10
        let mealMeasure1 = mealObject.strMeasure1
        let mealMeasure2 = mealObject.strMeasure2
        let mealMeasure3 = mealObject.strMeasure3
        let mealMeasure4 = mealObject.strMeasure4
        let mealMeasure5 = mealObject.strMeasure5
        let mealMeasure6 = mealObject.strMeasure6
        let mealMeasure7 = mealObject.strMeasure7
        let mealMeasure8 = mealObject.strMeasure8
        let mealMeasure9 = mealObject.strMeasure9
        let mealMeasure10 = mealObject.strMeasure10
        //console.log(mealIngredient)
        let likes = 0;
        let displaydiv = document.createElement("div")
        displaydiv.innerHTML = 
        `<div class="mealItem">
        <img src="${mealImage}" alt="${mealName}" id="meal-img"/>
        <p class="paragraph">${mealName}</p>
        <p class="paragraph" id="area">Country: ${mealArea}</p>
        

       
        <button class="btn" id="getRecipe">Get Recipe</button>
        <p id="likes">${likes} Likes </p>
        <button class="btn" id="likeBtn">❤️</button>

        <br>
        <br>

        <h3 class="h3instruction">Instructions:</h3>
        <p class="paragraph ingredient-list" id="instruction">${mealInstructions}</p>
        <h3 class="h3instruction">Ingredients:</h3>
        <ol class="ingredient-list">
        <li>${mealIngredient1}</li>
        <li>${mealIngredient2}</li>
        <li>${mealIngredient3}</li>
        <li>${mealIngredient4}</li>
        <li>${mealIngredient5}</li>
        <li>${mealIngredient6}</li>
        <li>${mealIngredient7}</li>
        <li>${mealIngredient8}</li>
        <li>${mealIngredient9}</li>
        <li>${mealIngredient10}</li>
        </ol>
        <h3 class="h3instruction">Measurements:</h3>
        <ol class="ingredient-list">
        <li>${mealMeasure1}</li>
        <li>${mealMeasure2}</li>
        <li>${mealMeasure3}</li>
        <li>${mealMeasure4}</li>
        <li>${mealMeasure5}</li>
        <li>${mealMeasure6}</li>
        <li>${mealMeasure7}</li>
        <li>${mealMeasure8}</li>
        <li>${mealMeasure9}</li>
        <li>${mealMeasure10}</li>
        </ol>
        </div>`

        let headings= displaydiv.querySelectorAll(".h3instruction")
        //console.log(headings)
        let recipeBtn= displaydiv.querySelector("#getRecipe")

        let likeBtn = displaydiv.querySelector("#likeBtn")
        //console.log(idcollection)
        let items = displaydiv.querySelectorAll(".ingredient-list")



        recipeBtn.addEventListener("click", ()=>{
            for (let i of headings){
                if(i.style.display === "none"){
                    i.style.display = "block";
                    recipeBtn.textContent = "Hide Recipe"

                }else {
                    i.style.display = "none"
                    recipeBtn.textContent = "Get Recipe"

                }
                   
            }
            for (let item of items){
                if(item.style.display === "none"){
                    item.style.display = "block";
                //console.log(i) 

                }else {
                    item.style.display = "none"

                }

            }
        
        })
        likeBtn.addEventListener("click", ()=>{
            likes++
            displaydiv.querySelector("#likes").textContent= `${likes} Likes`
        })

        mealRecipe.appendChild(displaydiv)

    })
}
// 

function myFunc() {
    var para = document.getElementById("p");
    para.classList.toggle("paragraphClass");
}

// 

const form1 = document.getElementById("form1")
form1.addEventListener("click", (event)=>{
    const searchInput = document.getElementById("recipeSearch").value;
    event.preventDefault();
    console.log(searchInput);
    
    const food =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    fetch(food)
    .then((res) => res.json())
    .then (dataRecipes => {
        mealRecipe.innerHTML = ``
        displayMeal(dataRecipes) 
    })
    .catch(error =>{
        alert("Meal or recipe does not exist.") 
     }) 
}) 




































    // => {
    // let generatedhtml = document.createElement("div");
    // if(dataRecipes.meals){
        // dataRecipes.meals.forEach(meal =>{
        //         //console.log("data1")
        //     generatedhtml.innerHTML =` 
        //     <div class="meal-item">
        //         <div id="meal-img">
        //             <img src="${meal.strMealThumb}" alt="food">
        //         </div>
        //         <div id="meal-name">
        //             <h3 id="name">"${meal.strMealThumb}"</h3>
        //             <a href="#" class="recipe-btn" >Get Recipe</a>
        //         </div>
        //     </div>  `;
        // });
    // }
// });













// //recipe
// function getMealRecipe(e){
//     e.preventDefault();
//     if(e.target.classList.contains("recipe-btn")){
//         let mealItem = e.target.parentElement.parentElement;
//         fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//         .then(res => res.json())
//         .then(data => {console.log(data)})

//     }
// }
// function mealRecipeModal(meal){
//     console.log(meal);
//     meal=meal[0];
//     let html =`
//            <h2 class="recipe-title">${meal.strMeal}</h2>
//             <p class="recipe-category">${meal.srtCategory}</p>
//             <div class="recipe-instruct">
//                 <h3>Instructions:</h3>
//                 <p>${meal.strInstructions}</p>
//             </div>
//             <div class="recipe-meal-img">
//                 <img src="${meal.strMealThumb}" alt="">
//             </div>`;

//             mealDetailsContent.innerHTML = html;
//             mealDetailsContent.parentElement.classList.add("showRecipe");
// }














// function dataRecipes(meals){
//     console.log(meals)
//     meals.forEach(dataRecipe)
// }   
// function dataRecipe(meal){
//     const mealSpan = document.createElement("span");
//     mealSpan.innerText = meal.strMeal
//     recipe.aappend(mealSpan)

// }



// const searchBotton = document.querySelector("button")
// const mealList = document.getElementById("meal")
// const mealDetailsContent = document.querySelector("meal-details-content")
// const recipeCloseBtn = document.getElementById("recipe-close-btn")

// //event listeners
// searchBotton.addEventListener("click", getMealList)
// mealList.addEventListener("click", getMealRecipe)
// recipeCloseBtn.addEventListener("click", ()=> {
//     mealDetailsContent.parentElement.classList.remove("showRecipe")
// })

// //get meal list that matches with the ingredients
// function getMealList(){
//     let searchInputTxt = document.getElementById("search-bar");
//     // console.log(searchInputTxt);

//     const meals ="https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
//     fetch(meals)
//     .then((res) => res.json())
//     .then (data => {
//         let html = "";
//         if(data.meals){
//             data.meals.forEach(meal => {
//                 html += `
//                 <div class="meal-item" data-id="${meal.idMeal}">
//                 <div class="meal-img">
//                     <img src="${meal.strMealThumb}" alt="food">
//                 </div>
//                 <div class="mean-name">
//                     <h3>${meal.strMeal}</h3>
//                     <a href="#" class="recipe-btn" >Get Recipe</a>
//                 </div>
//             </div>`
//             });
//             // mealList.classList.remove("not found");
//         }else{ "sorry, we didnt find the meal!";
//                 mealList.classList.add("not found");
//             }
//     mealList.innerHTML = html; 
// });
// }
// //recipe
// function getMealRecipe(e){
//     e.preventDefault();
//     if(e.target.classList.contains("recipe-btn")){
//         let mealItem = e.target.parentElement.parentElement;
//         fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//         .then(res => res.json())
//         .then(data => {console.log(data)})

//     }
// }
// function mealRecipeModal(meal){
//     console.log(meal);
//     meal=meal[0];
//     let html =`
//            <h2 class="recipe-title">${meal.strMeal}</h2>
//             <p class="recipe-category">${meal.srtCategory}</p>
//             <div class="recipe-instruct">
//                 <h3>Instructions:</h3>
//                 <p>${meal.strInstructions}</p>
//             </div>
//             <div class="recipe-meal-img">
//                 <img src="${meal.strMealThumb}" alt="">
//             </div>`;

//             mealDetailsContent.innerHTML = html;
//             mealDetailsContent.parentElement.classList.add("showRecipe");
// }










