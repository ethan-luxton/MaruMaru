'use strict';

const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

const { CAT_EVENT_NAMES, HUMAN_EVENT_NAMES } = require('../utils')

function handleMeow(ioClient){
    
console.log("Human: Hi, Maru are you hungry? do you want to play? do you need your liter cleaned? or you want affection?");
// human needs to respond to marus need


}

function humanFeed(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    ioClient.emit(HUMAN_EVENT_NAMES.feed);
    console.log("you fed the Maru");
}

function play(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    console.log('helllllllllllllllllo')
    
    console.log("You decided to play with Maru");
}

function cleanLitter(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    ioClient.emit(HUMAN_EVENT_NAMES.cleanLitter)
    console.log("You seen you had to clean up the poop");
}

function pet(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    ioClient.emit(HUMAN_EVENT_NAMES.pet)
    console.log("You pet Maru");
}

function startHuman(ioClient){
    
        ioClient.on(CAT_EVENT_NAMES.randomMeow, (payload) => {
            console.log(payload)
            console.log("Type: Play, pet, feed, clean litter")
            
            // prompt(
                
            //     ["What does Maru want? "]
            //     ).then((answers) => {
            //     if (answers.toLowerCase() === "play") {
            //         ioClient.emit(HUMAN_EVENT_NAMES.play, input)
            //     }
            // })
            
            

            // Marus random meow will always hit this listener
            // This is where we need multiple choice to appear on the console
            // The user types a guess
            // Then emits back to hub
            // Hub evaluates emit for correctness
            // Let player/maru know result


        });
  
    
}

module.exports = { startHuman };
