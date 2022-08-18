class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }
    printQuestionInput = () => {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }
    printQuestionInput = () => {
        this.options.forEach((option, i) => {
            console.log(`${i}. ${option}`);
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }
    printQuestionInput = () => {
        console.log('Answer: __________');
    }
}

//new question
class RangeQuestion {
    constructor(description) {
        this.description = description;
    }
    printQuestionInput = () => {
        console.log('Min Value: __________');
        console.log('Max Value: __________');
    }
}
const printQuiz = (questions) => {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionInput();
        console.log('');
    });
}

const questions = [
    new BooleanQuestion('this video is useful'),
    new MultipleQuestion('what is your favorite language?', ['css', 'html', 'js', 'python']),
    new TextQuestion('describe your favorite JS Feature.'),
    new RangeQuestion('what is the speed limit in youur city'),
]

printQuiz(questions);