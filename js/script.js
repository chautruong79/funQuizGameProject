/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
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
        if (userAnswer == this.correct) console.log("Correct Answer!");
        else console.log("Incorrect Answer! Try Again!");
    }

    let ques1 = new Question ("If you pass the second-place runner in a race, what place will you be in?", ["Third", "First", "Second"], 2);
    let ques2 = new Question ("Mary's father had five children: Mimi, Mumu, Mama, Meme...and what was the fifth child's name?",["Mary", "Momo", "Marie"],0);
    let ques3 = new Question ("How could the 22nd and 24th U.S. Presidents have the same parents, but not be brothers?",["They were sisters", "It was the same person", "The parents were cheating"],0);

    let arrQues = [ques1,ques2,ques3];
    let randomQues = Math.floor(Math.random()*arrQues.length);
    arrQues[randomQues].print();
    let userAnswer = prompt("Please select the correct answer by typing the number:");
    arrQues[randomQues].check(userAnswer);
})();