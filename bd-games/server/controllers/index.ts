"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apx_1 = require("../../shared/utils/apx");
let lobbies = [];
///export let lobbies: { [game: string]: Lobby} = {};
// Lobbies["vehicle-tag"] = {
//     id: "arcade_lobby_2387423874",
//     game: "vehicle-tag",
//     name: "BOZOS",
//     code: "1234",
//     source: 1,
//     cid: 1,
//     players: [
//         {
//             cid: 1,
//             source: source,
//             name: user.first_name + " " + user.last_name,
//             is_playing: true
//         }
//     ],
//     data: {
//         map: data?.map,
//         vehicle_group: data?.vehicle_group
//     },
//     started: false
// };
// Lobbies["vehicle-tag"] = {
//     id: "arcade_lobby_1",
//     game: "vehicle-tag",
//     name: "Cool Lobby",
//     code: "1234",
//     source: 1,
//     cid: 1,
//     players: [],
//     started: false,
// }
/*
        lobbies.push({
            id: randomId,
            game: game,
            name: data.name,
            code: data.code,
            source: source,
            cid: user.id,
            players: [
                {
                    cid: user.id,
                    source: source,
                    name: user.first_name + " " + user.last_name,
                    is_playing: true
                }
            ],
            data: {
                map: data?.map,
                vehicle_group: data?.vehicle_group
            },
            started: false
        })
*/
//TODO; Start using interfaces for client/server.
apx_1.Procedures.register("arp-games:getLobbies", (source, game) => {
    return lobbies.filter((lobby) => lobby.game === game);
});
apx_1.Procedures.register("arp-games:createLobby", async (source, game, data) => {
    const user = await apx_1.Base.getCharacter(source);
    if (!user)
        return false;
    const randomId = "arcade_lobby_" + apx_1.Utils.getRandomNumber(1, 99) + apx_1.Utils.getRandomNumber(1, 99) + apx_1.Utils.getRandomNumber(1, 99) + apx_1.Utils.getRandomNumber(1, 99);
    const gameConfigData = getGameData(game);
    if (gameConfigData.type === "teams") {
        const teams = [];
        for (let i = 0; i < gameConfigData.gameData.teams; i++) {
            teams.push({
                players: []
            });
        }
        teams[0].players.push({
            cid: user.id,
            source: source,
            name: user.first_name + " " + user.last_name,
        });
        lobbies.push({
            id: randomId,
            game: game,
            name: data.name,
            code: data.code,
            source: source,
            cid: user.id,
            players: [
                {
                    cid: user.id,
                    source: source,
                    name: user.first_name + " " + user.last_name,
                    is_playing: true
                }
            ],
            data: {
                ...data
            },
            teams: teams,
            started: false
        });
    }
    else {
        // Lobbies["vehicle-tag"] = {
        //     id: randomId,
        //     game: game,
        //     name: data.name,
        //     code: data.code,
        //     source: source,
        //     cid: user.id,
        //     players: [
        //         {
        //             cid: user.id,
        //             source: source,
        //             name: user.first_name + " " + user.last_name,
        //             is_playing: true
        //         }
        //     ],
        //     data: {
        //         map: data?.map,
        //         vehicle_group: data?.vehicle_group
        //     },
        //     started: false
        // };
        // Lobbies["vehicle-tag"].find
        lobbies.push({
            id: randomId,
            game: game,
            name: data.name,
            code: data.code,
            source: source,
            cid: user.id,
            players: [
                {
                    cid: user.id,
                    source: source,
                    name: user.first_name + " " + user.last_name,
                    is_playing: true
                }
            ],
            data: {
                map: data?.map,
                vehicle_group: data?.vehicle_group
            },
            started: false
        });
    }
    console.log(lobbies);
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === randomId);
    if (!lobby)
        return false;
    apx_1.Events.emitNet("arp-games:joinedLobby", source, lobby);
    return true;
});
apx_1.Procedures.register("arp-games:getLobby", (source, game, lobbyId) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    return lobby;
});
apx_1.Procedures.register("arp-games:getLobbyMembers", (source, game, lobbyId) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    return lobby.players;
});
apx_1.Procedures.register("arp-games:getLobbyTeam", (source, game, lobbyId, team) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    return lobby.teams[team];
});
apx_1.Events.onNet("arp-games:joinGame", async (source, game, lobbyId) => {
    console.log("arp-games:joinGame", source, game, lobbyId);
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    const user = await apx_1.Base.getCharacter(source);
    if (!user)
        return false;
    const gameConfigData = getGameData(game);
    lobby.players.push({
        cid: user.id,
        source: source,
        name: user.first_name + " " + user.last_name,
        is_playing: true
    });
    if (gameConfigData.type === "teams") {
        if (lobby.teams[0].players.length < gameConfigData.gameData.teamSize) {
            lobby.teams[0].players.push({
                cid: user.id,
                source: source,
                name: user.first_name + " " + user.last_name,
            });
        }
        else if (lobby.teams[1].players.length < gameConfigData.gameData.teamSize) {
            lobby.teams[1].players.push({
                cid: user.id,
                source: source,
                name: user.first_name + " " + user.last_name,
            });
        }
    }
    apx_1.Events.emitNet("arp-games:joinedLobby", source, lobby);
    return true;
});
apx_1.Events.onNet("arp-games:leaveLobby", (source, game, lobbyId) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    const gameConfigData = getGameData(game);
    const idx = lobbies.findIndex((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (idx === -1)
        return false;
    lobbies[idx].players = lobbies[idx].players.filter((player) => player.source !== source);
    if (gameConfigData.type === "teams") {
        //If the game supports teams, make sure to clear up the teams
        for (let i = 0; i < lobby.teams.length; i++) {
            lobby.teams[i].players = lobby.teams[i].players.filter((player) => player.source !== source);
        }
    }
    apx_1.Events.emitNet("arp-games:leftLobby", source, true);
});
apx_1.Events.onNet("arp-games:invitePlayers", async (source, game, lobbyId, cids) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    for (let i = 0; i < cids.length; i++) {
        const player = lobby.players.find((player) => player.cid === cids[i]);
        if (!player) {
            apx_1.Events.emitNet("arp-games:invitePlayer", -1, cids[i], game, lobby.name, lobbyId);
        }
    }
});
apx_1.Events.onNet("arp-games:kickPlayer", (source, game, lobbyId, player) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    const gameConfigData = getGameData(game);
    const idx = lobbies.findIndex((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (idx === -1)
        return false;
    const ply = lobby.players.find((ply) => ply.cid === player);
    lobbies[idx].players = lobbies[idx].players.filter((player) => player.cid !== player);
    if (gameConfigData.type === "teams") {
        //If the game supports teams, make sure to clear up the teams
        for (let i = 0; i < lobby.teams.length; i++) {
            lobby.teams[i].players = lobby.teams[i].players.filter((player) => player.cid !== player);
        }
    }
    apx_1.Events.emitNet("arp-games:leftLobby", ply.source, false);
});
apx_1.Events.onNet("arp-games:movePlayerToTeam", (source, game, lobbyId, team, player) => {
    //Make sure to check if team player count is over the max
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    const ply = lobby.players.find((ply) => ply.cid === player);
    if (!ply)
        return false;
    const gameConfigData = getGameData(game);
    if (lobby.teams[team].players.length + 1 >= gameConfigData.gameData.teamSize)
        return false;
    const newTeam = {
        cid: ply.cid,
        source: ply.source,
        name: ply.name
    };
    for (let i = 0; i < lobby.teams.length; i++) {
        lobby.teams[i].players = lobby.teams[i].players.filter((user) => user.cid !== player);
    }
    const idx = lobbies.findIndex((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (idx === -1)
        return false;
    lobbies[idx].teams[team].players.push(newTeam);
});
apx_1.Events.onNet("arp-games:startLobby", (source, game, lobbyId) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    emitNet("DoLongHudText", source, "Starting game in 5 seconds...");
    setTimeout(() => {
        lobby.started = true;
        apx_1.Events.emit("arp-games:gameStarted", game, lobby);
        apx_1.Events.emitNet("arp-games:gameStarted", -1, lobbyId);
    }, 5000);
});
apx_1.Events.onNet("arp-games:endGame", (source, game, lobbyId) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    lobby.started = false;
    apx_1.Events.emit("arp-games:endGameRequested", game, lobbyId);
});
apx_1.Events.on("arp-games:completeEnd", (game, lobbyId) => {
    console.log("arp-games:completeEnd", game, lobbyId);
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    //console.log("FOUND LOBBY")
    for (const player of lobby.players) {
        console.log("LEAVE LOBBY");
        emitNet("arp-games:leftLobby", player.source, true);
    }
    //console.log("DELETE LOBBY")
    //delete lobbies[lobbies.findIndex((lobby: Lobby) => lobby.game === game && lobby.id === lobbyId)];
    //Delete lobby
    lobbies = lobbies.filter((lobby) => lobby.id !== lobbyId);
    console.log("Lobby deleted", lobbies);
});
apx_1.Events.on("arp-games:gameFinished", (game, lobbyId, results) => {
    const lobby = lobbies.find((lobby) => lobby.game === game && lobby.id === lobbyId);
    if (!lobby)
        return false;
    for (const player of lobby.players) {
        console.log("LEAVE LOBBY");
        emitNet("arp-games:leftLobby", player.source, false);
    }
    lobbies = lobbies.filter((lobby) => lobby.id !== lobbyId);
});
const getConfig = (pId) => {
    return global.exports["arp-config"].GetModuleConfig(pId);
};
const getGameData = (pGame) => {
    const pGames = getConfig("arp-games:games");
    return pGames["games"].find((game) => game.id == pGame);
};
