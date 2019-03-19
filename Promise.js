let myPromise = new Promise(function(resolve,reject){
    /* 
     * The code inisde the promise is called as executor code 
     * Resolve/ Reject is an outcome of the executor code
     * Promise accepts two parameters 1.resolve 2.reject
    */

    setTimeout(function(){
        resolve("success");
    },3000);

    setTimeout(function(){
        reject("success");
    },10000);

});

myPromise.then(
    function(result){
    console.log(result);
},
function(error){
    console.log(error);
});