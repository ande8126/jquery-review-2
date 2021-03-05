$( document ).ready( onReady );
let zoo = [];

function onReady() {
    //button click
    $( '#addAnimalButton' ).on( 'click', addAnimal );
    $( '#toggleInputButton').on('click', toggleInput );
    $( '#toggleOutputButton').on('click', toggleOutput );
    //click handlers for dynamically created els
    $( '#animalsOut' ).on('click', '#animalLi', animalClick );
    //$( '#toggleOutputButton').on('click', toggleOutput );
}//end onReady

function addAnimal(){
    console.log( 'in addAnimal' );
    //if text is empty, flash
    if( $( '#animalIn' ).val() === '' ) {
        $( '#input' ).fadeOut( 200 ).fadeIn( 200 );
    }//end no animal entered
    else{ 
        //else push animal into zoo
        zoo.push( $('#animalIn' ).val());
        $( '#animalIn' ).val( '' );
        //update DOM
        updateAnimals();
        }//end else
}//end addAnimal

function updateAnimals(){
    //target ul by id
    let el = $( '#animalsOut' );
    //empty list
    el.empty();
    //loop thru the zoo
    for ( let i=0; i<zoo.length; i++ ) {
    //append each animal to the DOM
        el.append( `<li id="animalLi" >${zoo[i]}</li>`);
    }//end for

}//end updateAnimals

function animalClick(){
    console.log( 'in animalClick' );

}

function toggleInput(){
    console.log('in toggleInput');
    $( '#input' ).toggle();
}

function toggleOutput(){
    console.log('in toggleOutput');
    $( '#output' ).toggle();
}//end toggleOutput
