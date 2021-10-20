function allLongestStrings(inputArray) 
{   
    var maxSize = 0;
    salida = []
    for (i=0; i< inputArray.length; i++)
    {
        if (maxSize<inputArray[i].length)
        {
            salida = [];
            salida.push(inputArray[i]);
            maxSize = inputArray[i].length;
        }
        else if (maxSize==inputArray[i].length)
        {
            salida.push(inputArray[i]);
        }
        else
        {
            continue;
        }
        
    }
    return salida
}

function commonCharacterCount(s1, s2) {
    function cuentaCar(s)
    {
        cuentaCad = {}
        for (let i=0;i<s.length;i++)
        {
            if(cuentaCad[s[i]] == undefined)
                cuentaCad[s[i]] = 1
            else
                cuentaCad[s[i]] += 1

            
        }
        return cuentaCad
    }
    obj1 = cuentaCar(s1)
    obj2 = cuentaCar(s2)
    cuenta = 0
    for(c in obj1)
    {
        if(obj2[c] == undefined)
            continue;
        else
            cuenta += Math.min(obj1[c],obj2[c]);
    }


    return cuenta
}

function isLucky(n) {
    var ns = n.toString();
    var cuenta1 = 0;
    //, cuenta2 = 0
    for (let i = 0; i<ns.length;i++)
        if(i<ns.length/2) 
            cuenta1 += parseInt(ns[i]);
        else
            cuenta1 -= parseInt(ns[i]);
    return cuenta1==0
}

function sortByHeight(a) {
    var salida = [];
    var filtrada = a.filter(function(val)
                {
                    return val>0
                });

    //console.log(filtrada)
    filtrada.sort(function(a1, b) { return a1-b });
    var indexfiltrada = 0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i] != -1)
        {
            salida.push(filtrada[indexfiltrada]);
            indexfiltrada ++;
        }
        else
            salida.push(-1);
    }
     
    
    return salida
}

function reverseInParentheses2(inputString) {
    rex = /(\(\w+\))/g;
    //var prueba = rex.exec(inputString);
    var prueba;
    do{
        prueba = rex.exec(inputString);
        //var pruebas = inputString.matchAll(rex);
        //for (prueba in pruebas)
        if (prueba)
            console.log(prueba[1])
    }while (prueba);

    //console.log(prueba.groups)
    return inputString
}

function reverseInParentheses3(inputString) {
    rex = /(\([\w()]+\))/g;
    rex2 = /(\([\w]+\))/g;

    //var prueba = rex.exec(inputString);
    var salida = inputString.match(rex2);
    //console.log(salida);
    

    //console.log(prueba.groups)
    return salida
}

function reverseInParentheses4(inputString) {
    rex = /(\([\w()]+\))/g;
    rex2 = /(\([\w]+\))/g;
    var salida = inputString.match(rex2);
    
    return salida
}



function reverseInParentheses2(inputString){
    var rexPar = /\([\w()]+\)/g;
    var rexSinPar = /\([\w()]+\)/g;
    
    var conParentesis = rexPar.exec(inputString);
    antesDespues = inputString.split(conParentesis);
    dentroParentesis = conParentesis[0].slice(1,-1);
    conMasPar = dentroParentesis.match(rexPar)
    
    if (conMasPar == null)
        salida =antesDespues[0]+ stringInvertido(dentroParentesis)+antesDespues[1];
    
    
    return salida

}

function reverseInParentheses(inputString){
    var rexPar = /\(\w*\)/g;
    var result = inputString.match(rexPar);
    if (result != null)
    {
        for (data of result)
        {
            inputString = inputString.replace(data,stringInvertido(data));
        }
        inputString = reverseInParentheses(inputString);
    }
    
    return inputString
}

function stringInvertido(texto) {
    texto2 = texto.slice(1,texto.length-1);
    return texto2.split('').reverse().join('');
}


function alternatingSums(a) {
    t1 = 0;
    t2 = 0;
    i = 1;
    for (peso of a)
    {
        if(i%2!=0)
            t1 += peso 
        else
            t2 += peso 
        i++;
    }
    return [t1,t2]
}

function addBorder(picture) {
    
    long = 0;
    salida =['*']; 
    for (element of picture)
    {   
        if(element.length>long)
            long = element.length;
        salida.push('*'+element+'*');
    }
    //console.log('*'.padStart(long+2,'*'));
    boder = '*'.padStart(long+2,'*')
    salida.push(boder);
    salida[0] = boder;
    return salida

}

function areSimilar2(a, b) {
    var salida = false;
    var b2 = b;
    var index = 0;
    console.log('b',b);
    for (val of b)
    {   
        
        for (let j = index; j<b.length; j++)
        {
            salida = JSON.stringify(a) == JSON.stringify(b2);
            if (salida)
                break;
            //console.log(j);
            var b2 = Array.from(b);
            b2.splice(index,1,b[j+1]); //reemplaza 
            b2.splice(j+1,1,val);
            console.log('val',val);
            console.log('b2',b2);
        }
        index +=1;
        /*
        console.log(b)∫

        salida = JSON.stringify(a) == JSON.stringify(b);
        if (salida)
            break    
        */
    }
    
    return salida

}

function areSimilar(a, b) {
    var cuentaDif = 0;
    var sumA = 0;
    var sumB = 0;
    var mismosDatos = true;

    for (let i=0; i<a.length;i++)
    {
        if(a[i]!=b[i])
        {
            cuentaDif += 1;
            if(!a.includes(b[i]))
            {   
                mismosDatos = false;
                break;
            }
        }
        sumA += a[i];
        sumB += b[i];
        

    }
    return (sumA==sumB && cuentaDif<=2&&mismosDatos)

}


function arrayChange(inputArray) {
    var moves = 0;
    for (let i = 1; i<=inputArray.length; i++)
    {
        if(inputArray[i-1]>=inputArray[i])
            {
                moves += inputArray[i-1] - inputArray[i] +1;
                inputArray[i] = inputArray[i-1] +1;
            }
            

    }
    return moves
}

function palindromeRearranging2(inputString) {
    var letras = {};
    salida = true;
    var masUnNon = false;
    for (value of inputString)
    {   
        if(letras[value] == undefined)
            letras[value] = 1;
        else
            letras[value] += 1;      
    }
    if (Object.keys(letras).length%2 == 0)
    {
        for(letra of Object.keys(letras))
        {
            if(letras[letra]%2!=0)
            {
                salida = false;
                break
            }

        }
    }
    else
    {
        for(letra of Object.keys(letras))
        {
            if(letras[letra]%2!=0)
            {
                if(masUnNon)
                {
                    salida = false;
                    break
                }
                else
                    masUnNon = true;
            }
        }
    }
    
    return salida
}

function palindromeRearranging(inputString) {
    var letras = {};
    salida = true;
    var masUnNon = false;
    for (value of inputString)
    {   
        if(letras[value] == undefined)
            letras[value] = 1;
        else
            letras[value] += 1;      
    }
   

        for(letra of Object.keys(letras))
        {
            if(letras[letra]%2!=0)
            {
                if(masUnNon)
                {
                    salida = false;
                    break
                }
                else
                    masUnNon = true;
            }
        }
    
    
    return salida
}

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    
    return (yourLeft+yourRight == friendsLeft+friendsRight && (Math.max(yourLeft, yourRight) == Math.max(friendsLeft, friendsRight)))
}

function arrayMaximalAdjacentDifference(inputArray) {
    var maxDiff = 0;
    for (let i = 1; i<=inputArray.length; i++)
    {
        if(Math.abs(inputArray[i]-inputArray[i-1]) > maxDiff)
            maxDiff = Math.abs(inputArray[i]-inputArray[i-1]);
    }
    
    return maxDiff
}


function isIPv4Address(inputString) {
    var valIp = inputString.split('.');
    var rexLeadZero = /^0+\d+$/;
    var rexStr = /[A-Za-z]+/;
    if (valIp.length == 4 && !rexStr.test(inputString)) 
    {
        for(val of valIp)
        {
            let dato =parseInt(val,10);
            if(dato <0 || dato > 255 || isNaN(dato) || rexLeadZero.test(val))
                return false
        }
        return true
    }
    else
        return false
    
}

function avoidObstacles(inputArray) {
    var  max = Math.max.apply(null, inputArray)+1;
    var salida = max;
    for (var i = 2; i<=max;i++)
    {
        compara = inputArray.map(function(x)
        {
            if (x%i==0)
                return 1
            else
                return 0
        }).reduce((a, b) => a + b, 0)
        if (compara == 0)
        {
            salida = i;
            break
        }
    }
    return salida
}



//#region Ejemplos
/*
inputArray = ["aba","aa","ad","vcd","aba"];

console.log(allLongestStrings(inputArray));



s1= "aabcc"
s2= "adcaa"

//s1= "abca"
//s2= "xyzbac"
s1= "a"
s2= "aaa"

s1= "zzzz"
s2= "zzzzzzz"

console.log(commonCharacterCount(s1,s2))

n = 1230
console.log(isLucky(n))


var a =  [-1, 150, 190, 170, -1, -1, 160, 180]
console.log(sortByHeight(a))

//var inputString= "()"
var inputString= "foo(bar)baz"


var inputString= "foo(bar)baz(blim)"
//                 "foomilb(zab)rab"

var inputString= "foo(bar(baz))blim"


console.log(reverseInParentheses(inputString))


a = [50, 60, 60, 45, 70];

console.log(alternatingSums(a));


picture= ["abc",  "ded"];
console.log(addBorder(picture));



//a= [1, 2, 3];
//b= [1, 2, 3];

a= [1, 2, 3]
b= [2, 1, 3]

a= [2, 3, 1]
b= [1, 3, 2]

//a= [2, 1, 2, 1, 1, 1, 2]
//b= [1, 1, 2, 1, 2, 1, 2]


a= [1, 1, 4]
b= [1, 2, 3]
console.log(areSimilar(a,b))


inputArray =  [1, 1, 1];
console.log(arrayChange(inputArray))




inputString= "aabb";
inputString= "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc";
//inputString="zaa";
console.log(palindromeRearranging(inputString))


inputString = "1.23.256.255.";
inputString = ".254.255.0";
inputString ="255.255.255.255abcdekjhf";
inputString ="255.255.00.255";
inputString ="172.16.254.1";
inputString = "64.233.161.00";
console.log(isIPv4Address(inputString));
*/

//#endregion Ejemplos

var inputArray = [5, 3, 6, 7, 9];
console.log(avoidObstacles(inputArray))