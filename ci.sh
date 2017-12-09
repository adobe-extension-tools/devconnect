#!/bin/bash

export NVM_DIR="$HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh"
cd /Users/vagrant/devconnect
npm install
sudo chmod +x node_modules/zxp-provider/bin/osx/ZXPSignCmd
npm run package