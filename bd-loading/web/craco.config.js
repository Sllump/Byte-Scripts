const path = require("path");
const WebpackObfuscator = require('webpack-obfuscator');
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Because CEF has issues with loading source maps properly atm,
      // lets use the best we can get in line with `eval-source-map`
      if (webpackConfig.mode === 'development' && process.env.IN_GAME_DEV) {
        webpackConfig.devtool = 'eval-source-map'
        webpackConfig.output.path = path.join(__dirname, 'build')
      }

      return webpackConfig
    },
    plugins: [
      // new WebpackObfuscator({
      //   compact: true,
      //   controlFlowFlattening: true,
      //   controlFlowFlatteningThreshold: 0.75,
      //   deadCodeInjection: true,
      //   deadCodeInjectionThreshold: 0.4,
      //   debugProtection: false,
      //   debugProtectionInterval: false,
      //   disableConsoleOutput: false,
      //   domainLock: [],
      //   domainLockRedirectUrl: 'about:blank',
      //   forceTransformStrings: [],
      //   identifierNamesCache: null,
      //   identifierNamesGenerator: 'hexadecimal',
      //   identifiersDictionary: [],
      //   identifiersPrefix: '',
      //   ignoreRequireImports: false,
      //   inputFileName: '',
      //   log: false,
      //   numbersToExpressions: true,
      //   optionsPreset: 'default',
      //   renameGlobals: false,
      //   renameProperties: false,
      //   renamePropertiesMode: 'safe',
      //   reservedNames: [],
      //   reservedStrings: [],
      //   seed: 0,
      //   selfDefending: false,
      //   simplify: true,
      //   sourceMap: false,
      //   sourceMapBaseUrl: '',
      //   sourceMapFileName: '',
      //   sourceMapMode: 'separate',
      //   sourceMapSourcesMode: 'sources-content',
      //   splitStrings: true,
      //   splitStringsChunkLength: 10,
      //   stringArray: true,
      //   stringArrayCallsTransform: true,
      //   stringArrayCallsTransformThreshold: 0.5,
      //   stringArrayEncoding: ['rc4'],
      //   stringArrayIndexesType: [
      //     'hexadecimal-number'
      //   ],
      //   stringArrayIndexShift: true,
      //   stringArrayRotate: true,
      //   stringArrayShuffle: true,
      //   stringArrayWrappersCount: 1,
      //   stringArrayWrappersChainedCalls: true,
      //   stringArrayWrappersParametersMaxCount: 2,
      //   stringArrayWrappersType: 'variable',
      //   stringArrayThreshold: 0.75,
      //   target: 'browser',
      //   transformObjectKeys: false,
      //   unicodeEscapeSequence: false
      // })
    ]
  },

  devServer: (devServerConfig) => {
    if (process.env.IN_GAME_DEV) {
      // Used for in-game dev mode
      devServerConfig.devMiddleware.writeToDisk = true
    }

    return devServerConfig
  }
}
