let animalName = document.querySelector("#animal-name");
let animalDes = document.querySelector("#animal-description");
let animalWeight = document.querySelector("#animal-weight");
let animalColor = document.querySelector("#animal-color");
let animalBirth = document.querySelector("#animal-birthday");
let animalType = document.querySelector("#animal-type");
let animalPers = document.querySelector("#animal-personality");

let dogsList = document.querySelector("#dogs-list");
let catsList = document.querySelector("#cats-list");
let rabbitsList = document.querySelector("#rabbits-list");
let mousesList = document.querySelector("#mouses-list");
let snakesList = document.querySelector("#snakes-list");
let minipigsList = document.querySelector("#minipigs-list");
let cowsList = document.querySelector("#cows-list");

let buttonSubmit = document.querySelector("#animal-button-submit");

let animals = [[], [], [], [], [], [], []];

class Animal {
    constructor(name, des, weight, color, birth, type, pers){
        this.name = name;
        this.des = des;
        this.weight = weight;
        this.color = color;
        this.birth = birth;
        this.type = type;
        this.pers = pers;
    }
};
class Dog extends Animal{
    constructor(name, des, weight, color, birth, type, pers){
        super(name, des, weight, color, birth, type, pers);
        this.sound = "Woof woof!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Cat extends Animal{
    constructor(name, des, weight, color, birth, type, pers){
        super(name, des, weight, color, birth, type, pers);
        this.sound = "Miau Miau!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Rabbit extends Animal{
    constructor(name, des, weight, color, birth, type, pers){
        super(name, des, weight, color, birth, type, pers);
        this.sound = "Gis Gis!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Mouse extends Animal{
    constructor(name, des, weight, color, birth, type, pers){
        super(name, des, weight, color, birth, type, pers);
        this.sound = "Ts TS!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Snake extends Animal{
    constructor(name, des, weight, color, birth, type, pers){
        super(name, des, weight, color, birth, type, pers);
        this.sound = "Snis Snis!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class MiniPig extends Animal{
    constructor(name, des, weight, color, birth, type, pers){
        super(name, des, weight, color, birth, type, pers);
        this.sound = "Oinc oinc!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Cow extends Animal{
    constructor(name, des, weight, color, birth, type, pers){
        super(name, des, weight, color, birth, type, pers);
        this.sound = "Muuu Muu!";
    }
    makeSound(){
        alert(this.sound);
    };
};

const showAnimalInfo = (button, aniName) =>{
    console.log(button + " " + aniName);
    let infoRow = document.querySelector("#animal-info");

    console.log(infoRow.children[0]);
};

// Tienes que hacer que busque entre todos los animales, dependiendo
// del tipo de animal, en que array buscara. Luego buscar el animal
// con el mismo nombre y caracteristicas que el seleccionaod y asi
// mostrar sus datos en pantalla.


const addAnimalToList = () =>{
    let htmlCode =
    `
    <button onclick="showAnimalInfo(this, this.textContent);" animalType="${animalType.value}">${animalName.value}</button>
    `;

    switch(animalType.value){
        case "dog":
            dogsList.innerHTML += htmlCode;
        break;

        case "cat":
            catsList.innerHTML += htmlCode;
        break;
        
        case "rabbit":
            rabbitsList.innerHTML += htmlCode;
        break;

        case "mouse":
            mousesList.innerHTML += htmlCode;
        break;

        case "snake":
            snakesList.innerHTML += htmlCode;
        break;

        case "mini-pig":
            minipigsList.innerHTML += htmlCode;            
        break;

        case "cow":
            cowsList.innerHTML += htmlCode;            
        break;
    };
};

function getError(){
    let error = [];
    if(animalName.value.length < 4 || animalName.value.length > 16){
        error[0] = true;
        error[1] = "El nombre debe estar entre 4 y 16 caracteres";
        return error;
    };
    if(animalDes.value.length == 0 || animalDes.value.length > 600){
        error[0] = true;
        error[1] = "La descripcion debe ser entre 0 y 600 caracteres";
        return error;
    };
    if(animalWeight.value.length == 0 || animalWeight.value.length >= 4){
        error[0] = true;
        error[1] = "El peso debe estar bajo los 1000kg";
        return error;
    };
    if(animalBirth.value == ""){
        error[0] = true;
        error[1] = "No has especificado su fecha de nacimiento";
        return error;
    };
    error[0]= false;
    return error;
}; 

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let error = getError();

    if(error[0]){
        alert(error[1]);
    }else{
        switch(animalType.value){
            case "dog":
                const dog = new Dog(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value, animalPers.value);
                animals[0].push(dog);
            break;
    
            case "cat":
                const cat = new Cat(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value, animalPers.value);
                animals[1].push(cat);
            break;
            
            case "rabbit":
                const rabbit = new Rabbit(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value, animalPers.value);
                animals[2].push(rabbit);
            break;
    
            case "mouse":
                const mouse = new Mouse(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value, animalPers.value);
                animals[3].push(mouse);
            break;
    
            case "snake":
                const snake = new Snake(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value, animalPers.value);
                animals[4].push(snake);
            break;
    
            case "mini-pig":
                const minipig = new MiniPig(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value, animalPers.value);
                animals[5].push(minipig);
            break;
    
            case "cow":
                const cow = new Cow(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value, animalPers.value);
                animals[6].push(cow);
            break;
        };

        addAnimalToList();

        console.log(animals);
    };
});


