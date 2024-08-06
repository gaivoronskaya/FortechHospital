const path = require('path');

module.exports = {
  entry: './src/index.js', // Входная точка вашего приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к папке для собранных файлов
    filename: 'bundle.js', // Имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Правила для обработки файлов JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Загрузчик для Babel
          options: {
            presets: ['@babel/preset-env'], // Пресеты Babel
          },
        },
      },
      {
        test: /\.css$/, // Правила для обработки CSS файлов
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Правила для обработки изображений
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Расширения файлов, которые Webpack должен обрабатывать
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Папка для серверного контента
    compress: true,
    port: 3000, // Порт для сервера разработки
  },
  mode: 'development', // Режим сборки (development или production)
};
