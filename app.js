let foods = food;
let product_container = document.getElementById('container');
let fo2= foods;

const clear = document.getElementById('clear');
const itext = document.getElementById('text');

const Kraje = document.querySelector('#natSelect');
const Typy = document.querySelector('#typeSelect');


let nations =[];
let groups =[];
let mix = food;
let natS= false;
let typS= false;

    Kraje.addEventListener('change',()=>{
        const selectedOption = Kraje.options[Kraje.selectedIndex];
        const value = selectedOption.value.toLowerCase();
        console.clear();
        console.log('początek');
        console.log('kraj:', natS, 'typ:', typS);

        if(typS == true && natS == false){
            console.log('11');
            const filtrKraj = groups.filter((product)=>{
                if(product.continent.toLowerCase().includes(value)){
                    return product;
                }
            });
            nations = filtrKraj;
            mix = nations;
            render(mix);
            
        }
        
        else if(typS == true && natS == true){
            typS = false;
            console.log('12');
            Typy.selectedIndex = 0;
            const filtrKraj = foods.filter((product)=>{
                if(product.continent.toLowerCase().includes(value)){
                    return product;
                }
            });
            nations = filtrKraj;
            mix = nations;
            render(mix);
        }
        
        else{
            console.log('13');
            const filtrKraj = foods.filter((product)=>{
                if(product.continent.toLowerCase().includes(value)){
                    return product;
                }
            });
            nations = filtrKraj;
            mix = nations;
            render(mix);
            
        }
        if(natSelect.selectedIndex === 0){
            console.log(typeSelect.selectedIndex);
            natS = false;
        }else{
            natS = true;
        }
        console.log('-----------');
        console.log('end');
        console.log('kraj:', natS, 'typ:', typS);
        console.log('-----------');
    })




    Typy.addEventListener('change',()=>{
        const selectedOption = Typy.options[Typy.selectedIndex];
        const value = selectedOption.value.toLowerCase();

        console.clear();
        console.log('początek');
        console.log('kraj:', natS, 'typ:', typS);




        if(natS == true && typS == false){
    
            console.log('21');
            const filtrTyp = nations.filter((product)=>{
                if(product.group.toLowerCase().includes(value)){
                    return product;
                }
            });
            groups = filtrTyp; 
            mix = groups;
            render(mix);
        }

        else if(typS == true && natS == true){
            natS = false;
            console.log('22');
            Kraje.selectedIndex = 0;
            const filtrTyp = foods.filter((product)=>{
                if(product.group.toLowerCase().includes(value)){
                    return product;
                }
            });
            groups = filtrTyp; 
            mix = groups;
            render(mix);
        }

        else{
            console.log('23');
            const filtrTyp = foods.filter((product)=>{
                if(product.group.toLowerCase().includes(value)){
                    return product;
                }
            });
            groups = filtrTyp; 
            mix = groups;
            render(mix);
        }

        if(typeSelect.selectedIndex === 0){
            console.log(typeSelect.selectedIndex);
            typS = false;
        }else{
            typS = true;
        }

        console.log('-----------');
        console.log('end');
        console.log('kraj:', natS, 'typ:', typS);
        console.log('-----------');
    })








let prev_val = '';
itext.addEventListener('input', () => {
    let ival = itext.value;
    let i= ival.length;
    let p= prev_val.length;
    console.log('bes:',ival);
    console.log('prev:',prev_val);
    if(i>p){
        console.log('1');
        const fff = mix.filter(product => product.name.toLowerCase().includes(ival));
        render(fff);
        prev_val = ival;
    }else{
        console.log('2');
        const fff = mix.filter(product => product.name.toLowerCase().includes(prev_val));
        render(fff);
        prev_val = ival;
    }

    if (ival === '' && prev_val ==='') {
        typeSelect.selectedIndex = 0;
        natSelect.selectedIndex = 0;
        render(foods);
    }else{
        const fff = mix.filter(product => product.name.toLowerCase().includes(prev_val));
        render(fff);
    }
});










const buttons = document.querySelectorAll('#nat, #type');

function handleButtonMouseEnter() {
    const after = this.querySelector('#af1');
    after.style.width = '100%';
}

function handleButtonMouseLeave() {
    const after = this.querySelector('#af1');
    after.style.width = this.classList.contains('active') ? '100%' : '0%';
}


function handleButtonClick() {
    const after = this.querySelector('#af1');
    after.style.width = this.classList.contains('active') ? '100%' : '0%';
}


buttons.forEach(button => {
    const after = document.createElement('div');
    after.id = 'af1';
    after.style.opacity = '1';
    after.style.position = 'absolute';
    after.style.display = 'block';
    after.style.width = '0%';
    after.style.height = '1px';
    after.style.bottom = '0';
    after.style.borderRadius = '50px';
    after.style.left = '50%';
    after.style.transform = 'translateX(-50%)';
    after.style.backgroundColor = "black";
    after.style.content = '""';
    after.style.transition = '0.5s';
    button.appendChild(after);
});

buttons.forEach(button => {
    button.addEventListener('mouseenter', handleButtonMouseEnter);
    button.addEventListener('mouseleave', handleButtonMouseLeave);
    button.addEventListener('click', handleButtonClick);
});



let continentElements = document.querySelectorAll("#continent");

continentElements.forEach((continentElement) => {
    let continentText = continentElement.textContent;
    if (continentText.length > 7) {
        continentElement.textContent = continentText.substring(0, 8) + "...";
    }
});





clear.addEventListener('click', () => {
    typeSelect.selectedIndex = 0;
    natSelect.selectedIndex = 0;
    render(foods);
});








const render = (product) =>{
    product_container.innerHTML='';
    for(let i = 0; i < product.length; i++){
        const new_prod = document.createElement('div');
        new_prod.className= `cards_item`;
        new_prod.innerHTML =`
        <div class="card">
        <div class="card_content">
            <h2 class="card_title">${product[i].name}</h2>
            <div class="card_text">
                <p id='continent'>${product[i].continent}</p>
                <p id='country'>${product[i].country}</p>
                <p id='group'>${product[i].group}</p>
            </div>
          </div>
          <div class="card_image">
            <img src="${product[i].img}" alt="a Reuben sandwich on wax paper." />
          </div>
        </div>
      </div>
        `;
        product_container.appendChild(new_prod);
    }
}
document.onload = render(foods);
