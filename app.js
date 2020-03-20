// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.
// Write code that shows:
// how many grains were on each square, and
// the total number of grains



// *******************************************   FUNCTIONS (below)
const GrainsOnSquare = (number) => {
    const correctPower = number - 1;
    return (Math.pow(2, correctPower));
}


const totalNumberOfGrains = (number) => {
    return ((Math.pow(2, number)) - 1);
}

console.log(GrainsOnSquare(5));
console.log(totalNumberOfGrains(5));




// *******************************************  CLASSES no loops (below)
class Grains {
    constructor(number) {
        this.number = number;
    }

    grainCount(number) {
        const correctPower = number - 1;
        return (Math.pow(2, correctPower));
    }

    cumulativeCount(number) {
        return ((Math.pow(2, number)) - 1);
    }
}

const grain = new Grains(9);
console.log(grain.grainCount(grain.number));
console.log(grain.cumulativeCount(grain.number));




// *****************************************   CLASSES array and loop (below)
class Grains {
    constructor(number) {
        this.number = number;
    }

    grainCount(number) {
        const correctPower = number - 1;
        return (Math.pow(2, correctPower));
    }

    buildGrainsArray() {
        const grainsArray = [];
        for (let i = 1; i <= this.number; i++) {
            grainsArray.push(this.grainCount(i));
        }
        return grainsArray;
    }

    totalGrainsCount() {
        const array = grain.buildGrainsArray();
        const sumOfArray = array.reduce((a, b) => a + b, 0);
        return sumOfArray;
    }
}

const grain = new Grains(8);
console.log(grain.buildGrainsArray());
console.log(grain.grainCount(grain.number));
console.log(grain.totalGrainsCount());
