# Scheduler app for Scytl

## Execution instructions
1) Install Quasar CLI. Make sure you have Node >=8 and NPM >=5 installed on your machine. We’ll also be installing Vue CLI, which is only used internally by Quasar for creating an initial Quasar application project. Both version 2 and 3 of Vue CLI will work for this.
2) Install Cordova Cli.
3) Open the project directory.
4) Choose how you want to deploy the project

## Install

#### - vue-cli globally
$ npm install -g vue-cli

#### - quasar-cli
run $ npm install -g quasar-cli

#### - Cordova CLI
run $ npm install -g cordova

## Clone the project
1) run $ git clone https://github.com/adocs2/Scheduler-scytl.git
1) run $ cd scheduler-scytl
2) run $ npm install

## Deploy
#### - For Web
1) run $ quasar dev

#### - Android Emulator
1) run the emulator in Android Studio clicking on AVD Manager and Launch
2) run $ quasar dev -m cordova -T android -t mat

#### - Your phone (Android)
1) make sure your phone is in dev mode.
2) plug your phone in the usb port.
2) run $ quasar dev -m cordova -T android -t mat

#### - Build and Get APK for test
1) run $ quasar build -m cordova -T android -t mat
2) run $ cd src-cordova
3) run $ cordova build android --prod
4) the Built apk path: \scheduler-scytl\src-cordova\platforms\android\app\build\outputs\apk\debug\app-debug.apk


* For IOS build access: https://quasar-framework.org/guide/
* Link for APK https://drive.google.com/open?id=1egYFNqUFyZA28CnboFp8JyL0AolIxEC4
