let allBtn = document.querySelectorAll('.color-btn');
let box = document.querySelector('.box')

allBtn.forEach(function (btn){
    btn.addEventListener('click', function(){
        allBtn.forEach(function(b){
             b.classList.remove('selected')
        })
       btn.classList.add('selected')
       box.classList.remove('red', 'green', 'blue')
       box.classList.add(btn.dataset.color)
    })
})