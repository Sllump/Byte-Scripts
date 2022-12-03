fx_version "cerulean"
games { "gta5" }

ui_page "nui/dist/index.html"

files {
    "nui/dist/index.html",
    "nui/dist/js/app.js",
    "nui/dist/css/app.css",
    "nui/dist/img/tablet.png"
}

server_scripts {
    "@bd-lib/server/sv_rpc.lua",
    "server/*",
}

client_scripts{
    "@bd-lib/client/cl_rpc.lua",
    "client/*",
}