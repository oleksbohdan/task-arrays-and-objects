console.log('Task 1.');
let animal = {
  name: 'Cheetah',
  weight: 50,
  age: 7,
  averageSpeed: 40,

  timeForDistance: function (distance) {
    if(typeof distance === 'number' && !isNaN(distance) && distance > 0){
      let time = {};
      time.hours = distance / this.averageSpeed;
      if(time.hours > 12){
        time.days = Math.floor(time.hours / 12);
        time.hours = time.hours % 12;
      }
      let line = '';
      if(time.days){
        line += `${time.days} day(s) and `;
      }
      if(time.hours){
        line += time.hours;
      }
      else{
        line += 0;
      }
      line += ' hour(s).';
      return line;
    }
  },

  specifyName: function (newName, ifConcat) {
    if(ifConcat){
      this.name += '' + newName;
    }
    else{
      this.name = newName;
    }
  },

  toString: function () {
    let line = `${this.name}, weight: ${this.weight} kg., age: ${this.age} years, average speed: ${this.averageSpeed}km/h.`;
    return line;
  }
};

console.log(animal.toString());
let distance = 1000;
console.log(`${animal.name} covers distance of ${distance} km. in ${animal.timeForDistance(distance)}`);
animal.specifyName(', lat. Acinonyx', true);
console.log('After specifying name');
console.log(animal.toString());



let figure = {
  length: 15,
  width: 20,

  getArea: function () {
    return this.length * this.width;
  },

  getPerimeter: function () {
    return 2 * this.length + 2 * this.width;
  },

  setHeight: function (height) {
    if(typeof height === 'number' && !isNaN(height) && height > 0){
      this.height = height;
    }
  },

  setName: function (nameToSet) {
    if (typeof nameToSet === 'string'){
      this.name = nameToSet;
    }
  },

  lengthsInMetres: function () {
    let obj = Object.assign({}, this);
    obj.width /= 100;
    obj.length /= 100;
    if(obj.height) obj.height /= 100;
    return obj;
  }
};

console.log('Task 2.');
console.log(figure);
console.log(`Area of the figure: ${figure.getArea()} cm^2.`);
console.log(`Perimeter of the figure ${figure.getPerimeter()} cm.`);
figure.setHeight(10);
figure.setName('Parallelepiped');
console.log('After setting height and name -> ');
console.log(figure);
console.log('After converting lengths to metres -> ');
console.log(figure.lengthsInMetres());


let list = {
  cola: {
    count: 3,
    price: 17,
    buy: false,
    outOfStore: false
  },

  pizza: {
    count: 2,
    price: 53,
    buy: true,
    outOfStore: false
  },

  pistachios: {
    count: 1,
    price: 130,
    buy: false,
    outOfStore: true
  },

  lemon: {
    count: 5,
    price: 7,
    buy: false,
    outOfStore: true
  },

  tea: {
    count: 4,
    price: 3,
    buy: true,
    outOfStore: false
  },

  printAvailableFirst: function () {
    let flags = [true, false];
    for(let flag in flags) {
      for(let each in this){
        if(typeof this[each] === 'object' && this[each].hasOwnProperty('outOfStore')){
          if(this[each].outOfStore !== flags[flag]){
            console.log(`${each} is ${flags[flag] ? 'available in the market' : 'not available in the market'}`);
          }
        }
      }
    }
  },

  printBought: function () {
    let bought = 'Bought: ';
    for(let each in this){
      if(typeof this[each] === 'object' && this[each].hasOwnProperty('buy') && this[each].buy === true){
        bought += each + ' ';
      }
    }
    console.log(bought);
  },

  buyProduct: function (prodName) {
    if(typeof prodName === 'string' && this.hasOwnProperty(prodName)){
      if(this[prodName].hasOwnProperty('outOfStore') && this[prodName].outOfStore !== true){
        if(this[prodName].hasOwnProperty('buy')){
          if(this[prodName].buy === false){
            this[prodName].buy = true;
            console.log(`${prodName} bought.`);
          }
          else if(this[prodName].buy === true){
            console.log(`${prodName} already bought.`)
          }
        }
      }
      else{
        console.log(`${prodName} is not available in the market.`)
      }
    }
    else{
      console.log(`${prodName} not found.`)
    }
  },

  totalSum: function () {
    let sum = 0;
    for(let item in this){
      if(typeof this[item] === 'object' && this[item].hasOwnProperty('buy') && this[item].buy === true){
        if(this[item].count && this[item].price){
          sum += this[item].count * this[item].price;
        }
      }
    }
    return sum;
  },

  increaseByOne: function (prodName) {
    if(typeof prodName === 'string' && this.hasOwnProperty(prodName) && this[prodName].hasOwnProperty('count')){
      this[prodName].count++;
    }
  },

  decreaseByOne: function (prodName) {
    if(typeof prodName === 'string' && this.hasOwnProperty(prodName) && this[prodName].hasOwnProperty('count')){
      if(this[prodName].count > 0){
        this[prodName].count--;
      }
      else{
        console.log("Cannot be less than 0.")
      }
    }
  }
};

console.log('Task 3.');
console.log('Shopping list: ');
list.printAvailableFirst();
console.log('');
list.printBought();
console.log('');
console.log('Buying cola....');
list.buyProduct('cola');
list.printBought();
console.log('');
console.log('Total purchase price: ' + list.totalSum());
list.increaseByOne('cola');
console.log('Total purchase price after buying one more cola 17 uah per unit: ' + list.totalSum());
list.decreaseByOne('cola');
list.decreaseByOne('cola');
console.log('Total purchase price after removing 2 units of cola 17 uah per unit: ' + list.totalSum());
console.log('Removing three units of cola');
list.decreaseByOne('cola');
list.decreaseByOne('cola');
list.decreaseByOne('cola');


let users =[
  {
    name: "Yura",
    age: 55,
    hobby: ["films", "games", "hiking"],
    type: "Admin"
  },
  {
    name: "Serhiy",
    age: 37,
    hobby: ["films", "games", "skydiving"],
    type: "Ordinary"
  },
  {
    name: "Vasyl",
    age: 24,
    hobby: ["films", "games", "hiking"],
    type: "Admin"
  },
  {
    name: "Victor",
    age: 40,
    hobby: ["films", "bowling", "soccer"],
    type: "Ordinary"
  },
  {
    name: "Ihor",
    age: 32,
    hobby: ["paintball", "games", "hiking"],
    type: "Ordinary"
  },
];

function getAdmins(users){
  let admins = [];
  users.forEach(function (element) {
    if(typeof element === 'object' && element.hasOwnProperty('type') && element.type.toLowerCase() === "admin"){
      admins.push(element);
    }
  });
  return admins;
}

function averageAge(users){
  let totalAge = [0, 0];
  users.forEach(function (element) {
    if(typeof element === 'object' && element.hasOwnProperty('age') && typeof element.age === 'number'){
      totalAge[0] += element.age;
      totalAge[1]++;
    }
  });
  return totalAge[0] / totalAge[1];
}

function uniqueHobbies(users){
  let hobbiesList = [];
  for(let user in users){
    if(ifContainsHobbies(users[user])){
      let userHobbies = users[user].hobby;
      for(let hobby in userHobbies){
        let flagUnique = true;
        let thisHobby = userHobbies[hobby];
        for(let userToCompare in users){
          if(userToCompare === user) continue;
          if(ifContainsHobbies(users[userToCompare])) {
            if (users[userToCompare].hobby.includes(thisHobby)) {
              flagUnique = false;
              break;
            }
          }
        }
        if(flagUnique) hobbiesList.push(thisHobby);
      }
    }
  }
  return hobbiesList;

  function ifContainsHobbies(item) {
    if(typeof item === 'object' && item.hasOwnProperty('hobby') && Array.isArray(item.hobby)){
      return true;
    }
    else{
      return false;
    }
  }
}

console.log('Task 4.');
console.log('Admins ->');
console.log(getAdmins(users));
console.log('Users average age ' + averageAge(users) + ' years');
console.log('Unique hobbies listing ->');
console.log(uniqueHobbies(users));