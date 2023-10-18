const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
     return cats;
 }

 destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

destructivelyPrependCat('bob');

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    const appendCat = [...cats, `${name}`]
    return appendCat;
}
appendCat("Broom")

function prependCat(name){
    const prependCat = [`${name}`, ...cats]
    return prependCat;
}
prependCat("Arnold")

function removeLastCat(){
   const removeLastCat = cats.slice(0,-1)
    return removeLastCat;
}

function removeFirstCat(){
    const rvd = cats.slice(1);
    return rvd;
 }

