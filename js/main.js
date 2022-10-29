// document.querySelector('#randomBtn').addEventListener('click', getFetch)
document.querySelector('#healthyRdm').addEventListener('click', gethealthy)


//constants



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
    
    const url = 'https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=20&number=5&random=true&limitLicense=true&apiKey=8bab429b57294503b90c8cd5abd6f915'
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for( let n in data){
                const li = document.createElement('li')
                const img = document.createElement('img')
                const h2 = document.createElement('h2')
                const para = document.createElement('p')
                const para2 = document.createElement('p')
                h2.innerText = data[n]['title']
                img.src = data[n]['image']
                para.innerText = data[n]['carbs']
                para2.innerText = data[n]['calories']
                li.appendChild(img)
                li.appendChild(h2)
                li.appendChild(para)
                li.appendChild(para2)
                document.querySelector('#recipeCards').appendChild(li) 
        }
          
        })
            
        .catch(err =>{
            console.log(`error ${err}`)
        })
    }