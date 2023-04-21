const buttons = document.querySelectorAll('button');


// buttons.forEach(button => {
//   const width = button.offsetWidth;
//   const height = button.offsetHeight;
//   button.style.position = 'relative';
//   const after = document.createElement('div');
//   after.style.position = 'absolute';
//   after.style.width = width + 'px';
//   after.style.height = height + 'px';
//   after.style.backgroundColor = 'blue';
//   after.style.fontSize = '0.8em';
//   button.appendChild(after);
// });




buttons.forEach(button => {
    const width = button.offsetWidth;
    const height = button.offsetHeight;
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    const after = document.createElement('div');
    after.style.position = 'absolute';
    after.style.width = width + 'px';
    after.style.height = height +'px';
    after.style.bottom = '-31px';
    after.style.left = '0';
    after.style.backgroundColor = '#75152556';
    after.style.fontSize = '0.8em';
    after.style.fontSize = '0.8em';
    after.style.transition = '0.5s';
    button.appendChild(after);

    button.addEventListener('mouseenter',()=>{
        if (button.classList.contains('active')) {
            after.style.bottom = '0px';
            console.log('active');
        }else{
            after.style.bottom = '-15px';
        }
    })
    button.addEventListener('mouseleave',()=>{
        if (button.classList.contains('active')) {
            after.style.bottom = '-15px';
            console.log('active');
        }else{
            after.style.bottom = '-31px';
        }
    })
    button.addEventListener('click',()=>{
        after.style.bottom = '0px';
    })

});