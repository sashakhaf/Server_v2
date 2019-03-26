class Test {
    constructor(hair, skinColor, langage, gender) {
      this.hair = hair;
      this.skinColor = skinColor;
      this.langage=langage,this.gender=gender;
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var hairTab=["red","green"]
var skinColorTab=["light","pale"]
var langageTab=["french","english"]
var genderTab=["female","male"]

Array.prototype.generateArray = function(hairTab,skinColorTab,langageTab,genderTab,nb) {
    for (i = 0; i < nb; i++) {
      this[i] = new Test (hairTab[getRandomInt(hairTab.length)],
                            skinColorTab[getRandomInt(skinColorTab.length)],
                            langageTab[getRandomInt(langageTab.length)],
                            genderTab[getRandomInt(genderTab.length)]);
    }
};

var test = [];  
 //generation array 
test.generateArray(hairTab,skinColorTab,langageTab,genderTab,5);
test.forEach(element => console.log(element));

//removeClone
function removeClone(array) {
    if(!Array.isArray(array)){
        throw "Le parametre n'est pas un array";
    }
    try{
        return array.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
     }
    catch(e){
        console.log(e);
    }

}

var a="";
var arrayClean;
arrayClean=removeClone(test);
//arrayClean=removeClone(a);//lance une erreur
console.log("Apres removeClone");
arrayClean.forEach(element => console.log(element));
