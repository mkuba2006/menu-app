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



    kraj.addEventListener('click',()=>{
        const filtrKraj = foods.filter((product)=>{
            if(product.continent.toLowerCase().includes(value)){
                return product;
            }
        });
        nations = filtrKraj 
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
                console.log(nations);
                const filtrKraj1 = groups.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                render(filtrKraj1); 
                foods = filtrKraj1 //////
            }
            else{//Kraj 1 | Typ 0
                console.log('Kraj 1 | Typ 0');
                const filtrKraj1 = foods.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                console.log(groups);
                console.log(nations);
                render(filtrKraj1);  
                foods = filtrKraj1 //////
            }
        }
        else{
            if(activeButtonCount>0){ //Kraj 0 | Typ 1
                console.log('Kraj 0 | Typ 1');
                nations =[];
                console.log(groups);
                console.log(nations);
                render(groups)
                foods = groups; ///////
            }
            
            else{//Kraj0 | Typ0
                console.log('Kraj0 | Typ0');
                nations =[];
                groups =[];
                foods = food;
                console.log(groups);
                console.log(nations);
                render(foods);
                foods = food; ///////
            }
        }
        console.log('wyswietlane danie');
        console.log(foods);
    })
})













//klik Typ
Typy.forEach(typ =>{
    const value = typ.value.toLowerCase();




    typ.addEventListener('click',()=>{
        const filtrTyp = foods.filter((product)=>{
            if(product.group.toLowerCase().includes(value)){
                return product;
            }
        });
        groups = filtrTyp 
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
                console.log('Typ 1 | Kraj 1');
                const filtrTyp1 = foods.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                console.log(groups);
                console.log(nations);
                render(filtrTyp1);  
                foods = filtrTyp1; //////
                if(foods =[]){
                    foods = food;
                    const filtrTyp1 = foods.filter((product)=>{
                        if(product.group.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    render(filtrTyp1);
                }
            }
            else{//Typ 1 | Kraj 0
                console.log('Typ 1 | Kraj 0');
                console.log(groups);
                console.log(nations);
                const filtrTyp1 = nations.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                render(filtrTyp1); 
                foods = filtrTyp1; //////
                if(foods.length ===0){
                    foods = food;
                    const filtrTyp1 = foods.filter((product)=>{
                        if(product.group.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    render(filtrTyp1);
                }
            }
        }
        else{
            if(activeButtonCount>0){ //Typ 0 | Kraj 1
                console.log('Typ 0 | Kraj 1 ');
                groups =[];
                if(nations.length === 0){

                    foods = food;
                    console.log('= 0');
                    render(foods);
                } 

                else{ //////////////////////////////////////////////////////////////////////////////////////
                    let activeButtonCount = 0;
                    let activeButton;
                    Kraje.forEach(button => {
                      if (button.classList.contains('active')) {
                        activeButton = button.value.toLowerCase();
                        console.log( button.value.toLowerCase());
                      }
                    });
                    foods = nations;
                    const filtrTyp1 = foods.filter((product)=>{
                        if(product.continent.toLowerCase().includes(activeButton)){
                            console.log(product);
                            return product;
                        }
                    });
                    foods = filtrTyp1;
                    render(foods);
                    console.log('= 0nieee 0');
                    console.log(activeButton);
                }
            }          
            else{//Kraj0 | Typ0
                console.log('Kraj0 | Typ0');
                nations =[];
                groups =[];
                console.log(groups);
                console.log(nations);
                foods = food;
                render(foods);
                    if(foods =[]){
                    foods = food;
                    render(foods);
                }
            }
        }
        console.log('wyswietlane danie');
        console.log(foods);
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