document.querySelector('#randomBtn').addEventListener('click', getFetch)
document.querySelector('healthyRdm').addEventListener('click', gethealthy)

// function getFetch(){
    
//     const url = 'https://api.spoonacular.com/recipes/random?limitLicense=true&number=2&apiKey=8bab429b57294503b90c8cd5abd6f915'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//              data['recipes'].forEach(obj=> 
//                     {
//                         const li = document.createElement('li')
//                         const img = document.createElement('img')
//                         const h2 = document.createElement('h2')
//                         img.src= obj.image
//                         h2.innerText = obj.title
//                         li.appendChild(img)
//                         li.appendChild(h2)
//                         document.querySelector('#recipeCards').appendChild(li) 
//                         obj.extendedIngredients.forEach(food =>{
//                             const para = document.createElement('p')
//                             para.innerText = food.name
//                             li.appendChild(para)
//                             document.querySelector('#ingred').appendChild(li) 
    
//                         })
//                     }
//                                  )})
            
//         .catch(err =>{
//             console.log(`error ${err}`)
//         });


// }

function gethealthy(){
    
    const url = 'https://api.spoonacular.com/recipes/findByNutrients?maxCarbs=20&apiKey=8bab429b57294503b90c8cd5abd6f915'
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //  data['recipes'].forEach(obj=> 
            //         {
            //             const li = document.createElement('li')
            //             const img = document.createElement('img')
            //             const h2 = document.createElement('h2')
            //             img.src= obj.image
            //             h2.innerText = obj.title
            //             li.appendChild(img)
            //             li.appendChild(h2)
            //             document.querySelector('#recipeCards').appendChild(li) 
            //             obj.extendedIngredients.forEach(food =>{
            //                 const para = document.createElement('p')
            //                 para.innerText = food.name
            //                 li.appendChild(para)
            //                 document.querySelector('#ingred').appendChild(li) 
    
            //             })
            //         }
                                 })
            
        .catch(err =>{
            console.log(`error ${err}`)
        });