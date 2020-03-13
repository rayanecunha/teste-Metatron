var pos = 0, test, test_status, question, choice, chA, chB, chC, correct = 0;
var choices = document.getElementsByName("choices");
var questions = [
    [ "Quanto é 10 + 4?", "12", "14", "16", "B" ],
	[ "Quanto é 20 - 9?", "7", "13", "11", "C" ],
	[ "Quanto é 7 x 3?", "21", "24", "25", "A" ],
    [ "Quanto é 8 / 2?", "10", "2", "4", "C" ],
    [ "Quanto é 16 / 4?", "12", "6", "4", "C" ]

];

const renderQuestion = () => {
    teste = $('.questoes');
    if(pos >= questions.length) {
        teste.html('');
        teste.append("<h2>Você acertou "+correct+" de "+questions.length+" questões</h2>");
        $(".test_status").html('');
        $(".test_status").append("<p>Teste Concluído</p>");
        pos = 0;
        correct = 0;
        return false;
    }
    $(".test_status").html('');
    $(".test_status").append("Questão "+(pos+1)+" de "+questions.length);
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    teste.html('');
    teste.append("<h3>"+question+"</h3>");
    teste.append("<input type='radio' onclick='openBtn()' name='choices' value='A'> "+chA+"<br>");
    teste.append("<input type='radio' onclick='openBtn()' name='choices' value='B'> "+chB+"<br>");
    teste.append("<input type='radio' onclick='openBtn()' name='choices' value='C'> "+chC+"<br><br>");
    if (pos >= 4) {
        teste.append("<button onclick='checkAnswer()'>Finalizar</button>");
    } else {
        teste.append("<button onclick='checkAnswer()'>Próximo</button>");
    }
    $('button').prop('disabled', true);
}

const checkAnswer = () => {
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][4]){
        correct++;
    }
    pos++;
    renderQuestion();
}

renderQuestion();

const openBtn = () => {
    $('button').prop('disabled', false);
    console.log('teste')
}