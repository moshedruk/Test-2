

const Mission1 = (arrStr) => arrStr.filter(x => x % 2 === 0);

const Mission2 = (...Str) => {
    let arrTemp = Str[0].split(' ');
    let count = 0;    
    for (let i = 0; i < arrTemp.length; i++) {        
        if (arrTemp[i].length === 4) {
            count++;
        }
    }
    return count;
} 
const Mission3 = (twoDimensionalArray) => {    
    let arrOneDimensionalArray = []
    for (let element of twoDimensionalArray) {
        arrOneDimensionalArray.push(...element)
    }        
    return arrOneDimensionalArray
  }   
const Mission6 = (index) => {
    if(index <= 0) {
        return "Index no validite range"
    }
    let fibarrTemp = [0, 1]
    for(let i = 2; i <= index; i++){
        fibarrTemp[i] = fibarrTemp[i-1] + fibarrTemp[i-2]
    }
    return fibarrTemp[index]
}  


module.exports = {
    Mission1,
    Mission2,
    Mission3,   
    Mission6
} 