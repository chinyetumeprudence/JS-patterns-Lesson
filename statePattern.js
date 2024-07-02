const Pagestate = function(){
 let currentState = new homeState(this);

 this.init = function(){
     this.change(new about  State);
 }
 this.change =  function(){
    currentState = state;
 }
};

//home state
const homeState = function(page){
    document.querySelector('.heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <p> This is the about page</p>
    `;
     
};
//About State 
const aboutState = function(page){
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <div>
        <h1>Hello World</h1>
        <p> This is the about page</p>
        </div>
`;
};
//Instantiate pageState
const page = new Pagestate();

//Initantiate the first page
page.init();