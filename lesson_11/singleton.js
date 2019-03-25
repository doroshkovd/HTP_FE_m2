const singl1 = {
    name: 'Name'
};

function User(name, age) {
    if (User.instance) {
        return User.instance;
    }
    this.name = name;
    this.age = age;

    User.instance = this;
}
const user2 = new User('Name2', 25);

const user = new User('Name', 23);



console.log(User.instance);