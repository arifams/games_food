//first question if user vegetarian
var answer = prompt("Are you vegetarian? yes or no?").toUpperCase();

//answer if user vegetarian, consist with question Tofu, Egg or Carrot
var userYes = prompt ("YES. Now please choose: Tofu, Egg or Carrot").toUpperCase() ;
switch (userYes) {
    case 'TOFU':
        var curry = prompt("Do you like curry tofu! (YES or NO)?").toUpperCase();
        var spicy = prompt("Do you like spicy tofu?").toUpperCase();
        if(curry === 'YES' || spicy === 'YES') {
            console.log("There are really nice spicy tofu from Thai food recipe, here you go!");
        } else {
            console.log("You're not brave enough for spicy tofu? Well, if you have enough courage, you probably wouldn't have tried to fight a troll. You lose! Try another food :P");
        }
        break;
    case 'EGG':
        var egg = prompt("All right, you choose the eggs. Do you have any money (YES or NO)?").toUpperCase();
        var fried = prompt("Do you like fried egg (YES or NO)?").toUpperCase();
        if(egg === 'YES' && fried === 'YES') {
            console.log("Great! I'm gonna show you how to fry really fancy egg here.");
        } else {
            console.log("Dang! We should try another way next time!");
        }
        break;
    case 'CARROT':
        var fast = prompt("Let's book it! Do you like carrot cake (YES or NO)?").toUpperCase();
        var headStart = prompt("Do you have an oven?").toUpperCase();
        if(fast === 'YES' || headStart === 'YES') {
            console.log("Let's start to bake, awesome!");
        }
        else {
            console.log("Keep dreaming buddy...");
        }
        break;
    default:
        console.log("I didn't understand your choice. Hit Run and try again, this time picking TOFU, EGG, or CARROT!");
}