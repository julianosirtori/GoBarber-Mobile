# Aplicação Mobile do Projeto GoBarber
Mobile do Projeto Gobarber

OBS: Foi testado apenas em dispositivos android

## Setup

1. Instale NodeJS, se você não possue ainda.

2. Instale Yarn, se você não possue ainda.

  ```
  [sudo] npm install -g yarn
  ```
3. Instale o React Native CLI, se você não possue ainda.

  ```
  [sudo] npm install –g react-native-cli
  ```

4. Clone o Projeto:

  ```
  git clone git@github.com:julianosirtori/GoBarber-Mobile.git
  ```
5. Abra o Projeto:
  ```
  cd GoBarber-Mobile
  ```
6. Installe as dependencias:
  ```
  yarn install
  ```
7. Configure o host da Api [Api GoBarber](https://github.com/julianosirtori/GoBarber-BackEnd) em `src/services/api.js`

8. Para rodar o app:
  ```
  react-native run-android
  ```
9. E depois:
  ```
  yarn start
  ```
