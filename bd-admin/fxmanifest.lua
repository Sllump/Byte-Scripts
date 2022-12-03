fx_version "cerulean"
games { "gta5" }

shared_script {
    "@bd-lib/shared/sh_util.lua",
    "@bd-lib/shared/sh_cacheable.js",
}

server_scripts {
    "@bd-lib/server/sv_npx.js",
    "@bd-lib/server/sv_rpc.js",
    "@bd-lib/server/sv_rpc.lua",
    "@bd-lib/server/sv_sql.lua",
    "server/*",
}

client_scripts {
    "@bd-lib/client/cl_rpc.js",
    "client/*",
}
