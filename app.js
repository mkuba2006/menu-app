let foods = food;
let product_container = document.getElementById('container');

const Kraje = document.querySelectorAll('button#nat');
const Typy = document.querySelectorAll('button#type');




const clear = document.getElementById('clear');
var activeElement = document.querySelector('.active');


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
                console.log('Kraj 1 | Typ 1 ');
                console.log('grupy:' + ' ' +groups.length);
                console.log('Kraje:' + ' ' +nations.length);
                const filtrKraj1 = foods2.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods=filtrKraj1;
                render(foods); 
                console.log('foods2',foods2);
                // foods = filtrKraj1 //////
            }
            else{//Kraj 1 | Typ 0
                console.log('Kraj 1 | Typ 0');
                const filtrKraj1 = foods.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                console.log('grupy:' + ' ' +groups.length);
                console.log('Kraje:' + ' ' +nations.length);
                foods = filtrKraj1; //////
                render(foods);  
                // foods = filtrKraj1; //////
            }
        }
        else{
            if(activeButtonCount>0){ //Kraj 0 | Typ 1
                if(foods=[]){
                    console.log(foods);
                    console.log('foods2',foods2);
                    render(foods2);
                } else{
                    console.log('Kraj 0 | Typ 1');
                    // nations =[];
                    console.log('grupy:' + ' ' , groups);
                    console.log('Kraje:' + ' ' +nations.length);
                    console.log('jedzenie z typu',foods);
                    render(foods)
                }



                // console.log('Kraj 0 | Typ 1');
                // nations =[];
                // console.log('grupy:' + ' ' , groups);
                // console.log('Kraje:' + ' ' +nations.length);
                // console.log('jedzenie z typu',foods);
                // render(foods)
            }
            
            else{//Kraj0 | Typ0
                console.log('Kraj 0 | Typ 0');
                nations =[];
                groups =[];
                foods = food;
                console.log('grupy:' + ' ' +groups.length);
                console.log('Kraje:' + ' ' +nations.length);
                render(foods);
                foods = food; ///////
            }
        }
        console.log('wyswietlane danie');console.log(foods);
        console.log('aktywne kraje: ');console.log(kraj.value);
        console.log('aktywne jedzenie: '); console.log(foods);
        console.log('tak:',foods);
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
                console.log('Typ 1 | Kraj 1');
                console.log(nations);
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

                // foods = filtrTyp2;
                console.log('foods2',foods2);
                ///TEST////////////////////////
                console.log('grupy:' + ' ' ,groups);
                console.log('Kraje:' + ' ' ,nations);
                // render(filtrTyp1);  
                foods=filtrTyp1;
                render(foods);  
                foods2=filtrTyp2;
    
                console.log('foods2',foods2);
                // if(foods =[]){
                //     foods = food;
                //     const filtrTyp1 = foods.filter((product)=>{
                //         if(product.group.toLowerCase().includes(value)){
                //             return product;
                //         }
                //     });
                //     render(filtrTyp1);
                // }
            }
            else{//Typ 1 | Kraj 0
                                ///TEST////////////////////////
                                const filtrTyp2 = foods.filter((product)=>{
                                    if(product.group.toLowerCase().includes(value)){
                                        return product;
                                    }
                                });
                                foods2=filtrTyp2;
                                console.log('foods2',foods2);
                                ///TEST////////////////////////
                console.log('Typ 1 | Kraj 0');
                console.log('grupy:' + ' ' +groups.length);
                console.log('Kraje:' + ' ' +nations.length);
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
                    foods = filtrTyp1;
                    // render(filtrTyp1); 
                    render(foods);
                }
                
            }
        }
        else{
            if(activeButtonCount>0){ //Typ 0 | Kraj 1
                console.log('Typ 0 | Kraj 1 ');
                groups =[];
                if(nations.length === 0){

                    // foods = food;
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
                foods = food;
                groups =[];
                //
                nations=[];
                //
                console.log('Kraj0 | Typ0');
                console.log('grupy:' + ' ' +groups.length);
                console.log('Kraje:' + ' ' +nations.length);
                render(foods);
            }
        }
        console.log('jedzenie:' + ' '+ foods.length);
          console.log('tak:',foods);
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