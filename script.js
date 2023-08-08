//1.Display number in text box
function displayNumber(num){
    result.value+=num;
}


//2.Clear the text box
function clearBox(){
    result.value=""
}



//3. Evaluate expression

function evaluateExp(){
    //Method 1
    // exp=result.value
    // output=eval(exp)
    // result.value=output

    //Method 2
    result.value=eval(result.value)
}

//4.Remove last value

function removeLastItem(){
    currentItem=result.value
    result.value=currentItem.slice(0,-1)
}
