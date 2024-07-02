/*Baic structure

(function(){
    //declear private vars and function

    return{
        //Declear public var and function
    }
})*/

/*Standard
const UICtrl = (function(){
    let text = 'Hello World';

    const changeText = function(){
        const element = document.querySelector('h1')
        element.textContent = text;
    }
    return{
        callChangeText: function(){
            changeText(); 
            console.log(text);
        }
    }
})()

UICtrl.callChangeText();*/

//REVEALING MODULE PATTERN
const itemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log('Item Added');
    }
    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }
    return {
        add: add,
        get: get
    }

})()

itemCtrl.add({id: 1, name: 'John'});
console.log(itemCtrl.get(1));
itemCtrl.add({id: 2, name: 'Smith'});
console.log(itemCtrl.get(2));