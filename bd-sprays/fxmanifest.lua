fx_version "cerulean"

description "Byte Development | Sprays"
author "Aspect#2566"
version '0.0.1'

game "gta5"

client_script {
    '@bd-lib/client/cl_interface.js',
    '@bd-lib/client/cl_rpc.js',
    'client/*.js',
    'client/*.lua'
}

server_script {
    '@bd-lib/server/sv_rpc.js',
    '@bd-lib/server/sv_rpc.lua',
    '@bd-lib/server/sv_sql.js',
    'server/*.js',
    'server/*.lua'
}