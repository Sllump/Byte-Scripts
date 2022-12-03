fx_version 'cerulean'
games { 'gta5' }

dependencies {
  "mka-lasers"
}

client_scripts {
  '@bd-locales/client/lib.lua',
  '@bd-errorlog/client/cl_errorlog.lua',
  '@bd-sync/client/lib.lua',
  '@bd-lib/client/cl_rpc.lua',
  '@bd-lib/client/cl_ui.lua',
  '@bd-lib/client/cl_animTask.lua',
  '@PolyZone/client.lua',
  '@PolyZone/BoxZone.lua',
  '@PolyZone/ComboZone.lua',
  '@mka-lasers/client/client.lua',
  '@mka-grapple/client.lua',
  'client/cl_*.lua',
}

shared_script {
  '@bd-lib/shared/sh_util.lua',
  '@bd-lib/shared/sh_cacheable.lua',
  'shared/sh_*.*',
}

server_scripts {
  'config.lua',
  '@bd-lib/server/sv_rpc.lua',
  '@bd-lib/server/sv_sql.lua',
  '@bd-lib/server/sv_sql.js',
  '@bd-lib/server/sv_asyncExports.js',
  '@bd-lib/server/sv_asyncExports.lua',
  'server/sv_*.lua',
  'server/sv_*.js',
}
