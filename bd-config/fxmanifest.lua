fx_version "cerulean"

description "Newcastle - Config"
author "cool"
version '0.0.1'

game "gta5"

server_script '@nc-lib/server/sv_sql.js'
server_script '@nc-lib/server/sv_rpc.js'
server_script 'server/*.js'

client_script '@nc-lib/client/cl_rpc.js'
client_script 'client/*.js'