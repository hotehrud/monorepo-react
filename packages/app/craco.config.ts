import {
  getLoader,
  loaderByName,
  removePlugins,
  pluginByName,
} from '@craco/craco'

const cracoConfig = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    configure: (config: any) => {
      removePlugins(config.resolve, pluginByName('ModuleScopePlugin'))

      const { isFound, match } = getLoader(
        config,
        loaderByName('babel-loader'),
      ) as any

      if (isFound) {
        match.loader.include = undefined
        match.loader.exclude = /node_modules/
      }

      return config
    },
  },
}

export default cracoConfig
