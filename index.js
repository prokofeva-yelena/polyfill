//Реализация функции map


Array.prototype.myMap = function(callback){
    let res = []
    for(let i = 0; i < this.length; i++){
        res.push(callback(this[i], i, this));
    }
    return res;
};
let arrRes1 = [1,2,3,4,5].myMap((item, index, arr)=> item * 200);
//console.log(arrRes1);


//Реализация функции filter

Array.prototype.myFilter = function(callback){
    let res = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            res.push(this[i]);
        }
    }
    return res;
};
let arrRes2 = [10,1,3,40,50,5].myFilter((item, index, arr) => item >= 10);
//console.log(arrRes2);

//Реализация функции reduce


Array.prototype.myReduce = function(callback, res){
    let i = 0;
    console.log(arguments)
    if(arguments.length < 2){
        i = 1;
        res = this[0]
    }
    for(i; i < this.length; i++){
        res = callback(res, this[i], i, this)
    }
    return res;
}


//1
let arr = [false,1,0,1,2,0,1,3,'a'];//[false,1,1,2,1,3,'a',0,0]
let res = arr.reduceRight((acc, item) => item === 0 ? [...acc,item] : [item,...acc],[])
//console.log(res);
//2
let arr1 = [[3,2,1],[4,6,5,],[],[9,8,7]]; //[1,2,3,4,5,6,7,8,9]
const flattenandSort = (arr) => {
    return arr
        .reduce((acc,item) => acc.concat(item),[])
        .sort((a,b) => a-b)
}
//console.log(flattenandSort(arr1));

















