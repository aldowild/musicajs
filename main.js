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
        
        p=new Promise(function(resolve,reject){
            resolve();
        });

        p.then(()=>{
            return new Promise(function(resolve,reject){
            setTimeout(function(){
                btnLa(3);
                resolve();
            } ,1800 )
        })
        }
        ).then(()=>{
            return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnRe(4);
            resolve();
        } ,800 )
    })
    }
        ).then(()=>{
            return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnFa(3);
            resolve();
        } ,900 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnLa(4);
            resolve();
        } ,500 )    
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnRe(3);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnFa(2);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnLa(2);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnSi(2);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnSol(4);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnFa(3);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnSol(1);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnLa(2);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnRe(1);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnDo(1);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnMi(1);
            resolve();
        } ,500 )
    })}
    ).then(()=>{
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            btnRe(1);
            resolve();
        } ,500 )
    })}
    )

    }
