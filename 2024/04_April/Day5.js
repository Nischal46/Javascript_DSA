//simple chatbot
const input = require('readline-sync');

// let ans1 = 'I am fine and what about you?'
// let ans2 = 'I am chatbot.'
// let ans3 = 'Good Bye'


let workout_ans = `exercise regularly, keep healthy and balance diet food and sleep well`

let bool = true;
while(bool){
    // console.log(`
    // 1) Hi, How are you?
    // 2) What is your name?
    // 3) Bye`);
    const chatprompt = input.question('Enter prompt choice: ');

    // switch(chatprompt){
    //     case 1:
    //         console.log(ans1);
    //         break;

    //     case 2:
    //         console.log(ans2);
    //         break;

    //     case 3:
    //         console.log(ans3);
    //         bool = false;
    //         break;

    //     default:
    //         console.log('Give proper input');
    //         break;
    // }

    if(chatprompt.startsWith('how to be fit') || chatprompt.startsWith('provide workout schedule')){
        console.log(workout_ans);
    }

    else if(chatprompt.includes('chest')){
        console.log('do bench press pushup and incline bench press');
    }

    else{
        console.log('Please be specific to workout only, I am capable to answer relate workout only');
    }

    
}

