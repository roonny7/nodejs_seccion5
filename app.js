const { mostrarMenu } = require('./helpers/mensajes');
const { inquirerMenu, pausa} = require ('./helpers/inquirer');
require('colors');

console.clear();


const main = async() => {
    
    console.log("hola mundo");
    mostrarMenu();

    let opt = '';
    
    do {
    
      opt = await inquirerMenu();
      console.log({opt});

      await pausa();
          
    }while ( opt !== '0');


   //pausa(); 


}


main();