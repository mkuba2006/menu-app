const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    const width = button.offsetWidth;
    const height = button.offsetHeight;
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    const after = document.createElement('div');
    after.classList="af";
    after.style.position = 'absolute';
    after.style.width = width + 'px';
    after.style.height = height +'px';
    after.style.bottom = '-31px';
    after.style.left = '0';
    after.style.backgroundColor = '#201c1c';
    after.style.fontSize = '0.8em';
    after.style.fontSize = '0.8em';
    after.style.transition = '0.3s';
    button.appendChild(after);

    button.addEventListener('mouseenter',()=>{

        if (button.classList.contains('active')) {
            after.style.bottom = '-15px';
            console.log('active');
        }else{
            after.style.bottom = '-15px';
        }
    })
    button.addEventListener('mouseleave',()=>{
        if (button.classList.contains('active')) {
            after.style.bottom = '0px';
            console.log('active');
        }else{
            after.style.bottom = '-31px';
        }
    })
    button.addEventListener('click',()=>{
        if (button.classList.contains('active')) {
            after.style.bottom = '0px';
            console.log('active');
        }else{
            after.style.bottom = '-31px';
        }
    })

});




