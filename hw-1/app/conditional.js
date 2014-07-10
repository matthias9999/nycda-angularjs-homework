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
                return function () {
                };
            }
        }

    } else {
        return runIfTrue;
    }
};