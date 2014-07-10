var _nycda = _nycda || {};
_nycda.conditional = function (condition, runIfTrue) {

    if (runIfTrue) {
        if (condition == null) {
            return runIfTrue;
        }
        return function () {
            if (condition.apply(null, arguments)) {
                return runIfTrue.apply(null, arguments)
            } else {
                return (function () {
                    return undefined;
                })();
            }
        }
    } else {
    throw "You cannot do that stuff...";
    }
};


/*
var _nycda = _nycda || {};
_nycda.conditional = function (condition, runIfTrue) {
    if (condition !== null) {
        if (condition) {
            if (condition()) {
                if (runIfTrue) {
                    return runIfTrue;
                } else {
                    throw "You cannot do that stuff...";
                }
            } else {
                return function () {};
            }
        }
    } else {
    return runIfTrue;
    }
};
*/