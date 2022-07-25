window.addEventListener('load',function(){
    let header = this.document.querySelector('.header');
    let headerHeight = document.querySelector('.header').offsetHeight;
    
    window.addEventListener('scroll',function(){
        // console.log([window])
        console.log(window.scrollY);
        if(window.scrollY >= headerHeight){
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');

        }
    })

    let icon = document.querySelector('.icon-cart');
    let cart = document.querySelector('.main-cart');
    let iconClose = document.querySelector('.close')

    icon.addEventListener('click',function(e){
        cart.classList.add('active');
    })
    iconClose.addEventListener('click',function(e){
        cart.classList.remove('active');
    })

})
