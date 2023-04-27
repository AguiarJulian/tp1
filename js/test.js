    function resultado() {
        let score = 0; 

        var p1 = document.forms["p1"]["q1"].value;
        var p2 = document.forms["p2"]["q2"].value;
        var p3 = document.forms["p3"]["q3"].value;
        var p4 = document.forms["p4"]["q4"].value;
        var p5 = document.forms["p5"]["q5"].value;
        var p6 = document.forms["p6"]["q6"].value;
        var p7 = document.forms["p7"]["q7"].value;
        var p8 = document.forms["p8"]["q8"].value;
        var p9 = document.forms["p9"]["q9"].value;
        var p10 = document.forms["p10"]["q10"].value;


    if (p1 === "c") {
    score++;
    }

    if (p2 === "b") {
      score++;
    }

    if (p3 === "a") {
      score++;
    }

    if (p4 === "b") {
      score++;
    }

    if (p5 === "d") {
      score++;
    }

    if (p6 === "a") {
      score++;
    }

    if (p7 === "d") {
      score++;
    }

    if (p8 === "c") {
      score++;
    }

    if (p9 === "b") {
      score++;
    }

    if (p10 === "d") {
      score++;
    }

document.getElementById("score").innerHTML = score;
    }



