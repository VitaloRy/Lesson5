
const sleep = (ms) => new Promise ((resolve) => setTimeout(resolve , ms ));
    

const cookDinner = async () => {
    try {
        const isGasOn = true
        if (!isGasOn) throw new Error ("ГАза нету!")

    console.log("Включаю плиту....1");
    await sleep (1000);

    console.log("Режу овощи....2");
    await sleep (2000);

    console.log("Варю суп...3");
    await sleep (3000); 
    }
    catch (err){
    console.log("Ошибка на кухне нету газа")
};
}
cookDinner()