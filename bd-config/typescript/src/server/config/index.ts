import * as main from "../../../../config/main.json";
import * as games from "../../../../config/nc-games/games.json";
import * as vehicletag from "../../../../config/nc-games/vehicle_tag.json";
import * as demolition from "../../../../config/nc-games/demolition.json";
import * as storageunits from "../../../../config/nc-storageunits/units.json";
import * as lockpicking from "../../../../config/nc-vehicles/lockpicking/main.json";
import * as voice from "../../../../config/nc-voice/main.json";

function getFileNameOnly(filePath: any) {
    return filePath.split('/').pop().split('.').shift();
}

function loadGarages() {
    const requireContext = require.context('../../../../config/nc-vehicles/garages', false, /\.json$/);
    const json: any = {};
    requireContext.keys().forEach((key) => {
        const obj = requireContext(key);
        const simpleKey = getFileNameOnly(key);
        json[simpleKey] = obj;
    });

    return json;
}

export const clientConfig = [
    {
        configId: "main",
        data: main
    },
    {
        configId: "misc",
        data: {
            "buffs.enabled": true,
            "spawn.apartments.only": false,
            "business.stashes.public": false,
            "business.counters.public": false,
            "business.registers.public": false,
            "casino.membership.bypass": false,
            "police.masterkeys": false,
            "farmers.market.enabled": false,
            "gallery.anyone.sell.gems": false,
            "hospital.revives.auto": true,
            "heists.prac.whitelist": false,
            "housing.crafting.public": false,
            "progression.guns": true,
            "housing.benches": false,
            "jobs.receipts.public": false,
            "casino.wheel.cash.pickup.cid": false,
            "crafting.spawn.public": false,
            "jobs.ems.enabled": true,
            "characters.lifers.disabled": false,
            "characters.hardcore.disabled": false,
            "characters.limited": false,
            "hud.watermark": true,
            "showrooms.catalog.purchase": false,
            "mdw.profiles.skip": false,
            "afk.kick.auto": false
        }
    },
    {
        configId: "nc-games:games",
        data: games
    },
    {
        configId: "nc-games:vehicle-tag",
        data: vehicletag
    },
    {
        configId: "nc-games:demolition",
        data: demolition
    },
    {
        configId: "nc-storageunits",
        data: storageunits
    },
    {
        configId: "nc-vehicles:garages",
        data: loadGarages()
    },
    {
        configId: "nc-vehicles:lockpicking",
        data: lockpicking
    },
    {
        configId: "nc-voice",
        data: voice
    }
];