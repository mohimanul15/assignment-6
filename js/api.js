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
        else if(type === 'petsList'){
            petViewer(jsonData.pets);
        }
        return
    } catch (error) {
        console.error(type,' Data not found');
    }
}


// pets view function

// // breed
// : 
// "Golden Retriever"
// category
// : 
// "Dog"
// date_of_birth
// : 
// "2023-01-15"
// gender
// : 
// "Male"
// image
// : 
// "https://i.ibb.co.com/p0w744T/pet-1.jpg"
// petId
// : 
// 1
// pet_details
// : 
// "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog."
// pet_name
// : 
// "Sunny"
// price
// : 
// 1200
// vaccinated_status
// : 
// "Fully"

function petViewer(data){

    const petBinder = document.getElementsByClassName('pets_viewer')[0];

    let viewer = '';
    data.forEach(element =>{
        console.log(element);


        viewer += `
            <div class="border-2 border-menu_light border-opacity-10 p-5 rounded-xl flex flex-col">
                
                <div class="w-full contents">
                    <img src='${element.image}' class="rounded-lg max-h-[205px]">
                </div>

                <div class="mt-6">
                    <h2 class="font-inter font-bold text-base lg:text-xl">
                        ${element.pet_name}
                    </h2>
                </div>

                <div class="mt-2 flex flex-col gap-1">

                    <div class="flex flex-row items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2081_39)">
                        <path d="M3.33334 3.33337H8.33334V8.33337H3.33334V3.33337Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.6667 3.33337H16.6667V8.33337H11.6667V3.33337Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.33334 11.6666H8.33334V16.6666H3.33334V11.6666Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.6667 14.1666C11.6667 14.8297 11.9301 15.4656 12.3989 15.9344C12.8677 16.4032 13.5036 16.6666 14.1667 16.6666C14.8297 16.6666 15.4656 16.4032 15.9344 15.9344C16.4033 15.4656 16.6667 14.8297 16.6667 14.1666C16.6667 13.5036 16.4033 12.8677 15.9344 12.3989C15.4656 11.93 14.8297 11.6666 14.1667 11.6666C13.5036 11.6666 12.8677 11.93 12.3989 12.3989C11.9301 12.8677 11.6667 13.5036 11.6667 14.1666Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2081_39">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        
                        <p class="text-menu_light text-opacity-70 text-base">
                            Breed: ${element.breed?element.breed:'No Data Found'}
                        </p>
                    </div>

                    <div class="flex flex-row items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.75272 2.69754 5.27581 3.04917 4.92417C3.40081 4.57254 3.87772 4.375 4.375 4.375H15.625C16.1223 4.375 16.5992 4.57254 16.9508 4.92417C17.3025 5.27581 17.5 5.75272 17.5 6.25V15.625M2.5 15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625M2.5 15.625V9.375C2.5 8.87772 2.69754 8.40081 3.04917 8.04917C3.40081 7.69754 3.87772 7.5 4.375 7.5H15.625C16.1223 7.5 16.5992 7.69754 16.9508 8.04917C17.3025 8.40081 17.5 8.87772 17.5 9.375V15.625" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
   
                        <p class="text-menu_light text-opacity-70 text-base">
                            Birth: ${element.date_of_birth?element.date_of_birth:'No Data'}
                        </p>
                    </div>

                    <div class="flex flex-row items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" clip-path="url(#clip0_2081_51)">
                            <path d="M10 11.6666V17.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5 15H12.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 5C10.8841 5 11.7319 5.35119 12.357 5.97631C12.9821 6.60143 13.3333 7.44928 13.3333 8.33333C13.3333 9.21739 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11594 11.6667 8.2681 11.3155 7.64297 10.6904C7.01785 10.0652 6.66666 9.21739 6.66666 8.33333C6.66666 7.44928 7.01785 6.60143 7.64297 5.97631C8.2681 5.35119 9.11594 5 10 5Z" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5 2.5C12.5 3.16304 12.2366 3.79893 11.7678 4.26777C11.2989 4.73661 10.663 5 10 5C9.33696 5 8.70107 4.73661 8.23223 4.26777C7.76339 3.79893 7.5 3.16304 7.5 2.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2081_51">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

   
                        <p class="text-menu_light text-opacity-70 text-base">
                            Gender: ${element.gender?element.gender:'No Data'}
                        </p>
                    </div>

                    <div class="flex flex-row items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2081_59)">
                            <path d="M13.9167 6.66667C13.7508 6.19603 13.4479 5.7858 13.0469 5.48878C12.6459 5.19176 12.1652 5.02153 11.6667 5H8.33334C7.67029 5 7.03441 5.26339 6.56557 5.73223C6.09673 6.20107 5.83334 6.83696 5.83334 7.5C5.83334 8.16304 6.09673 8.79893 6.56557 9.26777C7.03441 9.73661 7.67029 10 8.33334 10H11.6667C12.3297 10 12.9656 10.2634 13.4344 10.7322C13.9033 11.2011 14.1667 11.837 14.1667 12.5C14.1667 13.163 13.9033 13.7989 13.4344 14.2678C12.9656 14.7366 12.3297 15 11.6667 15H8.33334C7.83479 14.9785 7.35409 14.8082 6.95311 14.5112C6.55213 14.2142 6.24921 13.804 6.08334 13.3333" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 2.5V5M10 15V17.5" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2081_59">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>


   
                        <p class="text-menu_light text-opacity-70 text-base">
                            Price: ${element.price?element.price + '$':'No Data'}
                        </p>
                    </div>

                </div>

                <div class="divider"></div>

                <div class="flex flex-col lg:flex-row justify-between gap-3">   
                    <button class="border-2 border-btn_color_main border-opacity-15 rounded-2xl flex-1 py-3 items-center w-full" onclick="likedPet('${element.image}')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                            <path d="M5.5275 8.54163C6.19917 8.54163 6.805 8.16996 7.22 7.64163C7.86688 6.81631 8.67893 6.13511 9.60417 5.64163C10.2067 5.32163 10.7292 4.84496 10.9817 4.21246C11.159 3.76933 11.2501 3.29642 11.25 2.81913V2.29163C11.25 2.12587 11.3159 1.96689 11.4331 1.84968C11.5503 1.73247 11.7092 1.66663 11.875 1.66663C12.3723 1.66663 12.8492 1.86417 13.2008 2.2158C13.5525 2.56743 13.75 3.04435 13.75 3.54163C13.75 4.50163 13.5333 5.41079 13.1475 6.22329C12.9258 6.68829 13.2367 7.29163 13.7517 7.29163M13.7517 7.29163H16.3567C17.2117 7.29163 17.9775 7.86996 18.0683 8.72079C18.1058 9.07246 18.125 9.42913 18.125 9.79163C18.1284 12.0719 17.3492 14.2843 15.9175 16.0591C15.5942 16.4608 15.095 16.6666 14.58 16.6666H11.2333C10.8308 16.6666 10.43 16.6016 10.0475 16.475L7.4525 15.6083C7.07009 15.4811 6.66968 15.4164 6.26667 15.4166H4.92M13.7517 7.29163H11.875M4.92 15.4166C4.98917 15.5875 5.06417 15.7541 5.145 15.9183C5.30917 16.2516 5.08 16.6666 4.70917 16.6666H3.9525C3.21167 16.6666 2.525 16.235 2.30917 15.5266C2.02054 14.5793 1.87422 13.5944 1.875 12.6041C1.875 11.31 2.12084 10.0741 2.5675 8.93913C2.8225 8.29413 3.4725 7.91663 4.16667 7.91663H5.04417C5.4375 7.91663 5.665 8.37996 5.46084 8.71663C4.74908 9.88825 4.37369 11.2332 4.37584 12.6041C4.37584 13.5991 4.56917 14.5483 4.92084 15.4166H4.92Z" stroke="#131313" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </button>

                    <button class="border-2 border-btn_color_main border-opacity-15 rounded-2xl flex-1 py-3 items-center w-full">
                        <h3 class="font-bold text-btn_color_main text-base lg:text-lg">
                            Adopt
                        <h3>
                    </button>

                    <button class="border-2 border-btn_color_main border-opacity-15 rounded-2xl flex-1 py-3 items-center w-full">
                        <h3 class="font-bold text-btn_color_main text-base lg:text-lg">
                            Details
                        <h3>
                    </button>
                </div>

            </div>
        `
    });

    petBinder.innerHTML = viewer;
}

// category viewer function

function catViewer(data){

    const catBinder = document.getElementById('p_category');

    let viewer = '';

    data.forEach(element => {
        viewer += `
        <button onclick="catSelector('${element.category}',${element.id})" class="single_cat flex-1 border-2 border-btn_color_main border-opacity-20 rounded-2xl" id="${element.category}_${element.id}">
        <div class="outer flex flex-row p-2 lg:p-6 justify-center items-center gap-4">
                        <img src="${element.category_icon}" class=" max-w-6 lg:max-w-14">
                        <h3 class="font-bold text-xl lg:text-2xl font-inter">${element.category}</h3>
        </div>
        </button>
    ` 
    });

    catBinder.innerHTML = viewer;
}
