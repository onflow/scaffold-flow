# Scaffold-Flow
🏗 Forkable Flow dev stack focused on fast product iterations

## Features Provided

- FCL setup and configuration
- Wallet Discovery (including Dev Wallet on Emulator)
- CLI private key separation for security
- Flow.json loading for contract placeholders
- Deployment 

## Featues TODO

- Mainnet deployment
- JS Testing

## Getting Started

### Prerequisites
- [Flow-CLI v0.44+](https://github.com/onflow/flow-cli) 
- [Node v18](https://nodejs.org/en/download/)

### Setup

1.  Clone/Fork 🏗 scaffold-flow repository to your local machine:
```bash
git clone https://github.com/onflow/scaffold-flow.git
```

2. install required packages:
```bash
cd scaffold-flow
npm install
```

## Running your App

You will be able to run you app locally on the flow emulator immediately after forking! For running on Testnet, you will need to make some configuration changes.

### Emulator

1. In your terminal, use this Flow-CLI command to initialize the flow blockchain emulator:
```bash
flow emulator start
```

2. In a different terminal, use this Flow-CLI command to initilize the Dev Wallet:
```bash
flow dev-wallet
```

3. In a different terminal (Last one, promise!), use this command to deploy your contract(s) and initialize the App:
```bash
npm run dev:local:deploy
```
4. You're done! Checkout the App at http://localhost:3000

### Testnet

1. For running your app on Testnet, you will need a Testnet service account to deploy your app's contracts to. You can create one by using this Flow-CLI command. Follow the steps and select testnet. This will create a `testnet-account.private.json` file:
```bash
flow accounts create
Enter an account name: testnet
```

2. Then in `flow.json`, add your testnet address prefixed with an `0x` as an alias for `testnet` just like `emulator`:
```json
	"contracts": {
		"BlockTalk": {
			"source": "./cadence/contracts/BlockTalk.cdc",
			"aliases": {
				"emulator": "0xf8d6e0586b0a20c7",
        // "testnet": "0xtestnet_service_account_address"
			}
		}
	}
```

3. Use this command to deploy your contract(s) to the testnet service account and initialize the App in Testnet:
```bash
npm run dev:testnet:deploy
```

4. You're done! Checkout the App at http://localhost:3000

5. [Bonus] After changing your contracts, you can redeploy them to your testnet service account by running this command:
```bash
npm run dev:testnet:update
```

