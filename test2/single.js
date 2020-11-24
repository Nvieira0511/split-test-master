
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Interview Screening",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "arrays",
                title: "What index is an Arrays first element?",
                choices: [
                    "0", "1", "2", "3", "none of the above"
                ],
                correctAnswer: "0"
            },
            {
                type: "radiogroup",
                name: "variable",
                title: "What type is the variable x = \"s\"",
                choicesOrder: "random",
                choices: [
                    "integer", "string", "double", "char"
                ],
                correctAnswer: "string"
            },
            {
                type: "radiogroup",
                name: "calc1",
                title: "What is the answer x = \"5\" + \"5\"",
                choicesOrder: "random",
                choices: [
                    "0", "10", "20", "55", "\"55\""
                ],
                correctAnswer: "\"55\""
            },
            {
                type: "radiogroup",
                name: "calc2",
                title: "What is the answer x = 5 + 5",
                choicesOrder: "random",
                choices: [
                    "0", "10", "20", "55", "\"55\""
                ],
                correctAnswer: "10"
            },
            {
                type: "radiogroup",
                name: "calc3",
                title: "What is the answer x = \"5\" - \"5\"",
                choicesOrder: "random",
                choices: [
                    "0", "10", "20", "55", "\"55\"", "none of the above"
                ],
                correctAnswer: "none of the above"
            },
            {
                type: "radiogroup",
                name: "calc4",
                title: "What is the answer x = 5 - 5",
                choicesOrder: "random",
                choices: [
                    "0", "10", "20", "55", "\"55\"", "none of the above"
                ],
                correctAnswer: "0"
            },
            {
                type: "radiogroup",
                name: "calc5",
                title: "On average, does completing homework early save you from complications later?",
                choicesOrder: "random",
                choices: [
                    "yes", "no", "maybe"
                ],
                correctAnswer: "yes"
            },
            {
                type: "radiogroup",
                name: "calc6",
                title: "It is a requirement to write code according to coding standards given by superiors",
                choicesOrder: "random",
                choices: [
                    "true", "false"
                ],
                correctAnswer: "true"
            },
            {
                type: "radiogroup",
                name: "calc7",
                title: "Humans analyse web pages typically in a Z or F shaped path",
                choicesOrder: "random",
                choices: [
                    "true", "false"
                ],
                correctAnswer: "true"
            },
            {
                type: "radiogroup",
                name: "calc8",
                title: "What is a Runtime Error?",
                choicesOrder: "random",
                choices: [
                    "Occurs when the program contains an illegal operation", "They're referred to as logical errors"
                ],
                correctAnswer: "Occurs when the program contains an illegal operation"
            }
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });