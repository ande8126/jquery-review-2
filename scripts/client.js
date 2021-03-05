$( document ).ready( onReady );
let zoo = [];

function onReady() {
    //button click
    $( '#addAnimalButton' ).on( 'click', addAnimal )
}//end onReady

function addAnimal(){
    console.log( 'in addAnimal' );
    //push animal into zoo
    zoo.push( $('#animalIn' ).val());
    $( '#animalIn' ).val( '' );
    //update DOPM<
    updateAnimals();
}//end addAnimal

function updateAnimals(){
    //target ul by id
    let el = $( '#animalsOut' );
    //empty list
    el.empty();
    //loop thru the zoo
    for ( let i=0; i<zoo.length; i++ ) {
    //append each animal to the DOM
        el.append( `<li>${zoo[i]}</li>`);
    }//end updateAnimals



}//end updateAnimals