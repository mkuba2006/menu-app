let foods = food;
let product_container = document.getElementById('container');

const b = document.querySelectorAll('button#nat');
const a = document.querySelectorAll('button#type');
const clear = document.getElementById('clear');


let nations =[];
let groups =[];



//Gdy grupy
b.forEach(button =>{
    button.addEventListener('click',()=>{
        console.log('DO GRUP');
        const value = button.value.toLowerCase();
        button.classList.toggle('active');



        if(groups.length===0){
            if(button.classList.contains('active')){
                const fitem = foods.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods = fitem;
                nations = fitem;
                console.log(nations);
                render(foods);
            }else{
                foods = food;
                nations = [];
                console.log(nations);
                console.log(groups);
                render(foods)
            }
        } 
        else{
            if(button.classList.contains('active')){
                const fitem = groups.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods = fitem;
                console.log(nations);
                console.log(groups);
                nations = fitem;
                render(foods);
            }
            //BLAD
            else{
                const fitem = groups.filter((product)=>{
                    if(product.continent.toLowerCase().includes('')){
                        return product;
                    }
                });
                foods = fitem;

                console.log(nations);
                console.log(groups);
                render(foods)
            }
        }

    })
})










//Gdy kraje
a.forEach(grp =>{
    grp.addEventListener('click',()=>{
        console.log('DO KRAJI');
        const value = grp.value.toLowerCase();
        grp.classList.toggle('active');




        
        if(nations.length===0){
            if(grp.classList.contains('active')){
                const fgroup = foods.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods = fgroup;
                console.log(nations);
                groups = fgroup;
                render(foods);
            }else{
                foods = food;
                console.log(nations);
                groups = [];
                render(foods)
            }
        }
        
        
        else{                                                    //////jezeli kraje nie są 0
            if(grp.classList.contains('active')){
                const fgroup = nations.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods = fgroup;
                groups = fgroup;
                console.log(nations);
                render(foods);
            }else{
                const fgroup = nations.filter((product)=>{
                    if(product.group.toLowerCase().includes('')){
                        return product;
                    }
                });
                foods = fgroup;
                console.log(nations);
                groups = [];
                render(foods)
            }
        }




    })
})




clear.addEventListener('click',()=>{
    nations =[];
    groups =[];

    b.forEach(button=>{
        if(button.classList.contains('active')){
            button.classList.remove('active');
        }
        foods = food;
    })
    a.forEach(button=>{
        if(button.classList.contains('active')){
            button.classList.remove('active');
        }
        foods = food;
    })
    foods = food;
    render(foods)
})















const render = (product) =>{
    product_container.innerHTML='';
    for(let i = 0; i < product.length; i++){
        const new_prod = document.createElement('div');
        new_prod.className= `product`;
        new_prod.innerHTML =`
        <div id="img_back"">
            <img src="${product[i].img}"/>
        </div>
        <div id="content">
            <div id="opis">
                <h1 id='name'>${product[i].name}</h1>
                <div id='continent'>${product[i].continent}</div>
                <div id='country'>${product[i].country}</div>
                <div id='group'>${product[i].group}</div>
            </div>
        </div>
        `;
        product_container.appendChild(new_prod);
    }
}

document.onload = render(foods);