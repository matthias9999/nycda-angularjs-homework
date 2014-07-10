var _nycda = _nycda || {};
_nycda.apply = function (item, property, value) {

    //Should set a property to undefined if no value is passed in
    if(!property) {
        property = undefined;
    }

    if(item && property) {
        if (property.indexOf(".") >= 0) {
            // put the sub-hashes in an incremental array
            var arr=[];
            var proparr = property.split(".");
            arr[0]=item;
            var i=1;
            var j=proparr.length;
            while(i <= j) {
                arr[i] = arr[i-1][proparr.shift()];
                i++;
            };

            //assign the new value
            arr[i-1]=value;

            //update and reconstruct the hash
            var proparr = property.split(".");
            var i=proparr.length;
            while(i>0) {
                arr[i-1][proparr.pop()]=arr[i];
                i--;
            };

            // return the final hash with the updated value
            return arr[0];

        } else {
            //Should return null or undefined if the map is so
            item[property] = value;
            return item;
        }
    }
    return item;
};