const submitButton = document.getElementById("submitButton");
const inputText = document.getElementById("inputText").innerText;

function findAbsoluteValueEquation(text){//This finds the part of our problem that is surrounded by "|" symbols, and returns it.

    if(text.type === "String"){

        for(let i in text){

            if(text.charAt(i) === "|"){//Once we find a "|", we mark the spot, and look for the next.

                let counter = 0;
                let startChar = i + 1;


                for(let j in text){

                    if(text.charAt(j) === "|"){//Once we find the second "|", everything between this one and the first is our AbsoluteValueEquation.

                        let endChar = j;

                        let absoluteValueEquation = text.slice(startChar, endChar);
                        let equationStart = startChar.toString();
                        let equationEnd = endChar.toString();

                        let returnObject = {//Return this with all our fancy new values.

                            absoluteValueEquation,
                            equationStart,
                            equationEnd

                        };

                        return returnObject;

                    }

                    return null;

                }

                return null;

            }

            return null;
        }

        return null;

    }

    throw"text type was not String";

}

let absoluteValueEquation = findAbsoluteValueEquation(inputText);
