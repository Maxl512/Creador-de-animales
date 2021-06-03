let animalName = document.querySelector("#animal-name");
let animalDes = document.querySelector("#animal-description");
let animalWeight = document.querySelector("#animal-weight");
let animalColor = document.querySelector("#animal-color");
let animalBirth = document.querySelector("#animal-birthday");
let animalType = document.querySelector("#animal-type");

let dogsList = document.querySelector("#dogs-list");
let catsList = document.querySelector("#cats-list");
let rabbitsList = document.querySelector("#rabbits-list");
let mousesList = document.querySelector("#mouses-list");
let snakesList = document.querySelector("#snakes-list");
let minipigsList = document.querySelector("#minipigs-list");
let cowsList = document.querySelector("#cows-list");

let buttonSubmit = document.querySelector("#animal-button-submit");

let animalImage = document.querySelector("#animal-image");

let todayDate = new Date().getFullYear();
console.log(todayDate + " " + animalBirth);

let animals = [[], [], [], [], [], [], []];

class Animal {
    constructor(name, des, weight, color, birth, type){
        this.name = name;
        this.des = des;
        this.weight = weight;
        this.color = color;
        this.birth = birth;
        this.type = type;
    }
};
class Dog extends Animal{
    constructor(name, des, weight, color, birth, type){
        super(name, des, weight, color, birth, type);
        this.sound = "Woof woof!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Cat extends Animal{
    constructor(name, des, weight, color, birth, type){
        super(name, des, weight, color, birth, type);
        this.sound = "Miau Miau!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Rabbit extends Animal{
    constructor(name, des, weight, color, birth, type){
        super(name, des, weight, color, birth, type);
        this.sound = "Gis Gis!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Mouse extends Animal{
    constructor(name, des, weight, color, birth, type){
        super(name, des, weight, color, birth, type);
        this.sound = "Ts TS!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Snake extends Animal{
    constructor(name, des, weight, color, birth, type){
        super(name, des, weight, color, birth, type);
        this.sound = "Snis Snis!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class MiniPig extends Animal{
    constructor(name, des, weight, color, birth, type){
        super(name, des, weight, color, birth, type);
        this.sound = "Oinc oinc!";
    }
    makeSound(){
        alert(this.sound);
    };
};
class Cow extends Animal{
    constructor(name, des, weight, color, birth, type){
        super(name, des, weight, color, birth, type);
        this.sound = "Muuu Muu!";
    }
    makeSound(){
        alert(this.sound);
    };
};
const showAnimalDescription = (button) =>{
    let typeAnimal = button.getAttribute("animaltype");
    let nameAnimal = button.getAttribute("animalname");

    switch(typeAnimal){
        case "dog":
            for (animal in animals[0]) {
                if(animals[0][animal].name == nameAnimal){
                    alert(animals[0][animal].des);
                };
            };
        break;

        case "cat":
            for (animal in animals[1]) {
                if(animals[1][animal].name == nameAnimal){
                    alert(animals[1][animal].des);
                };
            };
        break;
        
        case "rabbit":
            for (animal in animals[2]) {
                if(animals[2][animal].name == nameAnimal){
                    alert(animals[2][animal].des);
                };
            };
        break;

        case "mouse":
            for (animal in animals[3]) {
                if(animals[3][animal].name == nameAnimal){
                    alert(animals[3][animal].des);
                };
            };
        break;

        case "snake":
            for (animal in animals[4]) {
                if(animals[4][animal].name == nameAnimal){
                    alert(animals[4][animal].des);
                };
            };
        break;

        case "mini-pig":
            for (animal in animals[5]) {
                if(animals[5][animal].name == nameAnimal){
                    alert(animals[5][animal].des);
                };
            };           
        break;

        case "cow":
            for (animal in animals[6]) {
                if(animals[6][animal].name == nameAnimal){
                    alert(animals[6][animal].des);
                };
            };            
        break;
    };
};
const showAnimal = (button, aniName) =>{
    let typeAnimal = button.getAttribute("animalType");

    let infoRow = document.querySelector("#animal-info");

    let nameOfAnimal = infoRow.children[0];
    let infoOfAnimal = infoRow.children[1];
    let weightOfAnimal = infoRow.children[2];
    let colorOfAnimal = infoRow.children[3];
    let birthdayOfAnimal = infoRow.children[4];
    let ageOfAnimal = infoRow.children[5];
    let typeOfAnimal = infoRow.children[6];

    switch(typeAnimal){
        case "dog":
            for (animal in animals[0]) {
                if(animals[0][animal].name == aniName){
                    nameOfAnimal.innerHTML = animals[0][animal].name;
                    infoOfAnimal.firstElementChild.innerHTML = "Ver info";
                    infoOfAnimal.firstElementChild.setAttribute("animalname", animals[0][animal].name);
                    weightOfAnimal.innerHTML = animals[0][animal].weight + "kg";
                    colorOfAnimal.style.backgroundColor = animals[0][animal].color;
                    birthdayOfAnimal.innerHTML = animals[0][animal].birth;
                    typeOfAnimal.innerHTML = animals[0][animal].type;
                    infoOfAnimal.firstElementChild.setAttribute("animaltype", animals[0][animal].type);
                    let age = new Date().getFullYear() - new Date(animals[0][animal].birth).getFullYear();
                    ageOfAnimal.innerHTML = age;
                    animalImage.setAttribute("src", `images/dogs/${animals[0][animal].color}.png`);
                };
            };
        break;
        case "cat":
            for (animal in animals[1]) {
                if(animals[1][animal].name == aniName){
                    nameOfAnimal.innerHTML = animals[1][animal].name;
                    infoOfAnimal.firstElementChild.innerHTML = "Ver info";
                    infoOfAnimal.firstElementChild.setAttribute("animalname", animals[1][animal].name);
                    weightOfAnimal.innerHTML = animals[1][animal].weight + "kg";
                    colorOfAnimal.style.backgroundColor = animals[1][animal].color;
                    birthdayOfAnimal.innerHTML = animals[1][animal].birth;
                    typeOfAnimal.innerHTML = animals[1][animal].type;
                    infoOfAnimal.firstElementChild.setAttribute("animaltype", animals[1][animal].type);
                    let age = new Date().getFullYear() - new Date(animals[1][animal].birth).getFullYear();
                    ageOfAnimal.innerHTML = age;
                };
            };
        break;
        case "rabbit":
            for (animal in animals[2]) {
                if(animals[2][animal].name == aniName){
                    nameOfAnimal.innerHTML = animals[2][animal].name;
                    infoOfAnimal.firstElementChild.innerHTML = "Ver info";
                    infoOfAnimal.firstElementChild.setAttribute("animalname", animals[2][animal].name);
                    weightOfAnimal.innerHTML = animals[2][animal].weight + "kg";
                    colorOfAnimal.style.backgroundColor = animals[2][animal].color;
                    birthdayOfAnimal.innerHTML = animals[2][animal].birth;
                    typeOfAnimal.innerHTML = animals[2][animal].type;
                    infoOfAnimal.firstElementChild.setAttribute("animaltype", animals[2][animal].type);
                    let age = new Date().getFullYear() - new Date(animals[2][animal].birth).getFullYear();
                    ageOfAnimal.innerHTML = age;                    
                };
            };
        break;
        case "mouse":
            for (animal in animals[3]) {
                if(animals[3][animal].name == aniName){
                    nameOfAnimal.innerHTML = animals[3][animal].name;
                    infoOfAnimal.firstElementChild.innerHTML = "Ver info";
                    infoOfAnimal.firstElementChild.setAttribute("animalname", animals[3][animal].name);
                    weightOfAnimal.innerHTML = animals[3][animal].weight + "kg";
                    colorOfAnimal.style.backgroundColor = animals[3][animal].color;
                    birthdayOfAnimal.innerHTML = animals[3][animal].birth;
                    typeOfAnimal.innerHTML = animals[3][animal].type;
                    infoOfAnimal.firstElementChild.setAttribute("animaltype", animals[3][animal].type);
                    let age = new Date().getFullYear() - new Date(animals[3][animal].birth).getFullYear();
                    ageOfAnimal.innerHTML = age;
                };
            };
        break;
        case "snake":
            for (animal in animals[4]) {
                if(animals[4][animal].name == aniName){
                    nameOfAnimal.innerHTML = animals[4][animal].name;
                    infoOfAnimal.firstElementChild.innerHTML = "Ver info";
                    infoOfAnimal.firstElementChild.setAttribute("animalname", animals[4][animal].name);
                    weightOfAnimal.innerHTML = animals[4][animal].weight + "kg";
                    colorOfAnimal.style.backgroundColor = animals[4][animal].color;
                    birthdayOfAnimal.innerHTML = animals[4][animal].birth;
                    typeOfAnimal.innerHTML = animals[4][animal].type;
                    infoOfAnimal.firstElementChild.setAttribute("animaltype", animals[4][animal].type);
                    let age = new Date().getFullYear() - new Date(animals[4][animal].birth).getFullYear();
                    ageOfAnimal.innerHTML = age;
                };
            };
        break;
        case "mini-pig":
            for (animal in animals[5]) {
                if(animals[5][animal].name == aniName){
                    nameOfAnimal.innerHTML = animals[5][animal].name;
                    infoOfAnimal.firstElementChild.innerHTML = "Ver info";
                    infoOfAnimal.firstElementChild.setAttribute("animalname", animals[5][animal].name);
                    weightOfAnimal.innerHTML = animals[5][animal].weight + "kg";
                    colorOfAnimal.style.backgroundColor = animals[5][animal].color;
                    birthdayOfAnimal.innerHTML = animals[5][animal].birth;
                    typeOfAnimal.innerHTML = animals[5][animal].type;
                    infoOfAnimal.firstElementChild.setAttribute("animaltype", animals[5][animal].type);
                    let age = new Date().getFullYear() - new Date(animals[5][animal].birth).getFullYear();
                    ageOfAnimal.innerHTML = age;
                };
            };
        break;
        case "cow":
            for (animal in animals[6]) {
                if(animals[6][animal].name == aniName){
                    nameOfAnimal.innerHTML = animals[6][animal].name;
                    infoOfAnimal.firstElementChild.innerHTML = "Ver info";
                    infoOfAnimal.firstElementChild.setAttribute("animalname", animals[6][animal].name);
                    weightOfAnimal.innerHTML = animals[6][animal].weight + "kg";
                    colorOfAnimal.style.backgroundColor = animals[6][animal].color;
                    birthdayOfAnimal.innerHTML = animals[6][animal].birth;
                    typeOfAnimal.innerHTML = animals[6][animal].type;
                    infoOfAnimal.firstElementChild.setAttribute("animaltype", animals[6][animal].type);
                    let age = new Date().getFullYear() - new Date(animals[6][animal].birth).getFullYear();
                    ageOfAnimal.innerHTML = age;
                };
            };
        break;
    }
};


const addAnimalToList = () =>{
    let htmlCode =
    `
    <button onclick="showAnimal(this, this.textContent);" animalType="${animalType.value}">${animalName.value}</button>
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

function validateName(){
    switch(animalType.value){
        case "dog"    :
        if(animals[0].length > 0){
            for(animal in animals[0]){
                if(animalName.value == animals[0][animal].name){
                    alert("Ya existe un perro con ese nombre");
                    return true;
                };
            };
        };
        break;
        case "cat":
        if(animals[1].length > 0){
            for(animal in animals[1]){
                if(animalName.value == animals[1][animal].name){
                    alert("Ya existe un gato con ese nombre");
                    return true;
                };
            };
        };
        break;
        case "rabbit":
        if(animals[2].length > 0){
            for(animal in animals[2]){
                if(animalName.value == animals[2][animal].name){
                    alert("Ya existe un conejo con ese nombre");
                    return true;
                };
            };
        };
        break;
        case "mouse":
        if(animals[3].length > 0){
            for(animal in animals[3]){
                if(animalName.value == animals[3][animal].name){
                    alert("Ya existe un raton con ese nombre");
                    return true;
                };
            };
        };
        break;
        case "snake":
        if(animals[4].length > 0){
            for(animal in animals[4]){
                if(animalName.value == animals[4][animal].name){
                    alert("Ya existe una serpiente con ese nombre");
                    return true;
                };
            };
        };
        break;
        case "mini-pig":
        if(animals[5].length > 0){
            for(animal in animals[5]){
                if(animalName.value == animals[5][animal].name){
                    alert("Ya existe un cerdito con ese nombre");
                    return true;
                };
            };
        };
        break;
        case "cow":
        if(animals[6].length > 0){
            for(animal in animals[6]){
                if(animalName.value == animals[6][animal].name){
                    alert("Ya existe una vaca con ese nombre");
                    return true;
                };
            };
        };
        break;
    }
    return false;
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
    error[0] = false;
    error[0] = validateName();
    return error;
}; 

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let error = getError();

    if(error[0] && error[1] == undefined){
        return false;
    } else if(error[0]){
        alert(error[1]);
    } else{
        switch(animalType.value){
            case "dog":
                const dog = new Dog(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value);
                animals[0].push(dog);
            break;
    
            case "cat":
                const cat = new Cat(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value);
                animals[1].push(cat);
            break;
            
            case "rabbit":
                const rabbit = new Rabbit(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value);
                animals[2].push(rabbit);
            break;
    
            case "mouse":
                const mouse = new Mouse(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value);
                animals[3].push(mouse);
            break;
    
            case "snake":
                const snake = new Snake(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value);
                animals[4].push(snake);
            break;
    
            case "mini-pig":
                const minipig = new MiniPig(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value);
                animals[5].push(minipig);
            break;
    
            case "cow":
                const cow = new Cow(animalName.value, animalDes.value, animalWeight.value, animalColor.value, animalBirth.value, animalType.value);
                animals[6].push(cow);
            break;
        };

        addAnimalToList();

        console.log(animals);
    };
});


