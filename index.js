let result = document.getElementById('result');
let expression = '';

function appendValue(value){
    expression += value;
    result.value = expression;
}

function appendOperator(operator){
    expression += operator;
    result.value = expression;
}

function calculate(){
    try{
        const calculated = eval(expression);
        result.value = calculated;
        expression = '';
    }
   catch(error){
    result.value = 'Error';
}
}

function clearResult(){
    expression = '';
    result.value = '';
}
