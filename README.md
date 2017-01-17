#Prerequisites
The following requirements can be installed with [Homebrew](http://brew.sh/) on Mac OS, or manually through their individual sites.
* [Node](https://nodejs.org/en/) (with npm):
`brew install node`

* Watchman (for file system watching)
`brew install watchman`

* React Native CLI
`npm install -g react-native-cli`

* Xcode for iOS development & device simulation

# <a name="gettingstarted"></a>Getting Started
Install dependencies with `npm install`

# Running
Within the project directory, use
`react-native run-ios`

# Twilio-express server
More info on Twilio integration and the express app, check the submodule repository, here [https://github.com/Nmargolis/twilio-express](https://github.com/Nmargolis/twilio-express)

Install the `twilio-express` submodule with
```
git submodule init
git submodule update
```