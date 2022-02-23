var wordList = ["fuck", "salt", "dick", "gray", "word", "half", "blue", "cult", "acid", "bond", "both", "calm", "much", "case", "care", "cast"];

        var randomNum = Math.floor(Math.random() * wordList.length);

        var turn = 0;
        var currentWord = "";

        //submit or enter buttom, and it will move the list down
        if (turn < 6) {
            $(".input").keypress(function(event) {
                if (event.which == 13) {
                    event.preventDefault();
                    var currentWord = $(".input").val();
                    $(".l" + turn).text(currentWord);
                    turn += 1;
                    $(".input").val("");
                    console.log(turn);
                    //detect correct answer
                    for (var t = 0; t < wordList.length; t++) {
                        if (randomNum === t) {
                            if (currentWord == wordList[randomNum]) {
                                if (turn == 6) {
                                    $(".product").html("The word is: " + wordList[randomNum]);
                                }
                                $(".product").html("Congratulations &#127881;");
                                for (var i = 1; i < 5; i++) {
                                    $(".b" + (i + 4 * (turn - 1))).css("background-color", "lightgreen");
                                }
                            } else {
                                var firstLetter = wordList[randomNum].charAt(0);
                                var secondLetter = wordList[randomNum].charAt(1);
                                var thirdLetter = wordList[randomNum].charAt(2);
                                var fourthLetter = wordList[randomNum].charAt(3);

                                var firstGuess = currentWord.charAt(0);
                                var secondGuess = currentWord.charAt(1);
                                var thirdGuess = currentWord.charAt(2);
                                var fourthGuess = currentWord.charAt(3);

                                //first letter
                                if (firstGuess == firstLetter) {
                                    $(".b" + (4 * (turn - 1) + 1)).css("background-color", "lightgreen");
                                } else if (firstGuess == secondLetter || firstGuess == thirdLetter || firstGuess == fourthLetter) {
                                    $(".b" + (4 * (turn - 1) + 1)).css("background-color", "yellow");
                                } else {
                                    $(".b" + (4 * (turn - 1) + 1)).css("background-color", "gray")
                                }

                                //second letter
                                if (secondGuess == secondLetter) {
                                    $(".b" + (4 * (turn - 1) + 2)).css("background-color", "lightgreen");
                                } else if (secondGuess == firstLetter || secondGuess == thirdLetter || secondGuess == fourthLetter) {
                                    $(".b" + (4 * (turn - 1) + 2)).css("background-color", "yellow");
                                } else {
                                    $(".b" + (4 * (turn - 1) + 2)).css("background-color", "gray")
                                }

                                //third letter
                                if (thirdGuess == thirdLetter) {
                                    $(".b" + (4 * (turn - 1) + 3)).css("background-color", "lightgreen");
                                } else if (thirdGuess == firstLetter || thirdGuess == secondLetter || thirdGuess == fourthLetter) {
                                    $(".b" + (4 * (turn - 1) + 3)).css("background-color", "yellow");
                                } else {
                                    $(".b" + (4 * (turn - 1) + 3)).css("background-color", "gray")
                                }

                                //fourth letter
                                if (fourthGuess == fourthLetter) {
                                    $(".b" + (4 * (turn - 1) + 4)).css("background-color", "lightgreen");
                                } else if (fourthGuess == firstLetter || fourthGuess == secondLetter || fourthGuess == thirdLetter) {
                                    $(".b" + (4 * (turn - 1) + 4)).css("background-color", "yellow");
                                } else {
                                    $(".b" + (4 * (turn - 1) + 4)).css("background-color", "gray")
                                }
                            }
                        }
                    }
                }   
            });
        };
        $(".btn").click(function() {
            turn = 0;
            $(".input").val("");
            for (var i = 0; i < 6; i++) {
                $(".l" + i).text("");
            }
            for (var y = 0; y < 6; y++) {
                for (var z = 1; z < 5; z++) {
                    $(".b" + (z + 4 * y)).css("background-color", "white")
                }
            }
            $(".product").text("no two letters will be repeated");
            var randomNum = Math.floor(Math.random() * wordList.length);
        });