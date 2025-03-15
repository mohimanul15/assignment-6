// load all category

const allCategoryApi = 'https://openapi.programming-hero.com/api/peddy/categories';

const allPets = 'https://openapi.programming-hero.com/api/peddy/pets';


apiResolver(allCategoryApi,'categoryList');

//load all pets initially

apiResolver(allPets,'petsList');


// category button functionality


function catSelector(category,id){

    const catButton = document.getElementsByClassName('single_cat');

    for(const element of catButton){
        element.classList.remove('bg-btn_color_main', 'bg-opacity-20','rounded-full','border-opacity-100');

        element.classList.add('rounded-2xl','border-opacity-20');
    }

    document.getElementById(category+'_'+id).classList.add('bg-btn_color_main','bg-opacity-20','rounded-full','border-opacity-100');

}


// like button Functionality

function likedPet(image){

    console.log(image);
    const imgBinder = document.getElementsByClassName('liked_pets')[0];

    const imageTag = document.createElement('img');

    imageTag.setAttribute('src',`${image}`)
    imgBinder.append(imageTag);

}