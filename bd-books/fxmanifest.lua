fx_version 'cerulean'
games {'rdr3', 'gta5'}
author 'Byte Development'
lua54 'yes'

shared_scripts {
    'config/config.lua',
    'client/cl_utils.lua',
}

client_scripts {
    'client/cl_*.lua',
    'config/client_config.lua',
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'config/server_config.lua',
    'server/sv_*.lua'
}

ui_page 'build/index.html'

files {
    'config.json',
    'build/index.html',
    'build/static/js/*.js',
    'build/static/css/*.css',
    'build/static/media/*.svg',
    'build/static/media/*.mp3',
}