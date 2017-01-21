
// RESET GAME
var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    };
};


// USER GUESS INPUT
var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
    return {
        type: MAKE_GUESS,
        guess: guess
    };
};


// DISPLAY HOT/COLD INFO???


exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;

