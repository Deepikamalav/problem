// Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]


var data = [6,4,0, 3,-2,1]
for ( let i=0; i<data.length; i++)
{
    for (let j=0; j<data.length; j++)
    {
        if(data[j]> data[j+1])
        {
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] =temp;
        }
    }
}
console.log(data);



var data =  [5,1,3,7]
for(let i=0; i<data.length; i++){
    for (let j=0; j<data.length; j++){
        if(data[j]> data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}
console.log(data); 

// Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];


var library = [ 
       {
           title:  'The Road Ahead',
           author: 'Bill Gates',
           libraryID: 1254
       },
       {
           title: 'Walter Isaacson',
           author: 'Steve Jobs',
           libraryID: 4264
       },
       {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       }];
    
for (let i=0; i<library.length; i++){
    for(let j=0; j<library.length-1; j++){
        if(library[j].libraryID > library[j+1].libraryID){
         let temp = library[j] ;
         library[j] = library[j+1] ;
         library[j+1] = temp
        }
        }
    }
console.log(library);


for (let i=0; i<library.length; i++){
    for(let j=0; j<library.length-1; j++){
        if(library[j].title> library[j+1].title){
            let temp = library[j];
            library[j] = library[j+1];
            library[j+1] =temp
        }

    }
}
 console.log(library);
 
//  Write a JavaScript function to parse an URL.

 let a ="https://www.w3resource.com/javascript-exercises/javascript-object-exercise-12.php"
 function parse (a){
     let parsed_result = {}
     parsed_result ["scheme"] =a.split(".//")[0]
     console.log(parsed_result);      
     return parsed_result
 }
 console.log(parse(a));


//  Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys

object = {
    "a":"5", "b":"4", "c":"3"
}
for (key in object) {
    key_temp = key 
    value_temp = object[key]
    delete object["key"]
    object[value_temp] = key_temp
}
console.log(object);




var b= {name:"rm" , type:"ut"}
b.addrs = "xyz";
delete b["name"];
console.log("b");


// Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

var string = "dog"
 var result= string.substr(0,1);
console.log(result);