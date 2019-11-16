exports.order = function(inList, lts) {
    let outList = [], inLength = inList.length(), expt;
    while (outList.length() <= inLength) {
        for (var i = 0; i <= inList.length; i++) {
            if (!inList[i].isInteger()) { throw new Error ("Input list must contain numbers only."); }
            if (expt < inList[i] && lts == true) {
                expt = inList[i];
            } else if (expt > inList[1] && lts == false) {
                expt = inList[1]
            }
        };
        outList.push(expt)
    };
    return outList;
};