
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
const result = mean(scores);
console.log("Average score:", result);
module.exports = {
    mean: mean
};

  





