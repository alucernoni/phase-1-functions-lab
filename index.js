// Code your solution in this file!

const HQ = 42
function distanceFromHqInBlocks(destination) {
    if (HQ >= destination) {
        return HQ - destination;
    }
    if (HQ < destination) {
        return destination - HQ;
    }
}


function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(start, destination) {
    let blocksTravelled = Math.abs(start - destination)
    let feetTravelled = blocksTravelled * 264

    return feetTravelled
}


function calculatesFarePrice(start, destination) {
    let blocksTravelled = Math.abs(start - destination)
    let feetTravelled = blocksTravelled * 264
    let cost ;

    switch(true) {
        case feetTravelled <= 400:
            cost = 0;
            break;
        case feetTravelled > 400 && feetTravelled <= 2000:
            cost = (feetTravelled - 400) * .02;
            break;
        case feetTravelled > 2000 && feetTravelled <= 2500:
            cost = 25;
            break;
        case feetTravelled > 2500:
            cost = 'cannot travel that far';
            break;
    }
    return cost
}


