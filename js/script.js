(function()
{
    
    function Question (question, answers, correct)
    {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.print = function()
    {
        console.log(this.question);
        this.answers.forEach((v,i) => console.log(i + ': ' +v));
    }

    Question.prototype.check = function(userAnswer)
    {
        let correct;
        if (userAnswer === this.correct) 
        {
            console.log("Correct Answer!");
            correct = true;
        }
        else
        {
            console.log("Incorrect Answer! Try Again!");
            correct = false;
        } 
        this.printScore(score(correct));
    }

    Question.prototype.printScore = function(score)
    {
        console.log("Your score: " + score);
        console.log('-----------------------');
    }

    function quiz()
    {
        let randomQues = Math.floor(Math.random()*arrQues.length);
        arrQues[randomQues].print();
        let userAnswer = prompt("Please select the correct answer by typing the number:\nType 'exit' to quit!");
        if (userAnswer !== 'exit') 
        arrQues[randomQues].check(parseInt(userAnswer));
        else
        cont = false;
    }

    function innitScore()
    {
        let innitsc = 0;
        return function(correct)
        {
            if (correct) innitsc++;
            return innitsc;
        }
    }

    let ques1 = new Question ("If you pass the second-place runner in a race, what place will you be in?", ["Third", "First", "Second"], 2);
    let ques2 = new Question ("Mary's father had five children: Mimi, Mumu, Mama, Meme...and what was the fifth child's name?",["Mary", "Momo", "Marie"],0);
    let ques3 = new Question ("How could the 22nd and 24th U.S. Presidents have the same parents, but not be brothers?",["They were sisters", "It was the same person", "The parents were cheating"],0);
    let ques4 = new Question ("What is as light as a feather, but even the strongest man cannot hold it for more than a few minutes?",["A feather","His breath", "A smile"],1);
    let ques5 = new Question ("On my way to the fair, I met seven jugglers and a bear. Every juggler had six cats, every cat had five rats, every rat had four houses, every house had three mice, every mouse had two lice, and every louse had a spouse. How many in all are going to the fair?", ["Just me - the others were coming out of the fair","Don't know, I wasn't counting","Too many to count"],0);
    let ques6 = new Question ("Imagine you are in a sinking rowboat surrounded by sharks. How would you survive?",["Stop imagining","You couldn't - the sharks would eat you","Fly away in a helicopter"],0);
    let ques7 = new Question ("A man left home running. He ran for a bit, then turned left, ran the same distance, then turned left again. Then he ran the same distance and turned left once again. When he got home, there were two masked men. Who were they?",["The catcher and the umpire","Robbers","Undercover police"],0);
    let ques8 = new Question ("There was an airplane crash. Every single person died, but two people survived. How is this possible?",["The two were saved by others","They were married","They were not on the airplane"],1);
    let ques9 = new Question ("The Mississippi River is the dividing line between Tennessee and Arkansas. If an airplane crashed exactly in the middle of the Mississippi River there, where would the survivors be buried?",["Whatever side of the river the people were on","Nowhere - you don't bury survivors","In the town of their birth"],1);
    let ques10 = new Question ("How far can you walk into the woods?",["As far as you want","All the way and then back out again","Halfway"],2);
    
    let arrQues = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10];
    
    let score = innitScore();
    let cont = true;
    while (cont)
    {
        quiz();
    }
})();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/