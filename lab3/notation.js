



function mean(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    if (scores.length === 0) {
        return 0;
    }

    return sum / scores.length;
}

const scores = [13, 190, 45, 78, 238];
console.log("Average score:", mean(scores));
module.exports = {
    mean: mean
};





