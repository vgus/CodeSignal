
#region Meet Python

def makeArrayConsecutive2(statues):
    pass

def countBits(n):
    n= int(n)
    return n.bit_length()

def modulus(n):
    if isinstance(n,int):
        return n % 2
    else:
        return -1

def simpleSort(arr):

    n = len(arr)

    for i in range(n):
        j = 0
        stop = n - i
        while j < stop - 1:
            if arr[j] > arr[j + 1]:
                print(arr[j:j + 2])
                arr[j:j+2] = [arr[j+1], arr[j]]

            j += 1
    return arr

def baseConversion(n, x):

    return hex(int(n,x))[2:]


def mexFunction(s, upperBound):
    found = -1
    for i in range(upperBound):
        if not i in s:
            found = i
            break
    else:
        found = upperBound

    return found

def listBeautifier(a):
    res = a[:]
    while res and res[0] != res[-1]:
        a, *res, b = res
    return res

#endregion Meet Python

#region Slithering in Strings

def fixMessage(message):

    return message.capitalize()

def catWalk(code):
    return ' '.join(code.split())


def convertTabs(code, x):
    return code.replace('\t',' '*x)


import textwrap
def feedbackReview(feedback, size):
    return textwrap.wrap(feedback,size)

def isWordPalindrome(word):
    return word == word[::-1]

def permutationCipher(password, key):

    table = ''.maketrans('abcdefghijklmnopqrstuvwxyz', key)
    return password.translate(table)

def competitiveEating(t, width, precision):
    #return str(float(round(t,precision))).ljust(precision, '0').center(width)
    #return '{0:f}'.format(round(t,precision)).center(width)
    #return str(round(float('{0:f}'.format(round(t,precision))),precision)).center(width)
    #return '{}'.format()
    return '{:.{prec}f}'.format(t, prec=precision).center(width)

def newStyleFormatting(s):
    s = s.replace('%%', ';;')
    s = s.replace('%f', "{}").replace('%e', "{}").replace('%E', "{}").replace('%F', "{}").replace('%g', "{}")\
    .replace('%G', "{}").replace('%n', "{}").replace('%d', "{}").replace('%i', "{}").replace('%o', "{}")\
    .replace('%u', "{}").replace('%X', "{}").replace('%x', "{}").replace('%c', "{}").replace('%s', "{}").replace('%r', "{}")\
    .replace('%s', "{}").replace('%a', "{}")
    s = s.replace(';;',"%")
    return s

def getCommit(commit):
    return commit.replace('0','').replace('?','').replace("+","").replace("!","")

#endregion Slithering in Strings

#region Lurking in Lists

def twoTeams(students):
    return sum([student if i % 2 == 0 else -student for i, student in enumerate(students) ])

def removeTasks(k, toDo):
    del toDo[k-1::k]
    return toDo

def printList(lst):
    return 'This is your list: ' + str(lst)

#endregion Lurking in Lists

#region Lambda Illusions

def getPoints(answers, p):
    questionPoints = lambda i, ans: i+1 if ans else -p 

    res = 0
    for i, ans in enumerate(answers):
        res += questionPoints(i, ans)
    return res

def sortStudents(students):
    students.sort(key=lambda student: student.split(' ')[1] if len(student.split(' ')) > 1 else student )
    return students

def isTestSolvable(ids, k):
    digitSum = lambda questionId: sum(int(digit) for digit in str(questionId))

    sm = 0
    for questionId in ids:
        sm += digitSum(questionId)
    return sm % k == 0

#endregion Lambda Illusions

#region Complexity of Comprehension

def createSpiralMatrix(n):
    dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]
    curDir = 0
    curPos = (n - 1, n - 1)
    res = [[0 for i in range(n)] for j in range(n)] 
    for i in range(1, n * n + 1):
        res[curPos[0]][curPos[1]] = i
        nextPos = curPos[0] + dirs[curDir][0], curPos[1] + dirs[curDir][1]
        if not (0 <= nextPos[0] < n and 0 <= nextPos[1] < n and res[nextPos[0]][nextPos[1]] == 0):
            curDir = (curDir + 1) % 4
            nextPos = curPos[0] + dirs[curDir][0], curPos[1] + dirs[curDir][1]
        curPos = nextPos

    return res

def constructShell(n):
    return [[0 for j in range(i+1)] if i < n else [0 for j in range(2*n-i-1)] for i in range(2*n-1)]

def wordPower(word):
    num = { chr(96+intChar):intChar for intChar in range (1,26) }
    return sum([num[ch] for ch in word])    

def coolPairs(a, b):
    uniqueSums = {pairA+pairB:1 for pairB in b for pairA in a if (pairA*pairB)%(pairA+pairB) == 0}
    return len(uniqueSums)

def multiplicationTable(n):
    return [[(j*i) for j in range(1,n+1)] for i in range(1,n+1)]

#endregion Complexity of Comprehension


#region Fumbling in Functional
def chessTeams(smarties, cleveries):
    return [list(elem) for elem in zip(smarties,cleveries)]

def fixResult(result):
    def fix(x):
        return x // 10

    return list(map(fix, result))

def collegeCourses(x, courses):
    def shouldConsider(course):
        return len(course) != x

    return list(filter(shouldConsider, courses))

def createHistogram(ch, assignments):
    return list(map(lambda a : ch*a,assignments))


#from fractions import gcd
#import functools

#def leastCommonDenominator(denominators):
#    return functools.reduce(lambda x,y: x*y/gcd(x,y),denominators)

#endregion Fumbling in Functional

#region Caravan of Collections

def UniqueCharacters(document):
    return sorted(set(document[:]))

def CorrectScholarships(bestStudents, scholarships, allStudents):
    return (set(bestStudents)-set(scholarships))==set() and (set(allStudents)-set(scholarships))!=set() and (set(scholarships)-set(allStudents)) == set()

def StartupName(companies):
    cmp1 = set(companies[0])
    cmp2 = set(companies[1])
    cmp3 = set(companies[2])
    
    res = {elem for elem in cmp1|cmp2|cmp3 if list(list(cmp1)+list(cmp2)+list(cmp3)).count(elem)==2} 
    print(list(list(cmp1)+list(cmp2)+list(cmp3)))

    for elem in cmp1|cmp2|cmp3:
        print(list(list(cmp1)+list(cmp2)+list(cmp3)).count(elem))


    return list(sorted(list(res)))


def WordsRecognition(word1, word2):
    def getIdentifier(w1, w2):
        return "".join(sorted(set(w1)-set(w2)))

    return [getIdentifier(word1, word2), getIdentifier(word2, word1)]

def TransposeDictionary(scriptByExtension):
    return sorted([[script,extension] for extension, script in scriptByExtension.items()])


from collections import deque

def DoodledPassword(digits):
    n = len(digits)
    res = [deque(digits) for _ in range(n)]
    #print(res)
    deque(map(lambda x: x.rotate(-1*(res.index(x)+1)),res), 0)
    return [list(d) for d in res]

#endregion Caravan of Collections



if __name__ == '__main__':
    #region examples

    """
    students= [1, 11, 13, 6, 14]
    print(twoTeams(students))
    

    k= 3
    toDo= [1237, 2847, 27485, 2947, 1, 247, 374827, 22]
    print(removeTasks(k,toDo))
    #[1237, 2847, 2947, 1, 374827, 22]
    
    
    lst = [1, 2, 3, 4, 5]
    print(printList(lst))
    
    
    repeatChar = lambda ch, n: ''.join(ch*n)
    print(repeatChar('*',10))
    
    
    answers = [True, True, False, True]
    p = 2

    print(getPoints(answers, p))
    

    students = ["Lucy Smith",  "John Smith",  "Jacky Mon Simonoff",  "Angela Zimonova"]
    print(sortStudents(students))
    
    ids= [529665, 909767, 644200]
    k = 3
    print(isTestSolvable(ids,k))
    
    n = 3
    print(createSpiralMatrix(n))
    
    n = 10
    print(constructShell(n))

    
    func = lambda n: [[i for j in range(i+1)] if i < n else [i for j in range(2*n-i-1)] for i in range(2*n-1)]
    
    word = "hello"
    print(wordPower(word))
    
    
    a= [4, 5, 6, 7, 8]
    b= [8, 9, 10, 11, 12]

    a= [1, 2, 3, 4, 5, 6]
    b= [1, 2, 3, 4, 5, 6]

    print(coolPairs(a,b))
    
    n = 4
    print(multiplicationTable(n))
    

    smarties= ["Jane","Bob","Peter"]
    cleveries= ["Oscar","Lidia","Ann"]
    print(chessTeams(smarties, cleveries))
    
    
    result= [42, 239, 365, 50]
    print(fixResult(result))

    

    x= 7
    courses=["Art", "Finance", "Business", "Speech", "History", "Writing", "Statistics"]
    print(collegeCourses(x,courses))
    
    ch= ">"
    assignments= [12, 12, 14, 3, 12, 15, 14]
    print(createHistogram(ch, assignments))
    
    #denominators= [2, 3, 4, 5, 6]
    denominators= [34, 6, 3, 5, 3]
    print(leastCommonDenominator(denominators))

    
    
    document = "Todd told Tom to trot to the timber"
    #print(UniqueCharacters(document))


    bestStudents = [3, 5]
    scholarships = [3, 5, 7]
    allStudents = [1, 2, 3, 4, 5, 6, 7]
    #true;
    
    bestStudents = [3, 5]
    scholarships = [3, 5]
    allStudents = [3, 5]
    ###false.
    ##
    bestStudents = [3]
    scholarships = [1, 3, 5]
    allStudents = [1, 2, 3]
    ###= false.
    print(CorrectScholarships(bestStudents, scholarships, allStudents))
    

    companies = ["coolcompany", "nicecompany", "legendarycompany"]
    #print(StartupName(companies))

    word1 = "program" 
    word2 = "develop"
    # ["agmr", "delv"].
    print(WordsRecognition(word1, word2) )
    """
    #endregion examples

    scriptByExtension = {"validate": "py","getLimits": "md","generateOutputs": "json"}
    #[["json", "generateOutputs"],["md", "getLimits"],["py", "validate"]]

    #print(TransposeDictionary(scriptByExtension))

    digits = [1, 2, 3, 4, 5]
    #[[1, 2, 3, 4, 5], [2, 3, 4, 5, 1], [3, 4, 5, 1, 2],[4, 5, 1, 2, 3], [5, 1, 2, 3, 4]]
    print(DoodledPassword(digits))
                       

                                   
                                  




    