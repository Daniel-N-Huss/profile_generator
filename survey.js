const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};


rl.question('What name or nickname do you go by? ', (answer) => {
  profile.name = answer;
  console.log(`Got it, ${answer}!`);
  
  rl.question('What\'s your favorite hobby? ', (answer) => {
    profile.hobby = answer;
    console.log(`I also love ${answer}!`);
  
    rl.question(`What music do you listen to while you're ${profile.hobby} `, (answer) => {
      profile.music = answer;
      console.log(`${answer} has a cool sound.`);

      rl.question('What mealtime is your favorite? (Breakfast? Lunch? Dinner? Another?) ', (answer) => {
        profile.favMealTime = answer;
        console.log(`${answer}? Breakfast is my favorite.`);

        rl.question(`What's the best thing to eat at ${profile.favMealTime}? `, (answer) => {
          profile.favMeal = answer;
          console.log(`Got a recipie for ${answer} you can share?`);

          rl.question('Favorite sport? Esport? ', (answer) => {
            profile.sport = answer;
            console.log(`${answer} is a great game!`);

            rl.question('Tell me a quirky fact about you! ', (answer) => {
              profile.quirky = answer;
              console.log(`Thank you for your valuable feedback: ${answer}`);

              console.log(`\n \n Let me introduce you to my new friend ${profile.name}.

  ${profile.name} loves ${profile.hobby}, and thinks it's even better when listening to ${profile.music}.

  ${profile.name} love ${profile.favMealTime}, and love eating ${profile.favMeal} for it. 

  ${profile.favMeal} is even better after an intense game of ${profile.sport}, which ${profile.name} plays religiously.

  But most importantly, a quirky fact about ${profile.name}: ${profile.quirky} \n \n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});






/*
questions:

x Name / nickname
x Favorite hobby
x What kind of music pairs well with your hobby?
x Favorite meal time? (Breakfast, lunch, dinner?)
x Favorite food for that meal?
What is your favorite sport? (Esports included!)
What is a quirky fact about you?

*/