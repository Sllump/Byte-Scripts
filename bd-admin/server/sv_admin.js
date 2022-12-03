let playerList = {};
playerList["Disconnected"] = [];

RPC.register("bd:admin:isAdmin", function(src) {
    const user = exports["bd-lib"].getUserData(src)
    const userRank = user.rank

    if (typeof userRank !== "string") {
        return false
    }

    const defaultPower = exports["bd-admin"].getRank("user");
    const userPower = exports["bd-admin"].getRank(userRank);

    if (userPower > defaultPower) {
        return true
    }

    return false
});

RPC.register("bd:admin:getCommandUI", function(src) {
    return exports["bd-admin"].getCommandUI(src)
});

RPC.register("bd:admin:runCommandFromClient", function(src, pAction, pData) {
    exports["bd-admin"].runCommandFromClient(src, pAction, pData);
    return true
});

RPC.register("bd-admin:getValidLicenses", function(src) {
    return exports["bd-admin"].getValidLicenses()
});

RPC.register("bd:admin:getPlayerList", function(src) {

    playerList["CurrentPlayers"] = exports["bd-admin"].getCurrentPlayers();

    playerList["Banned"] = [
        {
            from: "01/01/2022",
            until: "12/12/2023",
            admin: "Admin Name",
            name: "Player Name",
            SteamID: "Player Steam ID",
            Reason: "Example Reason",
        }
    ];

    return playerList
});

RPC.register("bd:admin:getDefinedNames", function(src, pDefinedNames) {
    return exports["bd-admin"].getDefinedNames(pDefinedNames)
});

RPC.register("bd:admin:getPlayerLogs", function(src, pData) {
    return exports["bd-log"].getPlayerLogs(pData)
});

RPC.register("bd:admin:triggerLogFromClient", function(src, pLog, pResponseData) {
    
});

onNet("playerDropped", async () => {
    let src = source
    const user = exports["bd-lib"].getUserData(src)
    playerList["Disconnected"].push({
        name: GetPlayerName(src),
        serverID: src,
        SteamID: user.steamid,
        charID: user.character.id,
        charName: user.character.first_name + " " + user.character.last_name || "No Character Name",
        queueType: "Regular",
    })
});
