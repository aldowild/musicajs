var context= new AudioContext();
 
function NotaMusical(frecuencia, profundidad =1.5){
        var o= context.createOscillator();
        var g=context.createGain();
        o.connect(g);
        o.type="triangle";
        o.frequency.value=frecuencia;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +profundidad);
    }

function OcarinaDelTiempo(){
        //La, Re, Fa, La, Re, Fa, La, Do', Si, Sol, Fa, Sol, La, Re, Do, Mi, Re
        btnDo = function(vprofundidad=1.5){
            NotaMusical(174.614,vprofundidad);
        }
        btnRe = function(vprofundidad=1.5){
            NotaMusical(195.998,vprofundidad);
        }
        btnMi = function(vprofundidad=1.5){
            NotaMusical(220.000,vprofundidad);
        }
        btnFa = function(vprofundidad=1.5){
            NotaMusical(246.942,vprofundidad);
        }
        btnSol = function(vprofundidad=1.5){
            NotaMusical(261.626,vprofundidad);
        }
        btnLa = function(vprofundidad=1.5){
            NotaMusical(293.665,vprofundidad);
        }
        btnSi = function(vprofundidad=1.5){
            NotaMusical(329.628,vprofundidad);
        }
        

        setTimeout(function(){
            btnLa(3);
        } ,1800 );
        setTimeout(function(){
            btnRe(4);
        } ,2600 );
        setTimeout(function(){
            btnFa(3);
        } ,3500 );
        setTimeout(function(){
            btnLa(4);
        } ,4000 );
        setTimeout(function(){
            btnRe(3);
        } ,4500 );
        setTimeout(function(){
            btnFa(2);
        } ,5000 );
        setTimeout(function(){
            btnLa(2);
        } ,5500 );
        setTimeout(function(){
            btnSi(2);
        } ,6000 );
        setTimeout(function(){
            btnSol(4);
        } ,6500 );
        setTimeout(function(){
            btnFa(3);
        } ,7000 );
        setTimeout(function(){
            btnSol(1);
        } ,7500 );
        setTimeout(function(){
            btnLa(2);
        } ,8000 );
        setTimeout(function(){
            btnRe(1);
        } ,8500 );
        setTimeout(function(){
            btnDo(1);
        } ,9000 );
        setTimeout(function(){
            btnMi(1);
        } ,9500 );
        setTimeout(function(){
            btnRe(1);
        } ,10000 );

    }
