function convert(){
    let cm = Number(document.getElementById("input").value);
    let result = document.getElementById("result");
    let inch = cm / 2.54 ;
    if(cm !== 0){
        result.innerHTML = (inch.toFixed(2) + " inches");
    } else
    result.innerHTML = "Please Enter Value";
}

function count(){
    let text = document.getElementById("input2").value;
    let result1 = text.trim();
    let result2 = result1.split(" ");
    document.getElementById("result2").innerHTML = "Word Count: " + (result2.length);
}