let foods = food;
let product_container = document.getElementById('container');

const Kraje = document.querySelectorAll('button#nat');
const Typy = document.querySelectorAll('button#type');




const clear = document.getElementById('clear');


let nations =[];
let groups =[];




//klik kraj
Kraje.forEach(kraj =>{
    const value = kraj.value.toLowerCase();
    const filtrKraj = foods.filter((product)=>{
        if(product.continent.toLowerCase().includes(value)){
            return product;
        }
    });
    nations = filtrKraj 





    kraj.addEventListener('click',()=>{
        let activeButtonCount = 0;
        let activeButton;
        
        Typy.forEach(button => {
          if (button.classList.contains('active')) {
            activeButtonCount++;
            activeButton = button;
          }
        });
    
        kraj.classList.toggle('active');
        if(kraj.classList.contains('active')){
            if(activeButtonCount>0){ //Kraj 1 | Typ 1
                console.log('Kraj 1 | Typ 1 ');
                console.log(groups);



            }else{//Kraj 1 | Typ 0
                console.log('Kraj 1 | Typ 0');
                const filtrKraj1 = foods.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                render(filtrKraj1);  
            }
        }else{
            if(activeButtonCount>0){ //Kraj 0 | Typ 1
                console.log('Kraj 0 | Typ 1');
                // const filtrKraj = foods.filter((product)=>{
                //     if(product.continent.toLowerCase().includes(value)){
                //         return product;
                //     }
                // });
                // render(filtrKraj);  

                console.log('Kraj 0 | Typ 1 ');
            }
            
            
            
            
            
            
            else{//Kraj0 | Typ0
                console.log('Kraj0 | Typ0');
                nations =[];
                groups =[];
                foods = food;
                render(foods);
            }
        }
    })
})













//klik Typ
Typy.forEach(typ =>{
    const value = typ.value.toLowerCase();

    typ.addEventListener('click',()=>{
///// grupowanie typow
        const filtrTyp = foods.filter((product)=>{
            if(product.group.toLowerCase().includes(value)){
                return product;
            }
        });
        groups = filtrTyp 
//////

        let activeButtonCount = 0;
        let activeButton;
        
        Typy.forEach(button => {
          if (button.classList.contains('active')) {
            activeButtonCount++;
            activeButton = button;
          }
        });
        typ.classList.toggle('active');

        if(typ.classList.contains('active')){
            if(activeButtonCount>0){ //Typ 1 | Kraj 1
                console.log('Typ 1 | Kraj 1 ');
            }
            
            
            else{//Typ 1 | Kraj 0
                console.log('Typ 1 | Kraj 0');
                const filtrTyp1 = foods.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                render(filtrTyp1);  
            }
        }
        
        else{
            if(activeButtonCount>0){ //Typ 0 | Kraj 1
                console.log('Typ 0 | Kraj 1 ');
            }
            
            
            else{//Kraj0 | Typ0
                console.log('Kraj0 | Typ0');
                nations =[];
                groups =[];
                foods = food;
                render(foods);
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