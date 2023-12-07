const robots = document.querySelector('.robotlar')
fetch('http://localhost:3000/robots')
.then(response=>response.json())
.then(data=>{
    data.forEach(robotlar => {
        robots.innerHTML+=`      
        <div class="robot">
        <div class="sekil">
            <img class="hhh" src="${robotlar.image}" alt="">
        </div>
        <div class="detals">
           <div class="text1"><h2>${robotlar.name}</h2></div> 
           <div class="text2"><p class="ggg">
            ${robotlar.category}
            </p></div> 
        </div>
            <a href="./details.html?id=${robotlar.id}" class="red">View Details</a>
    </div>
        `

        
    });
})