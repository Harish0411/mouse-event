function fontSize(){
    let input1 = document.getElementById('text1').value;
    let head = document.getElementById('heading')
    head.style.fontSize = `${input1}px`;  
}
function colorChange(x){
    let input2 = document.getElementById('text2').value;  
    x.style.color = `${input2}`;
    let head = document.getElementById('heading')
    head.style.color = `${input2}`;  
}