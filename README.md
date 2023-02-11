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

3. In a different terminal, use this Flow-CLI command to deploy and manage your contracts. This listener will automatically update and redeploy your contracts as you work!

```bash
flow dev
```

> Ensure your account address is prefixed with `0x`. Add the prefix if missing.
> ```
> "default": {
>   "address": "0x0000000000000000", // confirm this address has the prefix
>   "key": "0000000000000000000000000000000000000000000000000000000000000000"
> },
> ```


4. In a different terminal (Last one, promise!), use this command to deploy your contract(s) and initialize the App:
```bash
npm run dev
```
4. You're done! Checkout the App at http://localhost:3000
 