let foods = food;
let product_container = document.getElementById('container');

const Kraje = document.querySelectorAll('button#nat');
const Typy = document.querySelectorAll('button#type');
const clear = document.getElementById('clear');
const inp_text = document.getElementById('text');

let nations =[];
let groups =[];
let foods2=[];

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
                const filtrKraj1 = foods2.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                render(filtrKraj1); 
                foods = filtrKraj1;
            }
            else{//Kraj 1 | Typ 0
                const filtrKraj1 = foods.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                render(filtrKraj1);  
                foods = filtrKraj1;
            }
        }
        else{
            if(activeButtonCount>0){ //Kraj 0 | Typ 1
                if(foods=[]){
                    render(foods2);
                } else{
                    render(foods)
                }
            }
            
            else{//Kraj0 | Typ0
                console.log('Kraj 0 | Typ 0');
                nations =[];
                groups =[];
                foods = food;
                render(foods);
                foods = food;
            }
        }
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
        Kraje.forEach(button => {
          if (button.classList.contains('active')) {
            activeButtonCount++;
          }
        });
        console.log('Czy Kraje klikniete:', activeButtonCount);
        typ.classList.toggle('active');

        



        if(typ.classList.contains('active')){
            if(activeButtonCount>0){ //Typ 1 | Kraj 1
                const filtrTyp1 = nations.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods=food;
                ///TEST////////////////////////
                const filtrTyp2 = foods.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });

                render(filtrTyp1);  
                foods2=filtrTyp2;
            }
            else{//Typ 1 | Kraj 0
                                const filtrTyp2 = foods.filter((product)=>{
                                    if(product.group.toLowerCase().includes(value)){
                                        return product;
                                    }
                                });
                                foods2=filtrTyp2;
                const filtrTyp1 = nations.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                    
                });
                render(filtrTyp1); 
                foods = filtrTyp1;
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
                groups =[];
                if(nations.length === 0){

                    // foods = food;
                    render(foods);
                } 

                else{
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
                            return product;
                        }
                    });
                    foods = filtrTyp1;
                    render(foods);
                }
            }          
            else{//Kraj0 | Typ0
                foods = food;
                groups =[];
                nations=[];
                render(foods);
            }
        }
        console.log('jedzenie:' + ' '+ foods.length);
    })
})





clear.addEventListener('click',()=>{
    nations =[];
    groups =[];
    nations =[];
    foods2 =[];
    Kraje.forEach(button=>{
        if(button.classList.contains('active')){
            button.classList.remove('active');
        }
        foods = food;
    })
    Typy.forEach(button=>{
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