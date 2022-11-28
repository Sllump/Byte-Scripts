fx_version "cerulean"

description "Astral Object System"
author "cool"
version '0.0.1'

game "gta5"

server_script '@arp-lib/server/sv_rpc.js'
server_script '@arp-lib/server/sv_sql.js'
server_script 'server/*.js'

client_script '@apx/client/lib.js'
client_script '@arp-lib/client/cl_rpc.js'
client_script '@arp-lib/client/cl_poly.js'
client_script 'client/*.js'