function btnClick(val){
    document.getElementById("display").value +=val
    document.getElementById("clrBtn").innerHTML='C'
}

function clrScreen(){
    document.getElementById("display").value=""
    document.getElementById("clrBtn").innerHTML='AC'
}

function eqClick(){
    var text=document.getElementById("display").value
    var res=eval(text)
    document.getElementById("display").value=res
}