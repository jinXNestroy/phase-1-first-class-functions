function receivesAFunction(cb = function (bonita) { console.log("Bonita") }) {
    return cb()
} function returnsANamedFunction() {
    let anonFun = function (Boni) {
        console.log("Boni")
    }
    return anonFun


}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("The Rumbling is Coming");
    }


}