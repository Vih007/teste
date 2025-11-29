module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // O plugin do 'react-native-worklets' deve ser o último.
      'react-native-worklets/plugin',
      'expo-router/babel',
    ],
  };
};