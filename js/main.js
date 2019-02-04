function saat (){
    var vaxt = new Date();
    var saatlar = vaxt.getHours();
    console.log(saatlar);
    if(saatlar >= 9 && saatlar < 18){
        document.getElementById('saat').insertAdjacentHTML('beforeend','<div class="column-6 text-right headerOpen">we are open</div>');
    }else{
        document.getElementById('saat').insertAdjacentHTML('beforeend','<div class="column-6 text-right headerClose">we are close</div>');
    }
};

saat();


