export default class Class{
    name = "";
    number = "";
    description = "";

    constructor(name, number, description){
        this.name = name;
        this.number = number;
        this.description = description;
    }

    setName(name){
        console.log(name)
        this.name = name;
    }

    getName(){
        return this.name;
    }    

    setNumber(number){
        this.number = number;
    }

    getNumber(){
        return this.number;
    }  

    setDescription(description){
        this.description = description;
    }

    getDescription(){
        return this.description;
    }    
}