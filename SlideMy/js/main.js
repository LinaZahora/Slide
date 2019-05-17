var images = document.querySelectorAll('img');

var file = document.querySelector('.files')


var btnLeft = document.querySelector('#left');
var btnRight = document.querySelector('#right');
btnLeft.addEventListener('click', leftClick);
btnRight.addEventListener('click', rightClick);


var position = 0;
var height = 315;


function leftClick() {
    
      if (position === 0){ height = 0; }
    
      position = position + height;  
      file.style.marginTop = position + 'px';
      height = 315;
};


function rightClick() {
    
        if (position === -1260){ height = 0; } 

         position = position - height;
         file.style.marginTop = position + 'px';
         height = 315;
}
console.log(position);

