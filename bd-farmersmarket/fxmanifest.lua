fx_version 'cerulean'
games { 'gta5' }

--[[ dependencies {
  "bd-polyzone",
  "bd-lib",
  "bd-ui"
} ]]--

client_script "@bd-sync/client/lib.lua"
client_script "@bd-lib/client/cl_ui.lua"

client_scripts {
  '@bd-locales/client/lib.lua',
  '@bd-lib/client/cl_rpc.lua',
  'client/cl_*.lua',
  'client/cl_*.js',
  "@PolyZone/client.lua",
  "@PolyZone/ComboZone.lua",
}

shared_script {
  '@bd-lib/shared/sh_util.lua',
  'shared/sh_*.*',
}

server_script "@bd-lib/server/sv_npx.js"
server_scripts {
  '@bd-lib/server/sv_asyncExports.lua',
  '@bd-lib/server/sv_rpc.lua',
  '@bd-lib/server/sv_rpc.js',
  '@bd-lib/server/sv_sql.lua',
  '@bd-lib/server/sv_sql.js',
  'server/sv_*.lua',
  'server/sv_*.js',
}
