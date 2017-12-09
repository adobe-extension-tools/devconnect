# devconnect

[![Build Status](https://aedtci.mtmograph.com/api/badges/adobe-extension-tools/devconnect/status.svg)](https://aedtci.mtmograph.com/adobe-extension-tools/devconnect)

CEP extension that starts a http server and evaluates incoming requests into the ExtendScript runtime.

This is going to be used by the `extendscript-bundler` project so that we have a simple & sane way to evaluate ExtendScript code in all the Adobe programs without having to mess with AppleScripts or VBScripts.

## requirements

**For developing:**

- node.js

**For packaging installers:**

- brew
- makensis

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install makensis
```

## install

```shell
git clone git@github.com:adobe-extension-tools/devconnect.git
cd devconnect
npm install
```

## develop

```shell
npm start
```

## build & package

```shell
npm run package
```