// load all category

const allCategoryApi = 'https://openapi.programming-hero.com/api/peddy/categories';

const allPets = 'https://openapi.programming-hero.com/api/peddy/pets';

// global adopt button array for adopted pets

var adopt = [];


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

    const singleCatUri = `https://openapi.programming-hero.com/api/peddy/category/${category}`

    apiResolver(singleCatUri,'singleCatPets');

}


// like button Functionality

function likedPet(image){

    const imgBinder = document.getElementsByClassName('liked_pets')[0];

    const imageTag = document.createElement('img');

    imageTag.classList.add('rounded-xl');

    imageTag.setAttribute('src',`${image}`)
    imgBinder.append(imageTag);

}


// sort button Functionality

function currentListSort(){
    const allCategory = document.getElementsByClassName('single_cat');

    let active_cat = '';

    for(const cat of allCategory){
        if(cat.classList.contains('rounded-full')){
            active_cat = cat.id;
        }
    }

    let uri = '';

    active_cat.length>0?
    uri = `https://openapi.programming-hero.com/api/peddy/category/${active_cat.split('_')[0]}`:
    uri = 'https://openapi.programming-hero.com/api/peddy/pets';

    active_cat.length>0?
    apiResolver(uri,'singleCatPets',true):
    apiResolver(uri,'petsList',true);

}


// Adopt button functionality

async function adoptBtnFunc(butID = -1){

    if(butID !== -1){
        adopt.push(butID);

        document.getElementById('adopt_process').showModal();

        document.getElementById('counter').innerText = 3;

        let i = 2;
        const counterInt = setInterval(()=>{

            document.getElementById('counter').innerText = i;
            i--;

            if(i == 0 ){
                clearInterval(counterInt);
            }

        },1000);

        setTimeout(()=>{
            document.getElementById('closeAdoptMod').click();
        },3000)
    }

    const allAdoptBtn = document.getElementsByClassName('adopt_btn');

    if(adopt.length > 0){
        for(const htmEle of allAdoptBtn){

            if(adopt.includes(htmEle.getAttribute('id'))){
                htmEle.setAttribute('disabled',true);
                htmEle.classList.add('border-gray-600')
                htmEle.childNodes[1].classList.add('text-gray-600');
                htmEle.children[0].innerHTML = 'Adopted';
            }
            
            // console.log(htmEle.childNodes[1]);
        }
    }
    // console.log(adopt);
}