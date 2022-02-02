// Your Code Here

let userName = window.prompt('Please enter your name: ')
let userScore = 0
let continueGame = true

//whole game
function playGame()
{
    userScore = 0

    //ask all questions from questions.js
    for (let i = 0; i < questions.length; i++) 
    {
        let question = questions[i]
        let userAnswer
        let validAnswer = false

        //repeat till given valid answer
        while (!validAnswer){
            //ask question
            userAnswer = window.prompt(question.text)
            let validAnswers = ['A','B','C','D']
            userAnswer = userAnswer.toUpperCase()
            //validate answers
            for (let i = 0; i < validAnswers.length; i++){
                if (userAnswer === validAnswers[i])
                {
                    validAnswer = true
                }
            }
            if (!validAnswer)
            {
                window.alert('Invalid input. Try again')
            }
        }
        //add score of 10 to user if correct answer
        if (userAnswer === question.correctAnswer)
        {
            userScore += 10
        }
    }
    //output final score after all questions
    window.alert('Your final score is: ' + userScore)
}

//ask user if they want to replay game
function askContinue()
{
    let userChoice = 'Z'
    let validUserChoice = false

    //repeat till given valid answer
    while(!validUserChoice)
    {
        userChoice = window.prompt('Would you like to play the game again? Y/N')
        userChoice = userChoice.toUpperCase()
        if(userChoice === 'N')
        {
            window.alert('Thank you for playing the game!')
            validUserChoice = true
            return false
        }
        else if (userChoice === 'Y')
        {
            validUserChoice = true
                return true
        }
        else
        {
            window.alert('Invalid input. Try again')
        }
    }

}

//main program
while(continueGame)
{
    playGame()
    continueGame = askContinue()
}