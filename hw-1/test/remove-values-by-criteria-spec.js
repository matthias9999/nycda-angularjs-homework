describe("_nycda.multiplier", function () {

    it("should throw an error when passed an undefined array", function () {
        expect(function(){
            _nycda.removeValuesByCriteria({name:"TOM"},null);
        }).toThrow();
    });

    it("should only keep elements name Muhammad", function () {
        var criteria = function (value) {
            return value % 2 === 0;
        };
        expect(_nycda.removeValuesByCriteria({
            studentA: "Muhammad", studentB: "Daniel"
        }, criteria)).toEqual({studentA: "Muhammad"});
    });

    it("should be able to remove odd numbers", function () {
        var criteria = function (value) {
            return value % 2 === 0;
        };
        expect(_nycda.removeValuesByCriteria({
            one: 1, two: 2, three: 3, four: 4
        }, criteria)).toEqual({two:2, four:4});
    });

});