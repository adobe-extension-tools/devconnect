#!/bin/bash

export NVM_DIR="$HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh"
cd /Users/vagrant/devconnect
sudo chmod +x node_modules/zxp-provider/bin/osx/ZXPSignCmd
npm install
npm run package