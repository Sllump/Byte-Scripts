fx_version "cerulean"
lua54 'yes'

games { "gta5", "rdr3" }

ui_page 'web/build/index.html'

client_script '@PolyZone/client.lua'
client_script '@PolyZone/BoxZone.lua'
client_script '@bd-lib/client/cl_interface.lua'


server_script "server/*.lua"
client_script "client/*.lua"

files {
    'web/build/index.html',
    'web/build/**/*'
}

exports {
    'GetCustomSkins',
    'IsInsideClothing'
}