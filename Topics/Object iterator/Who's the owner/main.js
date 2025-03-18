function switchTheValues(cats) {
    for (let pet of cats) {
        let placeHolder = pet.owner;
        pet.owner = pet.name;
        pet.name = placeHolder;
        console.log(`${pet.owner} has a cat named ${pet.name}, whose breed is ${pet.breed}`);
    }
}
//
// let pets = [
//     {
//     name: "Murzik",
//     breed: "Persian",
//     owner: "John",
//     }
// ];
//
// console.log(pets[0].name);
//
//
