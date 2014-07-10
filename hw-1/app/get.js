var _nycda = _nycda || {};
_nycda.get = function (item, property) {

    if(item && property) {
        if (property.indexOf(".") >= 0) {


            // this one works already and completes get.js
            var arr = property.split(".");
            while(arr.length && (item = item[arr.shift()]));
            return item;

            // this is an alternative which does not yet with properties that dont exist
/*
            var arr = property.split(".");
            var str = "item";
            //count elements + construct return term
            for (var i = 0; i < arr.length; i++) {
                str = str + '["' + arr[i] + '"]';
            }

            if ((typeof eval(str)) === "undefined") {
                return item;
            }
            else {
                return eval(str);
            }

*/

        }
        else {
            return item[property];
        }

        }
        return item;
};

