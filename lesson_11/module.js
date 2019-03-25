const myModule = (function(){
    const privateVariable = 'Hello World';
    function privateMethod() {
        console.log(privateVariable);
    }
    return {
        publicMethod: function() {
            privateMethod();
        }
    }
})();

const myModule2 = (function(){
    const privateVariable = 'Hello World';
    function privateMethod() {
        console.log(privateVariable);
    }
    return {
        publicMethod: privateMethod,
    }
})();

console.log(myModule2.publicMethod());