let foods = food;
let product_container = document.getElementById('container');

const b = document.querySelectorAll('button#nat');
const a = document.querySelectorAll('button#type');
const clear = document.getElementById('clear');

b.forEach(button =>{
    button.addEventListener('click',()=>{
        const value = button.value.toLowerCase();
        button.classList.toggle('active');
        if(button.classList.contains('active')){
            const fitem = foods.filter((product)=>{
                if(product.continent.toLowerCase().includes(value)){
                    return product;
                }
            });
            foods = fitem;
            console.log(foods);
            render(foods);
        }else{
            foods = food;
            console.log(foods);
            render(foods)
        }
    })
})

clear.addEventListener('click',()=>{
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






a.forEach(grp =>{
    grp.addEventListener('click',()=>{
        const value = grp.value.toLowerCase();
        grp.classList.toggle('active');
        if(grp.classList.contains('active')){
            const fgroup = foods.filter((product)=>{
                if(product.group.toLowerCase().includes(value)){
                    return product;
                }
            });
            foods = fgroup;
            console.log(foods);
            render(foods);
        }else{
            foods = food;
            console.log(foods);
            render(foods)
        }
    })
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