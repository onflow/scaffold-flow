# 👋  Flow Web dApp Scaffold
We've created this scaffold to showcase a simple web application that mints tokens that contain tweet like posts. 
You are able to observe a web application setup using next.js and FCL (Flow javascript library). 
We've also created the contracts and transactions this application need to function.

**Here's an example of the application UI**

![](./example_screen.png)
As you can see we can write different "talks" which in background are minted on the Flow network and displayed 
as a list. In order to mint this "talks" we use a development wallet, which you choose when 
signing in the application. Because the FCL handles authentication for you, there's no 
additional work required from a developer. If you are coming from Ethereum world you can 
think of it as Metamask but no extension required because it works as a library integrated 
into your application, making it work seamless. You can [read more about FCL and how it works here](https://developers.flow.com/tools/fcl-js#what-is-fcl).


## 🔨 Getting Started

### Prerequisites
- [Flow-CLI v0.44+](https://developers.flow.com/tools/flow-cli/install) 
- [Node v18](https://nodejs.org/en/download/)

### Components
- Flow CLI contains a lot of utilities and tools you can use during development
- [Flow Emulator](https://developers.flow.com/tools/emulator) is a simple version of a Flow network you run locally during development
- [Flow Dev Wallet](https://github.com/onflow/fcl-dev-wallet) is a tool that simulates a wallet provider, which is then consumed by FCL (Flow library used in the web application)

All of the above components can be run using the Flow CLI. 

## 👨‍💻 Setup

**1. Setup your project** (run in terminal)
```bash 
flow setup {your project name} --scaffold
```
Choose the `Web Dapp using FCL` scaffold.

_Here's an example_
```
flow setup my-project --scaffold

? Which scaffold would you like to use:
    Simple Cadence Project - Scaffold contains required folder structure as well as some example Cadence code.
  ▸ Web Dapp using FCL - Simple demo application using next.js and FCL with provided Cadence contracts.
```

_Alternatively you can just clone the Github project to your machine_
`git clone https://github.com/onflow/scaffold-flow.git`


**2. Install required packages**
```bash
npm install
```

## 🚧 Start Up

You can first run your application locally using the emulator and dev-wallet, 
any changes you make to the application will be updated automatically too. 
There is another testnet network you can also use to deploy this application, but 
that network is not hosted locally by you, but it's provided by Flow. So in order to run the 
application there you will need to follow couple additional steps.

### Local Emulator Deployment

**1. Start Emulator and Dev Wallet**
```bash
flow emulator & flow dev-wallet
```

**2. Deploy Contracts**
Running dev command will automatically deploy and update application contracts.

```bash
flow dev
```

**3. Build Web Application**
Running this command will build your next.js application.
```bash
npm run dev
```
**4. You're done!**

Open the application at http://localhost:3000

<button name="button" onclick="http://localhost:3000">Open Application</button>
