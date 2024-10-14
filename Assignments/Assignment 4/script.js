function getOperation() {
    const operation = prompt("Choose an operation: +, -, *, /");
    return operation;
  }

function getnumbers(){
    const num1 = parseInt(prompt("Enter number 1: "));
    const num2 = parseInt(prompt("Enter number 1: "));
    return {num1,num2};
}

function Calculate(operation,num1,num2){
    switch(operation){
        case '+': 
        return num1+num2;

        case '-':
            return num1-num2;

        case '*': 
            return num1*num2;
        case '/':
            if(num2==0){
                return "cannot divide by 0";
            }
            return num1%num2;
        default:
            return "Invalid operation";
    }
}

function runCalculator(){
    const operation = getOperation();
    const {num1,num2} = getnumbers();
    const result = Calculate(operation,num1,num2);
    alert(`Result: ${result}`);
}

runCalculator();