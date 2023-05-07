
module.exports.getDate = function getDate() {
    const today  = new Date();

    var aesTime= today.toLocaleDateString("en-US", {timeZone : "Africa/Addis_Ababa"});

    return aesTime;
}