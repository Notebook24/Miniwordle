const fiveLetterWords = [
  "admit", "along", "audio", "adopt", "alter", "audit", "adult", "among", "avoid",
  "after", "anger", "award", "again", "angle", "aware", "agent", "angry", "badly",
  "ahead", "apple", "bases", "basic", "album", "arena", "basis", "board", "boost",
  "buyer", "cable", "chain", "chair", "chart", "cheap", "check", "chest", "chief",
  "child", "class", "clean", "clear", "clock", "close", "coach", "coast", "could",
  "count", "court", "death", "delay", "depth", "doing", "doubt", "dozen", "draft",
  "drama", "drawn", "dream", "dress", "drill", "drink", "drive", "drove", "dying",
  "eager", "early", "earth", "eight", "elite", "empty", "enemy", "enjoy", "enter",
  "equal", "error", "event", "every", "exact", "exist", "extra", "faith", "false",
  "fault", "fibre", "field", "fifth", "fight", "final", "first", "fixed", "flash",
  "fleet", "floor", "fluid", "force", "forth", "found", "frame", "fresh", "front",
  "fruit", "fully", "funny", "giant", "glass", "globe", "given", "grace", "grade",
  "grain", "grant", "grass", "great", "green", "group", "guest", "happy", "harry",
  "heart", "hence", "horse", "hotel", "human", "ideal", "image", "inner", "input",
  "judge", "known", "local", "metal", "media", "might", "money", "mouth", "night",
  "noise", "north", "ocean", "occur", "often", "order", "other", "ought", "owner",
  "party", "patch", "paths", "pupil", "quest", "quick", "quiet", "quite", "radio",
  "raise", "range", "rapid", "reach", "react", "ready", "realm", "reach", "reply",
  "river", "round", "route", "saber", "salad", "scale", "scene", "scope", "score",
  "sense", "serve", "seven", "shall", "shape", "share", "shift", "shock", "shone",
  "shook", "short", "shown", "sight", "since", "skill", "sleep", "smile", "smith",
  "smoke", "sound", "south", "space", "speak", "speed", "spend", "spent", "split",
  "spoke", "sport", "stand", "start", "state", "steam", "steel", "stick", "still",
  "stock", "stone", "stood", "store", "storm", "story", "stove", "study", "stuff",
  "style", "sugar", "sweat", "sweep", "swift", "swing", "table", "taken", "takes",
  "talks", "tanks", "tapes", "tasks", "taste", "teach", "teams", "tears", "teeth",
  "tells", "thank", "their", "theme", "there", "these", "thick", "thief", "thing",
  "think", "third", "those", "three", "throw", "tight", "timer", "times", "tired",
  "title", "toast", "today", "token", "tones", "tools", "tooth", "topic", "total",
  "touch", "tough", "tower", "towns", "trace", "track", "trade", "train", "treat",
  "trees", "trend", "trial", "tribe", "trick", "tried", "tries", "trips", "truck",
  "truly", "trust", "truth", "tubes", "turns", "tutor", "tweet", "twice", "twins",
  "twist", "types", "ultra", "uncle", "under", "union", "unite", "units", "unity",
  "until", "upper", "upset", "urban", "urged", "usage", "users", "using", "usual",
  "vague", "valid", "value", "valve", "vapor", "vault", "veins", "venue", "verse",
  "video", "views", "villa", "virus", "visas", "visit", "vital", "vivid", "vocal",
  "voice", "wages", "wagon", "waist", "walks", "walls", "wants", "warns", "waste",
  "watch", "water", "waves", "wears", "weeds", "weeks", "weigh", "weird", "wells",
  "whale", "wheat", "wheel", "where", "which", "while", "white", "whole", "whose",
  "wider", "width", "winds", "wines", "wings", "wiped", "wired", "wires", "witch",
  "wives", "woman", "women", "woods", "words", "works", "world", "worms", "worry",
  "worse", "worst", "worth", "would", "yacht", "yards", "years", "yeast", "yield",
  "young", "yours", "youth", "yummy", "zebra", "zesty", "zilch", "zippy"
];


const guessOne = document.getElementById("guessOne");
const guessTwo = document.getElementById("guessTwo");
const guessThree = document.getElementById("guessThree");
const guessFour = document.getElementById("guessFour");
const guessFive = document.getElementById("guessFive");
const guessSix = document.getElementById("guessSix");
const attempt = document.getElementById("attempt");
const button = document.getElementById("button");
const gameStatus = document.getElementById("gameStatus");

let attemptNumber = 0;
let answer;
let correctAnswer;
let outcome;
let answerInList = false;
let notYetAnswered = true;
let answers = [];

correctAnswer = fiveLetterWords[Math.floor(Math.random() * 100)];

attempt.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        button.click();
    }
});

button.onclick = function(){
    answer = attempt.value;
    answer = answer.toUpperCase();
    correctAnswer = correctAnswer.toUpperCase();

    if (answer.length != 5){
        gameStatus.style.display = "block";
        gameStatus.textContent = "Answer must be 5 letters";
    }
    else{
        for(let j = 0; j < fiveLetterWords.length; j++){
            if (answer == fiveLetterWords[j].toUpperCase()){
                answerInList = true
            }
        }

        for(let j = 0; j < answers.length; j++){
            if (answer == answers[j]){
                notYetAnswered = false
            }
        }
        
        if (answerInList && notYetAnswered){
            attemptNumber++;
            button.style.borderColor = "white";
            gameStatus.style.display = "none";
            gameStatus.textContent = "";
            answers.push(answer);

            let freq = {};
            for (let i of correctAnswer){
                freq[i] = (freq[i] || 0) + 1;
            }

            let listOutcome = [];

            for (let i = 0; i < 6; i++){
                outcome = document.createElement("span");
                outcome.textContent = answer[i];
        
                if (answer[i] === correctAnswer[i]){
                    outcome.style.color = "green";
                    freq[answer[i]]--;
                }

                if (attemptNumber == 1){
                    guessOne.appendChild(outcome);
                }
                else if (attemptNumber == 2){
                    guessTwo.appendChild(outcome);
                }
                else if (attemptNumber == 3){
                    guessThree.appendChild(outcome);
                }
                else if (attemptNumber == 4){
                    guessFour.appendChild(outcome);
                }
                else if(attemptNumber == 5){
                    guessFive.appendChild(outcome);
                }
                else{
                    guessSix.appendChild(outcome);
                }

                if (i == 4){
                    outcome.style.letterSpacing = "0px";
                }

                listOutcome.push(outcome);
            }
            
            for (let i = 0; i < 6; i++){
                if (answer[i] == correctAnswer[i]){
                    continue;
                }

                outcome = document.createElement("span");
                outcome.textContent = answer[i];
                
                if (correctAnswer.includes(answer[i]) && freq[answer[i]] > 0){
                    outcome.style.color = "orange";
                    freq[answer[i]]--;
                }
                else{
                    outcome.style.color = "red";
                }

                if (i == 4){
                    outcome.style.letterSpacing = "0px";
                }
        
                if (attemptNumber == 1){
                    guessOne.replaceChild(outcome,listOutcome[i]);
                }
                else if (attemptNumber == 2){
                    guessTwo.replaceChild(outcome,listOutcome[i]);
                }
                else if (attemptNumber == 3){
                    guessThree.replaceChild(outcome,listOutcome[i]);
                }
                else if (attemptNumber == 4){
                    guessFour.replaceChild(outcome,listOutcome[i]);
                }
                else if (attemptNumber == 5){
                    guessFive.replaceChild(outcome,listOutcome[i]);
                }
                else{
                    guessSix.replaceChild(outcome,listOutcome[i]);
                }
            }

            if (attemptNumber == 1){
                guessOne.style.display = "block";
            }
            else if (attemptNumber == 2){
                guessTwo.style.display = "block";
            }
            else if (attemptNumber == 3){
                guessThree.style.display = "block";
            }
            else if (attemptNumber == 4){
                guessFour.style.display = "block";
            }
            else if (attemptNumber == 5){
                guessFive.style.display = "block";
            }
            else if (attemptNumber == 6){
                guessSix.style.display = "block";
            }

            if (answer == correctAnswer){
                gameStatus.style.display = "block";
                gameStatus.style.color = "lightgreen";
                gameStatus.textContent = "You Guessed the Word, It's \"" + correctAnswer + "\"!";
                attempt.style.display = "none"
            }

            if (attemptNumber == 6 && answer != correctAnswer){
                gameStatus.style.display = "block";
                gameStatus.textContent = "Game Over! The word is \"" + correctAnswer + "\"!";
                attempt.style.display = "none"
            }
        }
        else if (!answerInList){
            gameStatus.style.display = "block";
            gameStatus.textContent = "Answer not in List";
        }
        else{
            gameStatus.style.display = "block";
            gameStatus.textContent = "Answer has already been entered";
        }
        answerInList = false;
        notYetAnswered = true;
        attempt.value = "";
    }
}
