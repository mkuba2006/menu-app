let foods = food;
let product_container = document.getElementById('container');

const b = document.querySelectorAll('button#nat');
const a = document.querySelectorAll('button#type');




const clear = document.getElementById('clear');


let nations =[];
let groups =[];


//Gdy grupy










b.forEach(bb =>{
    bb.addEventListener('click',()=>{
        const value = bb.value.toLowerCase();
        bb.classList.toggle('active');


        let activeButtonCount = 0;
        let activeButton;
        
        a.forEach(button => {
          if (button.classList.contains('active')) {
            activeButtonCount++;
            activeButton = button;
          }
        });

            if(activeButtonCount>0){
                console.log('........................');
                console.log('Typy są aktywne');
                if(bb.classList.contains('active')){
                    console.log('Kraje też są aktywne');
                    const filtr = nations.filter((product)=>{
                        if(product.continent.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    /////
                    const filtrNAT = foods.filter((product)=>{
                        if(product.continent.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    /////
                    foods = filtr;
                    nations = filtrNAT;
                    console.log(nations);
                    render(foods);
                }




                else{
                    
                    const dlaA = document.querySelector('.Typ1.active');
                    const aaa = dlaA.value.toLowerCase();
                    console.log('Typy są aktywne a kraje nie');
                    console.log('tu musi sie co dziac');
                    foods=food;
                    console.log('aaa');
                    const filtr = foods.filter((product)=>{
                        if(product.continent.toLowerCase().includes(aaa)){
                            return product;
                        }
                    });
                    foods = filtr;
                    nations = filtr;
                    render(foods);
                }








            }
            else{
                console.log('........................');
                console.log('Typy NIE są aktywne');


                if(bb.classList.contains('active')){
                    console.log('kraje są aktywne');
                    const filtr = foods.filter((product)=>{
                        if(product.continent.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    foods = filtr;
                    nations = filtr;
                    groups =[];
                    render(foods);
                }
                else{
                    console.log('ani typy ani krajw nie są aktywne');
                    groups =[];
                    nations =[];
                    console.log( groups, nations);
                    foods=food;
                    render(foods);
                }
            }
    })
})















//Gdy kraje
a.forEach(aa =>{
    aa.addEventListener('click',()=>{
        console.log(groups);
        const value = aa.value.toLowerCase();
        aa.classList.toggle('active');

        let activeButtonCount = 0;
        let activeButton;
        
        b.forEach(button => {
          if (button.classList.contains('active')) {
            activeButtonCount++;
            activeButton = button;
          }
        });
            if(activeButtonCount>0){
                console.log('........................');
                console.log('Kraje są aktywne');
                if(aa.classList.contains('active')){
                    console.log('typy też są aktywne');
                    const filtr = nations.filter((product)=>{
                        if(product.group.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    foods = filtr;
                    groups = filtr;
                    render(foods);
                }
                else{
                    console.log('Kraje są aktywne a TYPY nie');
                    console.log('tu musi sie co dziac');
                    foods=food;
                    const filtr = foods.filter((product)=>{
                        if(product.group.toLowerCase().includes(aaa)){
                            return product;
                        }
                    });
                    foods = filtr;
                    groups = filtr;
                    console.log(filtr);
                    render(foods);
                }
            }else{
                console.log('........................');
                console.log('Kraje NIE są aktywne');
                if(aa.classList.contains('active')){
                    console.log('typy są aktywne');
                    const filtr = foods.filter((product)=>{
                        if(product.group.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    nations=[]
                    foods = filtr;
                    groups = filtr;
                    render(foods);
                }
                else{
                    console.log('ani kraje ani tpy nie są aktywne');
                    groups =[];
                    nations =[];
                    console.log( groups, nations);
                    foods=food;
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