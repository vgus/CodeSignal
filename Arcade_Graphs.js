//#region Kingdom Roads
function newRoadSystem(roadRegister) {
    
    let matSumRow = []
    var matSumCol = new Array(roadRegister[0].length).fill(0)
    var sal = true

    for (let i =0 ; i<roadRegister.length; i++)
    {
        let countTrueRow = 0
        for (let j =0 ; j<roadRegister[i].length; j++)
        {
            if(roadRegister[i][j])
            {
                countTrueRow += 1
                matSumCol[j] += 1
            }
        }
        matSumRow.push(countTrueRow)
    }
    for (let i =0 ; i<matSumCol.length; i++)
    {
        if((matSumRow[i]-matSumCol[i])!=0)
        {
            sal = false
            break
        }
    }

    return sal
}
//#endregion Kingdom Roads

let roadRegister 
//roadRegister =[[false,true,false,false],  [false,false,true,false],  [true,false,false,true],  [false,false,true,false]]
//Expected Output:true

roadRegister =[[false,true,false,false,false,false,false],  [true,false,false,false,false,false,false],  [false,false,false,true,false,false,false],  [false,false,true,false,false,false,false],  [false,false,false,false,false,false,true],  [false,false,false,false,true,false,false],  [false,false,false,false,false,true,false]]
//Expected Output: true

roadRegister =[[false,true,true,true,false],  [true,false,true,true,true],  [true,true,false,true,false],  [true,true,true,false,true],  [true,true,true,true,false]]
//Expected Output: false



roadRegister =
[[false,true,false,true,true], 
 [false,false,false,false,true], 
 [true,false,false,true,true], 
 [true,true,true,false,false], 
 [true,true,true,false,false]]

 //Expected Output false

console.log(newRoadSystem(roadRegister))

