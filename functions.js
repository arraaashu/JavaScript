function Person(first_name,age,last_name) {
    this.first_name= first_name;
    this.age= age;
    this.last_name=last_name;
    this.name = () => {
        console.log(this.first_name+this.last_name);
    }
}

const obj = new Person("Aashritha",24,"Arra");
obj.name();
