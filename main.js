let root = document.getElementById('root')
let btn = document.getElementById('btn')
let input = document.getElementById('input') 

btn.onclick = () => {
    if(input.value.trim()){
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then((response)=>{
          return response.json()
       })
       .then((data)=>{
          data.forEach((element) => {
            if(Number(input.value) == element.id){
                  root.innerHTML =`<h1>name:${element.name}<br> username:${element.username} <br> phone: ${element.phone}</h1> `

            }  
            // if (Number(input.value) > element.id|| Number(input.value) < element.id){
            //        root.innerHTML = `<h1>Введите число в диапозоне от 1 до 10</h1>`
                
            // }
            
           }); 
        }) 
    }
}


input.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
        btn.click();
    }
});

