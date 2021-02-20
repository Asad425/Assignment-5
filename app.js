function searchMeal(){
    const searchText = document.getElementById('search-text').value; 
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showMatchingMeal(data.meals))

}


const showMatchingMeal = meals =>{
    
    const mealInfoDiv = document.getElementById('meal-info');
        mealInfoDiv.innerHTML='';

    meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = "customDesign";
        mealDiv.innerHTML=`
        <div class="custom-card">
        <img src="${meal.strMealThumb}">
        <h4>${meal.strMeal}</h4>
        <button onclick="ShowingredientDetails('${meal.idMeal}')" class="btn custom-button" >Ingredients</button>
        </div>
        
        `
        
        mealInfoDiv.appendChild(mealDiv);
    });
    
}

const ShowingredientDetails = mealList =>{

    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealList}`;
    fetch(url)
    .then(res => res.json())
    .then(data => show(data.meals[0]));
};

const show= mealIngredients =>{
    const ingredientsDetailDiv =document.getElementById('ingredients-detail');
    ingredientsDetailDiv.innerHTML="";
    ingredientsDetailDiv.innerHTML=`
    <div class="meal-ingredients">
    <img src="${mealIngredients.strMealThumb}">
    <h1>${mealIngredients.strMeal}</h1>    
    </div>
   
    <h3>Ingredients:</h3>
    <ul >
    <li><h5>${mealIngredients.strIngredient1}</li>
    <li><h5>${mealIngredients.strIngredient2}</h5</li>
    <li><h5>${mealIngredients.strIngredient3}</h5</li>
    <li><h5>${mealIngredients.strIngredient4}</h5</li>
    <li><h5>${mealIngredients.strIngredient5}</h5</li>
    <li><h5>${mealIngredients.strIngredient6}</h5</li>
    <li><h5>${mealIngredients.strIngredient7}</h5</li>
    <li><h5>${mealIngredients.strIngredient8}</h5</li>
    <li><h5>${mealIngredients.strIngredient9}</h5</li>
    <li><h5>${mealIngredients.strIngredient10}</h5</li>
   </ul>
    `;
};