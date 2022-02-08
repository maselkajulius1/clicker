var score = 0
var clickAmount = 1
var multipliers = 0
var multiplierCost = 20;
var generators = 0;
var generatorCost = 80;

function clickAddScore(){
    score = score + clickAmount

    document.getElementById("score").innerText = 'neon points: ' + score
}

function buyMultiplier(){
    if(score >= multiplierCost){
        score = score - multiplierCost
        multipliers = multipliers + 1
        clickAmount = clickAmount * 2
        multiplierCost = multiplierCost * 3
        document.getElementById("score").innerText = 'neon points: ' + score
        document.getElementById("multiplier-count").innerText = multipliers
        document.getElementById("multiplier-text").innerText = 'Buy 2x Multiplier (' + multiplierCost + ' points)'
    }
}

function buyGenerator(){
    if(score >= generatorCost){
        score = score - generatorCost
        generators = generators + 1
        generatorCost = generatorCost * 4
        document.getElementById("score").innerText = 'neon points: ' + score
        document.getElementById("generator-count").innerText = generators
        document.getElementById("generator-text").innerText = 'Buy 1sps(score per second) generator (' + generatorCost + ' points)'
    }
}

setInterval(function generateScore(){
    score = score + generators;
    document.getElementById("score").innerText = 'neon points: ' + score
}, 1000);

function saveGame(){
    var gameSave = {
        score: score,
        clickAmount: clickAmount,
        multipliers: multipliers,
        multiplierCost: multiplierCost,
        generators: generators,
        generatorCost: generatorCost
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if(typeof savedGame.score !== undefined) score = savedGame.score
    if(typeof savedGame.clickAmount !== undefined) clickAmount = savedGame.clickAmount
    if(typeof savedGame.multipliers !== undefined) multipliers = savedGame.multipliers
    if(typeof savedGame.multiplierCost !== undefined) multiplierCost = savedGame.multiplierCost
    if(typeof savedGame.generators !== undefined) multipliers = savedGame.generators
    if(typeof savedGame.generatorCost !== undefined) multiplierCost = savedGame.generatorCost
    document.getElementById("score").innerText = 'neon points: ' + score
    document.getElementById("multiplier-count").innerText = multipliers
    document.getElementById("multiplier-text").innerText = 'Buy 2x Multiplier (' + multiplierCost + ' points)'
}