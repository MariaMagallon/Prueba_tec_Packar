//funcion para realizar la consulta mediante fetch a la url dada por la API.
export const getURL = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search`
    );
    const json = await response.json();
    
    return json[0].url;

};
//version 1 de la funcion FizzBuzz. Uso de sentencias if para preguntar qyue condicion cumple cada valor del array numerico. 
// Output en el que por cada numero se escribe Fizz, Buzz o FizzBuzz
export const FizzBuzz =  (numbers) => {
    for(let i=1; i<=100; i++){
        if((numbers[i] % 15) == 0){
            console.log("FizzBuzz: "+numbers[i]);
        }else if ((numbers[i] % 3) == 0) {
            console.log("Fizz: "+numbers[i]);
        }else if((numbers[i] % 5) == 0) {
            console.log("Buzz: "+numbers[i]);
        }
      }
    

};
//version 2 de la funcion FizzBuzz. Output en el que siguida de la palabra correspondiente a cada condición sale el array de numeros que la cumple. 
//Ex: Fizz: 3, 9, 12... 
// Funcion Concatenator que escribe cada sentencia del output que recibe una bandera, una string cabecera y el valor numerico actual que esta recorriendo el for. 
// Usamos una bandera (firstime) para evitar añadir una coma cuando el numero analizado sea el primera en cumplir cada condicion
export const Concatenator =(firstime, stringp, number)=>{
    
    if(firstime==true){
        
        stringp = stringp+number;
    }else{
        stringp = stringp+', '+number;
    }
    return stringp;
    
}
//Funcion Principal. Uso de sentencias if para preguntar qyue condicion cumple cada valor del array numerico recorrido por el for. 
export const FizzBuzz2 =  (numbers) => {
    let stringp15="FizzBuzz: ";
    let firstime15=true;
    let stringp3="Fizz: ";
    let firstime3=true;
    let stringp5="Buzz: ";
    let firstime5=true;
    for(let i=1; i<=100; i++){
        if((numbers[i] % 15) == 0){
           stringp15= Concatenator(firstime15, stringp15, numbers[i]);
            if(firstime15==true){
                firstime15=false;
            }
           
        }else if ((numbers[i] % 3) == 0) {
           stringp3= Concatenator(firstime3, stringp3, numbers[i]);
            if(firstime3==true){
                firstime3=false;
            }
        }else if((numbers[i] % 5) == 0) {
           stringp5= Concatenator(firstime5, stringp5, numbers[i]);
            if(firstime5==true){
                firstime5=false;
            }
        }
      }
      
      console.log(stringp3);
      console.log(stringp5);
      console.log(stringp15);
    

};
