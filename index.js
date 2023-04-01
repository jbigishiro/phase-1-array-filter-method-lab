// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    return drivers.filter(function(driverName){
        return driverName.toLowerCase()===name.toLowerCase()
    });
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function (driverName){
        return driverName.slice(0, letters.length)===letters
    } )
}

function matchName(drivers, name){
    return drivers.filter( function(driver){
        return driver.name===name
    })
}