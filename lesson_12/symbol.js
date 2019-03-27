// SYMBOL
const role = Symbol('role');
export const getUsers =() => {
    const userS = {
        id: 1,
        name: 'Administrator',
        [role]: 'admin',
    };
    console.log(userS[role]);
    userS[role] = 'Guest';
    return userS;
};

// Iterators

const table = {
  apple: 1,
  tomate: 2,
  oil: 3,
};

table[Symbol.iterator] = () => {
    let keys = Object.keys(table).sort();
    let index = 0;
    return {
        next: () => {
            return {value: keys[index], done: index++ >= keys.length};
        }
    }
};

for (let item of table) {
    console.log(item);
}


// GENERATORS
function* list(value) {
    for (let item of value) {
        yield item;
    }
}

const iterator = list([2, 3 , 5]);
console.log(iterator.next().value);

