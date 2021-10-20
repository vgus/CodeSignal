def centuryFromYear(year):
    century = int(((year-1) / 100) +1)
    return century

def checkPalindrome(inputString):
    if inputString == inputString[::-1]:
        return True
    else:
        return False

def adjacentElementProduct(inputArray):
    inic = 0
    salida = []
    for array in inputArray:
        salida.append(inic*array)
        inic = array
    del salida[0]
    return max(salida)

def shapeArea(n):
    return  pow(n-1, 2)+pow(n, 2)

def makeArrayConsecutive2(statues):
    salida = [compara for compara in range(min(statues), max(statues), 1) if compara not in statues]
    return len(salida)

def almostIncreasingSequence1(sequence):
    for index in range(len(sequence)):
        salida = False
        copia = sequence.copy()
        del copia[index]
        noDup = list(dict.fromkeys(copia))
        if sorted(copia) == noDup:
            salida = True
            break
    return salida

def almostIncreasingSequence2(sequence):
    for index in range(len(sequence)):
        salida = False
        copia = sequence.copy()
        busqueda = copia.pop(index)
        if copia.count(busqueda) >= 2: break
        if all([i < j for i, j in zip(copia, copia[1:])]):
            salida = True
            break
    return salida

def almostIncreasingSequence4(sequence):
    salida = True
    anterior = min(sequence) - 1
    primeraVez = False
    for index, actual in enumerate(sequence):
        if index != len(sequence)-1:
            posterior = sequence[index+1]
        else:
            posterior = max(sequence) + 1
        if not anterior < actual < posterior:
            if anterior == posterior: continue
            if primeraVez:
                salida = False
                break
            primeraVez = True
        else:
            anterior = actual
    return salida

def almostIncreasingSequence3(sequence):
    soloUno = True
    anterior = sequence[0] - 1
    cuentaAsc = 0
    for index, actual in enumerate(sequence):
        try:
            posterior = sequence[index+1]
        except IndexError:
            posterior = sequence[index] + 1
        print("probando:",actual, "soloUno:", soloUno)
        if  anterior < actual and anterior < posterior:
            print('ascedente')
        else:
            print('no ascedente')
            soloUno = False
            cuentaAsc +=1
        anterior = actual
    print(cuentaAsc)
    if cuentaAsc>1:
        return False
    return True

def almostIncreasingSequence(sequence):
    decreased = False
    last = prev = min(sequence) - 1
    for elm in sequence:
        if elm <= last:
            if decreased:
                return False
            else:
                decreased = True
            if elm <= prev:
                    prev = last
            elif elm >= prev:
                    prev = last = elm
        else:
                prev, last = last, elm
    return True
            
def matrixElementsSum(matrix):
    pasaColumna = []
    suma = 0
    for fila in matrix:
        index = 0
        for columna in fila:
            if columna == 0:
                pasaColumna.append(index)
            elif index in pasaColumna:
                pass
            else:
                suma += columna
            index += 1
    return suma
    



if __name__ == '__main__':
    '''
    year = 1905
    print(centuryFromYear(year))
    year = 1700
    print(centuryFromYear(year))
    
    inputArray = [3, 6, -2, -5, 7, 3]
    print(adjacentElementProduct(inputArray))
    

    statues = [6, 2, 3, 8]
    print(makeArrayConsecutive2(statues))
    
    #sequence = [1, 3, 2, 1] #false
    #sequence = [1, 3, 2, 4, 5] #true
    #sequence = [1, 2, 3, 4, 5, 3, 5, 6] #false
    #sequence = [ 10, 1, 2, 3, 4, 5] #True
    
    #sequence = [1, 2, 3, 4, 3, 6] #True
    #sequence = [3, 5, 67, 98, 3] #True
    sequence = [1, 2, 1, 2] #false
    #sequence = [123, -17, -5, 1, 2, 3, 12, 43, 45] #True
    #sequence = [1, 2, 3, 4, 3, 6] #true
    #sequence = [3, 5, 67, 98, 3] #true
    #sequence = [1, 2, 1, 2] #false
    print(almostIncreasingSequence(sequence))
    '''

    #matrix = [[0,1,1,2], [0,5,0,0], [2,0,3,3]]
    matrix = [[1,1,1,0], [0,5,0,1], [2,1,3,10]]

    print(matrixElementsSum(matrix))