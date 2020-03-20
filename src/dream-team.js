module.exports = function createDreamTeam(members) {
  console.log(Array.isArray(members));
  if (!Array.isArray(members)) {
    return false;
  } else {
    return members.map(function (member) {
      return typeof(member) === "string" ? member.replace(/\s+/g, "").substring(0, 1).toUpperCase() : "";
    }).sort().join("");
  }
};
