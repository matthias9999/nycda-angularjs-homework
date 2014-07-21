angular.module('questions', []).constant('Data', {
    questions: [
        {question: 'Matthias is an old dude born in?', options: [
            {value: '1920'},
            {value: '1960'},
            {value: '1984', correct: true},
            {value: '2000'},
            {value: '2010'}
        ]},
        {question: 'What pet does Matthias have?', options: [
            {value: 'Cat', correct: true},
            {value: 'Dog'},
            {value: 'Fish'},
            {value: 'Rabbit'},
            {value: 'Other'}
        ]},
        {question: 'Where does Matthias come from?', options: [
            {value: 'Island'},
            {value: 'Cambodia'},
            {value: 'Antarctica'},
            {value: 'Germany', correct: true},
            {value: 'USA'},
            {value: 'Japan'},
            {value: 'Tasmania'}
        ]},
        {question: 'How many siblings does Matthias have?', options: [
            {value: 'More than 4'},
            {value: '4'},
            {value: '3'},
            {value: '2'},
            {value: '1'},
            {value: 'None', correct: true}
        ]},
        {question: 'Do you eat seafood?', options: [
            {value: true, correct: true},
            {value: false}
        ]}
    ]
});