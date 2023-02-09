const addMealFormHandler = async (event) => {
event.preventDefault();
//add ids from partials 
const name = document.querySelector("#name").value.trim();
const description = document.querySelector("#directions").value.trim();

  if (name && description) {
    const response = await fetch('/api/foodRoutes', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
     });

     if (response.ok) {
      document.location.replace('/');
     } else {
       alert('Try again!');
      }
  }

}; 

    document
  .querySelector('#add-recipes')
  .addEventListener('submit', addMealFormHandler);

