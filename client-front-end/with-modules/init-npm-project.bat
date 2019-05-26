REM CONFIGURATION POUR WEBPACK4 (avec géneration de bundle , babel et scss)

REM npm install -g webpack webpack-cli

REM npm init

REM npm install --save-dev webpack webpack-cli
REM install -g pour lancement commande webpack 
REM et install --save-dev pour accès api webpack depuis webpack.config.js
REM ajuster le fichier webpack.config.js
REM avant de lancer webpack


REM npm install --save-dev babel-loader @babel/core
REM npm install --save-dev @babel/preset-env @babel/register


REM l'ancien extract-text-webpack-plugin (seulement compatible avec webpack4 que si en v4 beta)
REM est moins bien que mini-css-extract-plugin (spécifiquement prévu pour webpack 4)

REM npm install --save-dev  mini-css-extract-plugin
REM npm install --save-dev  style-loader css-loader

REM npm install --save-dev sass-loader node-sass

REM autre ajout possible : postcss-loader pour générer des styles css spécifiques aux navigateurs

pause