/**
 * Created by Hunter on 3/9/2015.
 */
// define([]/* dependent module list */, function to return object)
// with dependency
define(['animal', 'cat'], function(animal, cat){
    return {
        animal: animal,
        cat: cat,
        type: "dog",
        sound: function() {
            console.log("Make a sound from dog.");
        }
    }
});