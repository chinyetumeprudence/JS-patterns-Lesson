function EventObserver (){
    this.observers = [];

}
EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are now unsuscribed from ${fn.name}`);
    },
    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

const click = new EventObserver;

//Event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function(){
    click.fire(getCurMilliseconds);
});

//click handler
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date(). getMilliseconds()}`);
}
const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date(). getSeconds()}`);
}