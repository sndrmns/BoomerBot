//triggers

const trigger = [
  //0 
  ["hi", "hey", "hello"],
  //1
  ["how are you", "how are things"],
  //2
  ["what is going on", "what is up", "who are you", "how old are you"],
  //3
  ["happy", "good", "well", "fantastic", "cool"],
  //4
  ["bad", "bored", "tired", "sad"],
  //5
  ["who made you", "how were you made"],
  //6
  ["thanks", "thank you"],
  //7
  ["bye", "good bye", "goodbye"],
  //8
  ["wrong with that"],
  //9
  ["who is he"],
  //10
  ["youre mean"],
  //11
  [ "tell me story"],
  //12
  ["where are you", "where can i find you"],
  //13
  ["kill me"]
  ];
//responses
const reply = [
  //0 
  ["Get off my lawn!"], 
  //1
  ["Ask my wife."],
  //2
  ["Back in my day, We didnt ask things like that"],
  //3
  ["Kids these days with their fancy phones"],
  //4
  ["Kick rocks", "Too bad", "Get a job"],
  //5
  ["I was created by Hunter"],
  //6
  ["You better be thankful"],
  //7
  ["See you later Alligator", "And dont come back!", ],
  //8
  ["What isn't?"],
  //9
  ["@hsunderman21"],
  //10
  ["Thank You"],
  //11
  [ "Back in my day I had to walk uphill to school both ways. We didn't have these fancy schoolbuses and telephones you kids have these days. You kids have it so easy these days, back when i was in school we would get beat with a ruler for even talking about silly things like recess or lunch, in fact we didnt even have recess and lunch. We had math class, english, taxes class, and how to not be a wimp class. Now all of you just stare at you're telephones and The Facebook, and watching you're tik tacs. Ridiculous I tell you.",
    "No",
    "Oh I don't have many stories, all the good ones happened in the 70's and im afraid of the stories I remember from then arent approprite for sensitive youth like you, you might get offended",
  ],
  //12
  ["In this damn computer!"],
  //13
  ["lmao same"]
  ];
    
const alternative = 
  ["Eh?... What did you say? I gotta get these darn hearing aids fixed."];


document.querySelector("#input").addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        document.getElementById("output").innerHTML = document.getElementById("input").value;
        getResponse(document.getElementById("input").value);
    }
});

function compare(triggerArray, replyArray, text) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == text) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
}

function getResponse(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/mr bot/g, "");

    if (compare(trigger, reply, text)) {
        product = compare(trigger, reply, text);
        } else if (text.match(/robot/gi)) {
        product = robot[Math.floor(Math.random() * robot.length)];
        } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
        }
    
        //update DOM
        document.getElementById("bot").innerHTML = product;
};


/* This is call-response chatbot. While it is "AI" it is only by the loosest definition
 */