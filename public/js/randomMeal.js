const addMealFormHandler = async (event) => {

//add ids from partials 
const name = document.querySelector("#name").value.trim();
const description = document.querySelector("#directions").value.trim();

async function getRandomMeal() {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    addMeal(randomMeal, true);
} 
}


