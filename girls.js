//Javascript for Training Neural Network Model for billiez Girls Type.

//Copyright by billiez, 2023. All rights reserved

const net = new brain.NeuralNetwork();

$("#prediction-index").css("display","none");

const data = [
    {"input":[2,0,1,4,2,0],"output":["1"]},
    {"input":[1,0,0,3,2,0],"output":["1"]},
    {"input":[4,4,0,4,4,1],"output":["0"]},
    {"input":[2,2,0,4,2,0],"output":["1"]},
    {"input":[4,1,0,4,2,0],"output":["1"]},
    {"input":[4,0,0,0,0,0],"output":["0"]},
    {"input":[0,0,4,0,4,0],"output":["0"]},
    {"input":[4,3,3,2,2,2],"output":["0"]},
    {"input":[3,0,4,0,4,0],"output":["0"]},
    {"input":[4,1,2,4,3,0],"output":["1"]},
    {"input":[2,1,0,3,2,0],"output":["1"]},
    {"input":[4,0,2,3.3333333333333335,2,0],"output":["1"]},
    {"input":[4,0,3,0.6666666666666666,1,0],"output":["0"]},
    {"input":[4,0,4,0,2,0],"output":["0"]},
    {"input":[4,0,0,3.3333333333333335,0,2],"output":["0"]},
    {"input":[4,1,3,2.6666666666666665,0,0],"output":["0"]},
    {"input":[4,0,2,2.6666666666666665,1,1],"output":["0"]},
    {"input":[4,0,2,2,0,0],"output":["0"]},
    {"input":[3,0,0,2.6666666666666665,0,0],"output":["1"]},
    {"input":[3,0,0,1.3333333333333333,0,0],"output":["0"]},
    {"input":[3,0,0,2,0,0],"output":["0"]},
    {"input":[0,4,0,4,4,0],"output":["0"]}
];

net.train(data);

$(function(){
    $("ul").slideToggle(0);
})

$("#st").click(function(){
    $("ul").slideToggle(1000);
    const st = document.getElementById("st");
    if(st.innerHTML == "Inappropriate face ratio explanation 🔼"){
        st.innerHTML = "Inappropriate face ratio explanation 🔽";
    }
    else{
        st.innerHTML = "Inappropriate face ratio explanation 🔼";
    }
})

const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    const r1 = document.getElementById("r1").value - 1;
    const r2 = document.getElementById("r2").value - 1;
    const r3 = document.getElementById("r3").value - 1;
    const r4 = (document.getElementById("r4").value - 1) / 1.5;
    const r5 = document.getElementById("r5").value - 1;
    const r6 = document.getElementById("r6").value - 1;

    const result = document.getElementById("result");
    const guess = net.run([r1,r2,r3,r4,r5,r6])[0];

    $("#prediction-index").css("display","block");

    result.innerHTML = guess > 0.5 ? "1" : "0";
    if(result.innerHTML == "1"){
        const display = document.getElementById("display");
        display.innerHTML = "Billy should love this girl! (" + Math.floor(guess * 100) + "%)";
        display.style.color = "#000";
        const index = document.getElementById("index");
        $("#bar").css("width", Math.floor(guess * 100) + "%");
        if(Math.floor(guess * 100) < 72){
            $("#bar").css("background-color","red");
            index.innerHTML = "Low";
        }
        else if(Math.floor(guess * 100) < 82){
            $("#bar").css("background-color","yellow");
            index.innerHTML = "Normal";
        }
        else{
            $("#bar").css("background-color","green");
            index.innerHTML = "High";
        }
    }
    else{
        const display = document.getElementById("display");
        display.innerHTML = "Billy should not love this girl! (" + Math.floor(100 - guess * 100) + "%)";
        display.style.color = "#9c2017";
        const index = document.getElementById("index");
        $("#bar").css("width", Math.floor(100 - guess * 100) + "%");
        if(Math.floor(100 - guess * 100) < 72){
            $("#bar").css("background-color","red");
            index.innerHTML = "Low";
        }
        else if(Math.floor(100 - guess * 100) < 82){
            $("#bar").css("background-color","yellow");
            index.innerHTML = "Normal";
        }
        else{
            $("#bar").css("background-color","green");
            index.innerHTML = "High";
        }
    }

    $(".range").prop('disabled','true');

    $(".btn").css("display","block");
})

const accurate = document.getElementById("accurate");
const notAccurate = document.getElementById("not-accurate");

accurate.addEventListener("click",function(){
    const display = document.getElementById("display");
    display.innerHTML = "";

    $("#prediction-index").css("display","none");

    const r1 = document.getElementById("r1").value - 1;
    const r2 = document.getElementById("r2").value - 1;
    const r3 = document.getElementById("r3").value - 1;
    const r4 = (document.getElementById("r4").value - 1) / 1.5;
    const r5 = document.getElementById("r5").value - 1;
    const r6 = document.getElementById("r6").value - 1;
    const result = document.getElementById("result");

    data.push({
        input: [r1,r2,r3,r4,r5,r6],
        output: [result.innerHTML]
    })

    print();

    $(".range").removeAttr('disabled');
    $(".range").val(3);
    $("#r4").val(4);

    result.innerHTML = "";

    accurate.style.display = "none";
    notAccurate.style.display = "none";
})

notAccurate.addEventListener("click",function(){
    const display = document.getElementById("display");
    display.innerHTML = "";

    $("#prediction-index").css("display","none");
    
    const r1 = document.getElementById("r1").value - 1;
    const r2 = document.getElementById("r2").value - 1;
    const r3 = document.getElementById("r3").value - 1;
    const r4 = (document.getElementById("r4").value - 1) / 1.5;
    const r5 = document.getElementById("r5").value - 1;
    const r6 = document.getElementById("r6").value - 1;
    const result = document.getElementById("result");
    const record = result.innerHTML == "1" ? "0" : "1";

    data.push({
        input: [r1,r2,r3,r4,r5,r6],
        output: [record]
    })

    print();

    $(".range").removeAttr('disabled');
    $(".range").val(3);
    $("#r4").val(4);

    result.innerHTML = "";

    accurate.style.display = "none";
    notAccurate.style.display = "none";
})

function print(){
    console.log(JSON.stringify(data));
}
