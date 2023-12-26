//Map helps to create a new arr of elements while going through every element of current array and calling a function that we describe
import _ from 'lodash';

var newArr = [7,8,9].map(function(item){
    return item;
})

console.log(newArr);

var LodashArr = _.map([{id:1,name:'Adarsh'},{id:2,name:'Dhital'}],function(item){
    return item.name;
})

console.log(LodashArr);

//Simplified and more clean
var LodashArr1 = _.map([{id:1,name:'Demo'},{id:2,name:'Demo 1'}],'name');

console.log(LodashArr1);