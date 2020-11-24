window.addEventListener("load", function(){
    //Dom elementer
    let instructions = document.getElementById("instructions");
    let rollBtn = document.getElementById("roll-btn");
    let score = document.getElementById("score");
    let userSpan = document.getElementById("user-result");
    let cpuSpan = document.getElementById("cpu-result");
    let userImg = document.getElementById("user-img");
    let userImg1 = document.getElementById("user-img1");
    let cpuImg = document.getElementById("cpu-img");
    let cpuImg1 = document.getElementById("cpu-img1");
    let userProgress = document.getElementById("user-progress");
    let cpuProgress = document.getElementById("cpu-progress");
    let userProgress1 = document.getElementById("user-progress1");
    let cpuProgress1 = document.getElementById("cpu-progress1");
    let restBtn = document.getElementById("reset-btn");

    let gameStopText = "Tryk på knappen for at koste terningen. <b>Hvis man slår en etter man alle sine score: ";

    let userGlobalScore = 0;
    let cpuGlobalScore = 0;

//    window.alert("Siden har loaded")
//Hvis gamestart er false er spillet ikke i gang
    let gameStart = false;

    restBtn.addEventListener("click", function(){
        window.location ="index.html";
    });

    function gameStatus(){
        if (gameStart == false){
            instructions.innerHTML= gameStopText;
        } else{
            instructions.innerHTML= "Spillet er i gang";
        }
    }
    gameStatus();

    rollBtn.addEventListener("click", function(event){
        gameStart = true;
        gameStatus();
        function getRandomNumber(){
            // return Math.floor( 1 + Math.random() * 6); 
            var randomNumber= Math.floor( 1 + Math.random() * 6);
            // var randomImage = "img/"+randomNumber+".png";
            var randomImage = `<img src=`+`"/img/`+randomNumber+`.png">`;
            // console.log(randomNumber+ "  " +randomImage); 
            return randomNumber;
            //return randomImage;            
        }
        var userValue = getRandomNumber();
        var cpuValue = getRandomNumber();
        var userValue1 = getRandomNumber();
        var cpuValue1 = getRandomNumber();
        //console.log(userValue + " " + cpuValue);
        score.style.display = "block";
        


        if (cpuValue == cpuValue1){
            cpuGlobalScore = 0;
        }
        else{
            cpuGlobalScore += cpuValue + cpuValue1;
            // console.log(cpuGlobalScore);
            
        }
        if (userValue == userValue1){
            userGlobalScore = 0;
        }
        else{
             userGlobalScore += userValue +userValue1;
            //  console.log(userGlobalScore);
        }

        window.setTimeout(function(){
            userImg.setAttribute("src", "img/"+userValue+".png");
            userImg1.setAttribute("src", "img1/"+userValue1+".png");
            // console.log(userImg);
            userSpan.innerHTML = userValue + "  og  " + userValue1 ;
            // console.log(userSpan);
        }, 500);

        window.setTimeout(function(){
            cpuImg.setAttribute("src", "img/"+cpuValue+".png");
            cpuImg1.setAttribute("src", "img1/"+cpuValue1+".png");
            cpuSpan.innerHTML = cpuValue + "  og  " + cpuValue1;
            gameStart = false;
            gameStopText = "Spil igen?";
            gameStatus();
            
            
            // console.log(userGlobalScore + " " + cpuGlobalScore);
            userProgress.style.width = (userGlobalScore * 2) + "%";
            cpuProgress.style.width = (cpuGlobalScore * 2) + "%";
            if (userGlobalScore >= 30 || cpuGlobalScore >= 30){
            //    instructions.innerHTML = "Spillet  er slut. Din samlede score var: " + userGlobalScore +
            //    "<br> CPU samlet score var: " + cpuGlobalScore;
            instructions.innerHTML = "Spillet er slut. Du kan genstart.. " ;
            userProgress1.innerHTML = "Din samlede score var: " + userGlobalScore;
            cpuProgress1.innerHTML = "CPU samlet score var: " + cpuGlobalScore;
               rollBtn.setAttribute("disabled", "true");
               restBtn.style.display = "inline-block";
            }
        }, 600);
        

    });

});