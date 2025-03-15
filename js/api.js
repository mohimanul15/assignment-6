// Fetch All Pets

// Endpoint: https://openapi.programming-hero.com/api/peddy/pets
// Description: Retrieves a list of all available pets for adoption. The data includes details like pet name, type, age, and adoption status.
// Fetch Pet Details by ID

// Endpoint:https://openapi.programming-hero.com/api/peddy/pet/pet-id

// Example: https://openapi.programming-hero.com/api/peddy/pet/1

// Description: Fetches detailed information for a specific pet based on its ID. This can be used to view additional information about the pet such as vacination history, description

// Fetch All Pet Categories

// Endpoint: https://openapi.programming-hero.com/api/peddy/categories

// Description: Fetches a list of all pet categories available in the platform, such as dogs, cats, rabbit , bird, etc.

// Fetch Pets by Category

// Endpoint: https://openapi.programming-hero.com/api/peddy/category/categoryName

// Example: https://openapi.programming-hero.com/api/peddy/category/dog

// Description: Fetches data of pets under a specific category, in this case, dogs. This can be used to filter pets based on their category.

async function apiResolver(uri,type){
    try {
        const apiData = await fetch(uri);

        const jsonData = await apiData.json();

        if(type === 'categoryList'){
            catViewer(jsonData.categories);
        }
        return
    } catch (error) {
        console.error(type,' Data not found');
    }
}


function catViewer(data){

    const catBinder = document.getElementById('p_category');

    let viewer = '';

    data.forEach(element => {
        viewer += `
        <button onclick="catSelector('${element.category}',${element.id})" class="single_cat flex-1 border-2 border-btn_color_main border-opacity-20 rounded-2xl" id="${element.category}_${element.id}">
        <div class="outer flex flex-row p-2 lg:p-6 justify-center items-center gap-4">
                        <img src="${element.category_icon}" class=" max-w-6 lg:max-w-14">
                        <h3 class="font-bold text-xl lg:text-2xl">${element.category}</h3>
        </div>
        </button>
    ` 
    });

    catBinder.innerHTML = viewer;
}
