//#region Smooth Sailing

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

//#endregion region Smooth Sailing

//#region Exploring the Waters

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

//#endregion Exploring the Waters

//#region Island of Knowledge

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

function boxBlur(image) {
    var x = image.length - 2
    var y = image[0].length - 2
    var sal = []
    var paso = []
    for (let i = 0; i < image.length; i++)
    {
        //console.log("En el indice: "+i)
        //console.log(image[i])
        let salx = []
        for (let j = 0; j < image[i].length  ; j++)
        {
            if (j >= y)
                break
            let data = image[i][j] + image[i][j+1] + image[i][j+2]
            salx.push(data)
            console.log(salx)
        }
        paso.push(salx)
        
    }
    console.log(paso)

    for (let i = 0; i < paso.length; i++)
    {
        if (i >= x)
            break
        let saly = []
        for (let j = 0; j < paso[i].length; j++)
        {   
            let data = Math.trunc((paso[i][j] + paso[i+1][j] + paso[i+2][j])/9)
            //console.log(data)
            saly.push(data)
        }
        sal.push(saly)
    }


    return sal

}

function minesweeper(matrix) {
    
    var sal = []
    var falseArray = new Array(matrix[0].length+2).fill(false)
    matrix.unshift(falseArray)
    matrix.push(falseArray)

    for (let i = 1; i<matrix.length-1;i++)
    {
        matrix[i].unshift(false)
        matrix[i].push(false)
    }

    for (let i = 1; i<matrix.length-1;i++)
    {
        let saly = []
        
        for (let j = 1; j<matrix[i].length-1;j++)
        {
            
            saly[j-1] = Number(matrix[i-1][j-1])+Number(matrix[i-1][j])+Number(matrix[i-1][j+1])+
                Number(matrix[i][j-1])+Number(matrix[i][j+1])+
                Number(matrix[i+1][j-1])+Number(matrix[i+1][j])+Number(matrix[i+1][j+1])
            
        }
        sal.push(saly)

    }
    //console.table(matrix)
    return sal
}

//#endregion Island of Knowledge


//#region Rains of Reason
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i<inputArray.length;i++)
    {
        if(inputArray[i]==elemToReplace)
            inputArray[i] = substitutionElem
    }
    return inputArray
}

function evenDigitsOnly(n) {
    let m
    m = n/10
    let digitToTest = m-Math.trunc(m)
    digitToTest = Math.round(digitToTest*10)
    //digitToTest = Math.trunc(digitToTest)
    
    
    let restDigits = Math.trunc(m)
    if (n==0)
    {
        return true
    }
    else if ((digitToTest%2)!=0)
    {
        return false
    }
    else
    {
        return evenDigitsOnly(restDigits)
    }

}


function variableName(name) {
    let reStart = /^[\d\s]/
    let re = /^\w+$/
    console.log(name)
    if (reStart.test(name))
        return false
    else    
        n =  re.test(name)
    //let n = name.search(re)
    return n
}

function alphabeticShift(inputString) {
    let sal = ''
    
    for(let i=0; i<inputString.length;i++)
    {
        let val = inputString.charCodeAt(i)
        let nextVal
        if(val == 122)
        {
            nextVal = 97
        }
        else
        {
            nextVal = val+1
        }
        //console.log(nextVal)
        let nextLet = String.fromCharCode(nextVal)
        //console.log(nextLet)
        sal = sal.concat(nextLet)
    }
    return sal
}

function chessBoardCellColor(cell1, cell2) {
    if(getColor(cell1) == getColor(cell2))
        return true
    else 
        return false

}

function getColor(cell){
    col = cell.charCodeAt(0)-64
    row = Number(cell[1])
    if(col%2==0)
    {
        if(row%2==0)
            return "negro"
        else
            return "blanco"
    }
    else
    {
        if(row%2==0)
            return "blanco"
        else
            return "negro"
    }
}

//#endregion Rains of Reason

//#region Through the Fog

function circleOfNumbers(n, firstNumber) {
    let oposite = (n/2)+firstNumber
    if (oposite>=n)
        oposite = oposite-n
    return oposite
}


function depositProfit(deposit, rate, threshold) {
    let year = 1
    let balance = deposit+(deposit*rate/100)
    if(balance>=threshold)
    {
        return year  
    }
    else
    {
        year += 1
        year = depositProfit(balance, rate, threshold) + 1
        return year
    }
}

function absoluteValuesSumMinimization(a) {
    
    vecSum = []
    for (let i = 0;i<a.length;i++)
    {
        let sum = 0
        for (let j = 0;j<a.length;j++)
        {
            sum += Math.abs(a[i]-a[j])
        }
        vecSum.push(sum)
    }
    //console.table(vecSum)
    minSum = Math.min(...vecSum)
    return a[vecSum.findIndex(value => value == minSum)]

}
//TODO Esto aún no lo termino, pienso en otra cosa por lo mientras
function stringsRearrangement(inputArray) {
    let numElem = inputArray.length
    var salida = false
    if (numElem == 1)
    {
        console.log(inputArray)
        salida = true
        return salida
    }
    else
    {
        let element = inputArray[0]
        
        for (let i= 0; i<numElem;i++)
        {
            let sal = [...inputArray]
            let elemChang = inputArray[i]
            sal[0] = elemChang
            sal[i] = element   
            console.log(sal)
            let evalArray = sal.slice(1)
            let nextElem = evalArray[0]
            
            
            if ((element == elemChang && i==0 && diffByAChar(elemChang,nextElem) )|| 
            diffByAChar(element,elemChang)&&diffByAChar(elemChang,nextElem))
            {
                
                salida = stringsRearrangement(evalArray)
                if(salida)
                    break
            }
            else
                continue
        }
    }    
   return salida
    
}

//#endregion Through the Fog

//#region Diving Deeper

function diffByAChar(str1, str2)
{
    var count = 0
    var sal = true
    for(let i=0;i<str1.length;i++)
    {
        if(str1[i]!=str2[i])
            count += 1
        if (count>1)
        {
            sal = false
            break
        }
         
    }
    if (count==0)
    {
        sal = false
        return sal
    }
    else
        return sal
}

function extractEachKth(inputArray, k) {
    let sal = []
    let count = 1 
    for (let i=0;i<inputArray.length;i++)
    {
        if(i==(count*k-1))
        {    
            count += 1
            continue
        }
        else
            sal.push(inputArray[i])
        
    }
    return sal
}


function firstDigit(inputString) {
    let re = /^\D*(\d).*$/i
    let sal = inputString.match(re)
    return sal[1]
}

function differentSymbolsNaive(s) {
    let sal = {}
    for(let i=0; i<s.length;i++)
    {
        sal[s[i]] = 1
    }
    return Object.keys(sal).length
}

function arrayMaxConsecutiveSum(inputArray, k) {
    let maySum = 0
    for (let i = 0;i<=inputArray.length-k; i ++ )
    {   
        let sum = 0
        for(let j = i; j < i+k ; j++)
        {
            sum += inputArray[j]
        }
        if (sum > maySum)
            maySum = sum
        console.log(sum)
    }
    return maySum
}

//#endregion Diving Deeper

//#region Dark Wilderness

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let count = 1
    for(let i = upSpeed; i < desiredHeight; i += upSpeed )
    {   
        count += 1 
        i -= downSpeed
        console.log(i)  
    }
    return count
}


function knapsackLight(value1, weight1, value2, weight2, maxW) {

    if((weight1+weight2)<=maxW)
        return value1 + value2
    else if(value1>value2 && weight1<=maxW)
        return value1
    else if(value1>value2 && weight2<=maxW)
        return value2
    else if  (value1<value2 && weight2<=maxW)
        return value2
    else if(value1<value2 && weight1<=maxW)
        return value1
    else if(value1==value2 && weight1<=maxW)
        return value1
    else if(value1==value2 && weight2<=maxW)
        return value2
    else 
        return 0
}

function longestDigitsPrefix(inputString) {
    re = /^\d+/
    sal = re.exec(inputString)
    //console.log(sal)
    if (sal == null)
        return ""
    else
        return sal[0]
}

function digitDegree(n) {
    s = n.toString()
    sal = 0
    if(s.length == 1 && s == '1')
        return 1
    else if (s.length == 1 && s != '1')
        return 0
    else
    {
        let sum = 0
        for (let i=0; i<s.length; i++)
        {
            sum += Number(s[i])
        }
        if (sum == 1)
        {
            return 1
        }
        else
        {
            sal = 1
            sal += digitDegree(sum)
            return sal
        }
    }
}   

function bishopAndPawn(bishop, pawn) {
    
    let cellsAttack = []
    
    let colBish = bishop[0].charCodeAt(0) - 96
    let rawBish = Number(bishop[1])
    let rowUp = rawBish
    let rowDown = rawBish
    for(col = colBish +1 ; col <=8;col ++)
    {
        rowUp += 1
        rowDown -= 1
        if(rowUp<=8)
            cellsAttack.push(String.fromCharCode(col+96).concat(rowUp))
        if(rowDown>=1)
            cellsAttack.push(String.fromCharCode(col+96).concat(rowDown))
    }
    rowUp = rawBish
    rowDown = rawBish
    for( col  = colBish - 1 ; col >= 1 ;col --)
    {
        rowDown -= 1
        rowUp += 1
        if(rowUp<=8)
            cellsAttack.push(String.fromCharCode(col+96).concat(rowUp))
        if(rowDown>=1)
            cellsAttack.push(String.fromCharCode(col+96).concat(rowDown))
        
    }
    console.log(cellsAttack)
    let s = new Set(cellsAttack)
    return s.has(pawn)
}
//#endregion Dark Wilderness

//#region Eruption of Light


//#endregion Eruption of Light



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


var inputArray = [5, 3, 6, 7, 9];
console.log(avoidObstacles(inputArray))



//image = [[1,1,1],[1,7,1],[1,1,1]]

//image =[[7,4,0,1], [5,6,2,2], [6,10,7,8], [1,4,2,0]]

//image =[[36,0,18,9], [27,54,9,0], [81,63,72,45]]

image =[[36,0,18,9,9,45,27], [27,0,254,9,0,63,90], [81,255,72,45,18,27,0], [0,0,9,81,27,18,45], [45,45,227,227,90,81,72], [45,18,9,255,9,18,45], [27,81,36,127,255,72,81]]

console.table(boxBlur(image))


//let matrix = [[true,false,false], [false,true,false], [false,false,false]]
//let matrix =[[false,false,false], [false,false,false]]
 let matrix =[[false,true,true,false], [true,true,false,true], [false,false,true,false]]
//let matrix =[[true,false],[true,false],  [false,true],  [false,false],  [false,false]]

console.table(matrix)
console.table(minesweeper(matrix))

inputArray = [1, 2, 1]
elemToReplace= 1
substitutionElem= 3
console.log(arrayReplace(inputArray, elemToReplace, substitutionElem))

n = 248622
//n=15
console.log(evenDigitsOnly(n))

let name
name = "var_1__Int"
name = '[A]'

name = "va[riable0"
//name = "qq-q"
console.log(variableName(name))



//inputString = "a"
inputString = "crazy"
console.log(alphabeticShift(inputString))7



cell1 = "A1" 
cell2 = "C3"
console.log(chessBoardCellColor(cell1, cell2)) // true.




n = 10
firstNumber = 2

n = 10
firstNumber = 7

n= 6
firstNumber= 3

console.log(circleOfNumbers(n, firstNumber)) // 7

deposit = 100
rate = 20
threshold = 170

deposit= 100
rate= 1
threshold= 101

console.log(depositProfit(deposit, rate, threshold))// = 3

a =[2, 4, 7]
//a = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150]
//respuesta 65


console.log(absoluteValuesSumMinimization(a)) //4.



//inputArray = [1,2,3]
//inputArray = [6,5,4,3,1,1,2,1]
//inputArray = [1,1,1,1,1]
//inputArray = ["aba", "bbb", "bab"] //false
//inputArray = ["ab", "bb", "aa"] //true
//inputArray=["a",  "b",  "c"]
inputArray=["q", "q"] // false
//inputArray=["abc",  "bef",  "bcc",  "bec",  "bbc",  "bdc"] //true
inputArray=["abc", "abx", "axx", "abc"] //false
//inputArray=["abc",  "abx",  "axx",  "abx",  "abc"] // true
//inputArray=["abc", "abx", "axx", "abc"] //false

//inputArray=["abc",  "bef",  "bcc",  "bec",  "bbc",  "bdc"] //true

console.log(stringsRearrangement(inputArray))// = false.
//console.log(diffByAChar("bbc","abc"))




inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
k = 3

console.log(extractEachKth(inputArray,k))

inputString = "var_1__Int" 
//inputString = "q2q-q", 
inputString = "0ss"

console.log(firstDigit(inputString))


s = "cabca"
console.log(differentSymbolsNaive(s)) //= 3



inputArray = [2, 3, 5, 1, 6]
k = 2

console.log(arrayMaxConsecutiveSum(inputArray, k)) //= 8



upSpeed = 100
downSpeed = 10
desiredHeight = 910 //= 10.

//upSpeed= 10
//downSpeed= 9
//desiredHeight= 4


console.log(growingPlant(upSpeed, downSpeed, desiredHeight)) 





value1 = 10
weight1 = 5
value2 = 6
weight2 = 4
maxW = 8 //= 10.

value1= 10
weight1= 2
value2= 11
weight2= 3
maxW= 1

console.log(knapsackLight(value1, weight1, value2, weight2, maxW) )


inputString = "123aa1" //= "123"
inputString = "  3) always check for whitespaces"
console.log(longestDigitsPrefix(inputString))

n = 5 //= 0
n = 100 // 1
n = 91 //2

console.log(digitDegree(n))
*/
//#endregion Ejemplos


bishop = "h8"
pawn = "c3" //= true



console.log(bishopAndPawn(bishop, pawn)) 

