const year = () => {
    var soluce = -1
    var year = 1905
    var a = 1, b = 100
    var k = 1
    while(soluce === -1){
        if(year >= a && year <= b)
            soluce = k
        else {
            k++
            a += 100
            b += 100
        }
    }
    return soluce
}
const palindrome = () => {
    var inputString = 'aad'
    console.clear()
    for(let i=0;i<inputString.length/2;i++)
        if(inputString[i] !== inputString[inputString.length-1 - i]) return console.log(false)
    return console.log(true)
}
const produitAdj = () => {
    var inputArray = [3, 6, -2, -5, 7, 3]
    var result = -1
    for(let i = 0;i<inputArray.length-1;i++)
        if(result < inputArray[i]*inputArray[i+1])
            result = inputArray[i]*inputArray[i+1]
    console.log(result)
}
const polygon = () => {
    console.clear()
   var n = 2
   var a = 3
   var s = 1
   for(let i=0;i<n;i++)
    s += Math.pow(3,i)
   console.log(s)
}
const statue = () => {
    var statues = [6, 2, 3, 8]
    const staTri = statues.sort()
    var t = new Array()
    var k = 0
    for(let i = staTri[0] ;i<staTri[staTri.length-1];i++){
        if(i !== staTri[k]){
            t.push(i)
            
        }else k++
    }
    return t.length
}
const croissant = () => {
    var sequence = [1, 3 , 2, 1]
    const checkV = (sequence:number[]) => {
        var ind = -1
        for( let i=0;i<sequence.length-1;i++){
            if(sequence[i] >= sequence[i+1]){
                return  i
            }
        }
        return ind
    }
    var ind = checkV(sequence)
    var lengt = sequence.length-1
    var sq1 = sequence.filter((p,i)=> i!== ind)
    var sq2 = new Array()
    if(ind < lengt)
    sq2 = sequence.filter((p,i)=> i!== ind+1)
    if(checkV(sq1) === -1) return console.log(true)
    if(checkV(sq2) === -1) return console.log(true)
    return console.log(false)
}
const coloneG = () => {
    var matrix = [[0, 1, 1, 2], 
    [0, 5, 0, 0], 
    [2, 0, 3, 3]]
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                if(i<matrix.length-1)
                    for(let k=i;k<matrix.length;k++)
                        matrix[k][j] = 0
            }
        }
    }
    var soluce = 0
    for(let i=0;i<matrix.length;i++)
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j])
                soluce += matrix[i][j]
        }
    return soluce
}
const graphRoutePoss = () => {
    var roadRegister = [[false, true,  false, false, false, false, false],
    [true,  false, false, false, false, false, false],
    [false, false, false, true,  false, false, false],
    [false, false, true,  false, false, false, false],
    [false, false, false, false, false, false, true ],
    [false, false, false, false, true,  false, false],
    [false, false, false, false, false, true,  false]]
    var routeI = new Array()
    var routeJ = new Array()

    for(let i=0;i<roadRegister.length;i++){
        for(let j=0;j<roadRegister[i].length;j++){
            if(roadRegister[i][j]){
                routeI.push(i)
                routeJ.push(j)

            }
        }
    }
    routeI = routeI.sort()
    routeJ = routeJ.sort()
    for(let i=0;i<routeI.length;i++)
        if(routeI[i] !== routeJ[i]) return false
    return true
}
const cityRoads = () => {
   var cities= 4
    var roads=
    [[0,1], 
    [1,2], 
    [2,0]]
    var tab = new Array()

    for(let i=0;i<cities;i++)
        for(let j=0;j<cities;j++)
            if(i!==j) 
                if(!tab.includes(`${j},${i}`))    
            tab.push(`${i},${j}`)
    
    var tabRoadS = new Array()
    for(let i=0;i<roads.length;i++){
        tabRoadS.push(`${roads[i][0]},${roads[i][1]}`)
        tabRoadS.push(`${roads[i][1]},${roads[i][0]}`)
    }

    for(let i=0;i<tabRoadS.length;i++){
        for(let j=0;j<tab.length;j++){
            if(tabRoadS[i] === tab[j])
                tab = tab.filter((p,k)=> k !== j)
        }
    }
    var tabF = new Array()
    for(let i=0;i<tab.length;i++){
        const t = tab[i].split(',')
        tabF.push([parseInt(t[0]),parseInt(t[1])])
    }


   return tabF


}
const phoneCall = () => {
    var min1 = 10,min2_10 = 1,min11 = 2,s = 22,cpt=0
    var k=0
    while(cpt<s){
        if(k === 0) cpt = min1
        else if(k>0 && k<10) cpt+=min2_10
        else cpt += min11
        k++
    }
    if(cpt>s) k--
    console.log(k)
    return k
}
const kapsnackL = () => {
    var value1= 15,
        weight1= 2,
        value2= 20,
        weight2= 3,
        maxW= 2
    
    if(weight1 <= maxW || weight2 <= maxW){
        if(weight1 + weight2  <= maxW){
            return console.log(value1+value2)
        }else if(value1 > value2) return console.log(value1)
        else return console.log('dsd',value2)

    }else console.log(0)
        

}
const infiniteLoop = () => {
    var t= 1,
    width= 3,
    precision= 0
    var str = t.toFixed(precision)
    var strF = ''
    var lng = Math.ceil(width/2)
    var lngStr = Math.ceil(str.length/2)
    var ln = lng - lngStr
    var k = 0
    for(let i=0;i<width;i++){
        if(i >= ln && i < str.length+ln ){
            strF += str[k]
            k++
        }else  strF += ' '
    }

    return strF

    
}
const Tennis = () => {
    var score1 = 7,score2 = 6
    const tn = () => {
        if(score1 === score2) return false
        if(score1 > 7 || score2 > 7) return false
        if(score1 < 6 && score2 < 6) return false
        if(score1 === 7)
            if(score1 - score2 < 2)
                return true
            else return false
        if(score2 === 7) 
        if(score2 - score1 < 2)
                return true
            else return false
        if(score1 === 6 )
            if(score1 - score2 > 1 ) return true
            else return false
        if(score2 === 6 )
            if(score2 - score1 > 1 ) return true
            else return false
        

    }
    console.log(tn())
}
const k_th = () => {
    var n = 37,k = 3
    var t = (n).toString(2)
    console.log(parseInt(((n).toString(2)).slice(0, -k) + '0' + ((n).toString(2)).slice(-k + 1), 2))
}
const reverseInParenthese = () => {
    var t = '(ab)(vbar)a'
    var k = 0
    var f = 0

    var cpt = 0
    for(let i=0;i<t.length;i++)
        if(t[i] === '(')
            cpt++
    var d = 0

    while(d < cpt){
        console.log('d : ',d,t)

        for(let i=0;i<t.length;i++)
        if(t[i] === '('){
            k = i
        }else if( t[i] === ')'){
            f = i
            var t1 = t.slice(0,k)
            var tCh = t.slice(k+1,f).split('').reverse().join('')
            var t2 = t.slice(f+1)
            t = t1+tCh+t2
            break
        }
        d++
    }

    // console.log(t.split('('))

}
const team = () => {
    var a = [50, 60, 60, 45, 70]
    var team = [0,0]
    for(let i=0;i<a.length;i++)
        if(i % 2) team[1] += a[i]
        else team[0] += a[i]
    
    console.log(team)
}
const AddBorder = () => {
    var picture = ['abc','ded']
    var length = picture[0].length+2
    var t = ''
    for(let i=0;i<length;i++)
        t += '*'
    for(let i=0;i<picture.length;i++)
        picture[i] = '*'+picture[i]+'*'

    picture.push(t)
    picture.unshift(t)

    console.log(t)
    picture[picture.length]
    console.log(picture)
}
const arrayChange = () => {
    var inputArray = [-1000, 0, -2, 0]
    var tab = [...inputArray]
    var k = 0
    for(let i=0;i<inputArray.length-1;i++){
        if(tab[i+1] <= tab[i]){
            while(tab[i+1] <= tab[i]){
                tab[i+1] += 1
                k += 1
            }
        }
    }
console.log(k)

}
const palindromeRearrange = () => {
    var inputString = 'zaa'
    var length = inputString.length
    var tab = [...inputString] 

    if( length % 2 === 0){
        var t:string[] = []
        for(let i=0;i<length;i++){
            if(!t.includes(tab[i]))
                t.push(tab[i])
        }
        for(let i=0;i<t.length;i++){
            var cpt = 0
            for(let j=0;j<length;j++){
                if(t[i] === tab[j])
                    cpt++
            }
            if(cpt % 2 !== 0) return false
        }
        return true
    }else {
        var t:string[] = []
        for(let i=0;i<length;i++){
            if(!t.includes(tab[i]))
                t.push(tab[i])
        }
            var nbrI = 0
            for(let i=0;i<t.length;i++){
                var cpt = 0
                for(let j=0;j<length;j++){
                    if(t[i] === tab[j])
                        cpt++
                }
                if(cpt % 2 !== 0){
                    nbrI++
                }
                if(nbrI > 1) return false
            }
            return true
            
        }
    
}
const iPv4 = () => {
    var inputString = '172.16.254.1'
    var tab = [...inputString].join('').split('.')
    
    if(tab.length !== 4)
        return false
    else{
        for(let i=0;i<tab.length;i++)
            if(isNaN(Number(tab[i])) || parseInt(tab[i]) > 255 ) return false

        for(let i=0;i<tab.length;i++){
            for(let j=0;j<tab[i].length;j++){
                if(tab[i].split('').length > 1){
                    if(tab[i][0] === '0') return false
                }
            }
        }
        return true
        
    } 
}
const fancyRide = () => {
    var fares = [0.3, 0.5, 0.7, 1, 1.3]
    var l = 30
    var result = false
    var k = 0
    while (!result) {
        if (l * fares[k] > 20) {
            result = true
            break
        }
        if(k === fares.length-1) break
        k++
    }
    return result ? ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'][k - 1] : 'UberSUV'
}
const avoidObstacle = () => {
    var inputArray = [1, 4, 10, 6, 2]
    var tab = [...inputArray]
    for(let i=0;i<tab.length-1;i++){
        for(let j=i+1;j<tab.length;j++){
            if(tab[i] > tab[j]){
                const tmp = tab[j]
                tab[j] = tab[i]
                tab[i] = tmp
            }

        }
    }
    var length = tab[tab.length-1] + 2
    var k = 0
    var tabM = []

    for(let i=0;i<length+2;i++){
        if(i === tab[k]){
            tabM.push(i)
            k++
        } 
        else tabM.push(0)
    }
    var d = 0
    for(let i = 0;i<length-1;i++){
        var k = 0
        var find = false
        while(k < tabM.length){
            if(tabM[k]) {
                find = true
            }
            k+=i+1
        }
            if(!find){
                d = i+1
                break
            }
        }
        return d
}
const phoneNumbers = () => {
    var t = ['0412578440','0412199803','0468892011','112','15']
    if(t.length === 1){
        return t[0].length
    }else{
        var cpt = {ind:0,val:0}
        for(let i=0;i<t.length-1;i++){
            for(let j=i+1;j<t.length;j++){
                var k = 0
                while(t[i][k] === t[j][k])
                    k++
                if(k > cpt.val)
                    cpt = {ind:j,val:k}    
            }
        }
        var res = t[cpt.ind].length
        for(let i=0;i<t.length;i++){
            var pos = false
            if(i !== cpt.ind)
                for(let j=0;j<t[i].length;j++){
                    if(!pos){
                        if(t[cpt.ind][j] !== t[i][j]){
                            console.log(t[i][j])
                            res++
                            pos = true
                        }
                    }else{
                        res++
                    }
                }
            }
        console.log(res)
        return length.toString()
    }
}