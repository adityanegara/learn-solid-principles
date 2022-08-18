const printQuiz = (questions) => {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break;
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`);
                })
                break;
            case 'text':
                console.log('Answer: __________')
                break;
            //new case for range
            case 'range':
                console.log('Minimum:___________');
                console.log('Maximum:___________');
                break;
        }
    });
}

const questions = [
    {
        type: 'boolean',
        description: 'This video is useful'
    },
    {
        type: 'multipleChoice',
        description: 'What is your favorite programming language?',
        options: ['CSS', 'HTML', 'JS']
    },
    {
        type: 'text',
        description: 'Describe your favorite JS feature.'
    },
    //new question type
    {
        type: 'range',
        description: 'What is the speed limit in your city?'
    }
]

printQuiz(questions);