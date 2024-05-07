let test_1  = Math.floor(Math.random()*4)
let pronoun = [' You', ' Champion', ' Dude', ' GOAT']

function pronoun_random(Name){
   return pronoun[Name]
}


let test_2 = Math.floor(Math.random()*4)
let verb = [' are', ' will be', ' stay', ' become']

function verb_random(Name){
    return verb[Name]
}


let test_3 = Math.floor(Math.random()*4)
let adjective = [' great.', ' stronger.', ' healthy.', ' confident.']

function adjective_random(Name){
    return adjective[Name]
}

 phraser = console.log(""+pronoun_random(test_1)  +verb_random(test_2) +adjective_random(test_3))
 phraser2 = console.log(""+pronoun_random(test_2)  +verb_random(test_3) +adjective_random(test_1))
 phraser3 = console.log(""+pronoun_random(test_3)  +verb_random(test_1) +adjective_random(test_2))


