const config = [
  {
    chainId: 43113,
    chainName: "Fuji",
    isBase: true,
    rpcUrl: "https://avalanche-fuji-c-chain-rpc.publicnode.com",
    wsUrl: "wss://avalanche-fuji-c-chain-rpc.publicnode.com",
    explorerUrl: "https://testnet.snowtrace.io",
    faucetUrl: "https://faucets.chain.link/fuji",
    convert_id: "2781",
    id: "5805",
    symbol: "AVAX",
    logo: "/tokens/avax-logo.svg",
    addresses: {
      Fusion: "0x3ED5EccFFD1afE3172A9DEeDeD795b479f95a841",
      FusionForwarder: "0x1Baf9847E474b1B548545b92F5186097DB4E77B1",
      FactoryForwarder: "0x64d82895F0F60B35c28e567d7a576Bad8EBaf369",
      FusionProxyFactory: "0xf76B9F4D05189A968321AB9285fc66B0f3f76ab8",
      FusionVault: "0x3D00e49fCee24826fa677fadb2e0625293369972",
      PasswordVerifier: "0xADcCA523443cf9e9Cfda181872fB20D286C5ebBc",
      SignatureVerifier: "0xB78Df84CE1569C7b6432e2689EFa079494913E35",
      FusionGasTank: "0x51781cc1439BD05a85185C8c8CEc979b263236e3",
    },
    tokens: [
      {
        name: "AVAX",
        symbol: "AVAX",
        address: null,
        convert_id: "5805",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/avax-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x5425890298aed601595a70AB815c96711a31Bc65",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
      {
        name: "LINK",
        symbol: "LINK",
        address: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
        convert_id: "1975",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/link-logo.svg",
      },
    ],
  },
  {
    chainId: 80002,
    chainName: "Amoy",
    isBase: false,
    rpcUrl: "https://rpc.ankr.com/polygon_amoy",
    wsUrl: "wss://polygon-amoy-bor-rpc.publicnode.com",
    explorerUrl: "https://amoy.polygonscan.com",
    faucetUrl: "https://faucets.chain.link/polygon-amoy",
    convert_id: "2781",
    id: "3890",
    symbol: "MATIC",
    logo: "/tokens/matic-logo.svg",
    addresses: {
      Fusion: "0xd8c7f8D24d32C81641CBA0A294E35C22fcF38dFd",
      FusionForwarder: "0x843fE00Bec83abE55B5A2a02826b0B35e11f6d6d",
      FactoryForwarder: "0x15335B81E1919E82bEc4Cde414Db53E57f103fDd",
      FusionProxyFactory: "0xA40d26b6598EE91939CB4871121051B528111417",
      FusionVault: "0x92A8952893e140d5c0f7d3dFbFd189FbBbF3A4FA",
      PasswordVerifier: "0x71637974910Be530f27EA485bE6fcda72999d56a",
      SignatureVerifier: "0x6013C3A2FFDFF761E71b27420cD675b2f9790C1D",
      FusionGasTank: "0x51781cc1439BD05a85185C8c8CEc979b263236e3",
    },
    tokens: [
      {
        name: "MATIC",
        symbol: "MATIC",
        address: null,
        convert_id: "3890",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/matic-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
      {
        name: "LINK",
        symbol: "LINK",
        address: "0x0Fd9e8d3aF1aaee056EB9e802c3A762a667b1904",
        convert_id: "1975",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/link-logo.svg",
      },
    ],
  },
  {
    chainId: 84532,
    chainName: "Base",
    isBase: false,
    rpcUrl: "https://base-sepolia.blockpi.network/v1/rpc/public",
    wsUrl: "wss://base-sepolia-rpc.publicnode.com",
    explorerUrl: "https://sepolia.basescan.org",
    faucetUrl: "https://faucets.chain.link/base-sepolia",
    convert_id: "2781",
    id: "1027",
    symbol: "ETH",
    logo: "/tokens/base-logo.svg",
    addresses: {
      Fusion: "0xf1E842Ef0774dBE7CaF7f0F95d1315fD834d2a4b",
      FusionForwarder: "0x2aa4c97688f340C8A2bDE2016b16dEFDC259834D",
      FactoryForwarder: "0x8487F6630510A00bFACd9Fe701700F193F52C04F",
      FusionProxyFactory: "0x2EF41EC23021bD5aBa53C6599D763e89A897Acad",
      FusionVault: "0x294d7bcC3A6eCB725aE877E4e9a520bEB50E802C",
      PasswordVerifier: "0x44e8D61d983AaC3571d3c5f69Af056492a83C11f",
      SignatureVerifier: "0xc98e8e1939d1a36d3744bb5009F559Ee6A351C5b",
      FusionGasTank: "0x51781cc1439BD05a85185C8c8CEc979b263236e3",
    },
    tokens: [
      {
        name: "ETH",
        symbol: "ETH",
        address: null,
        convert_id: "1027",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/eth-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
      {
        name: "LINK",
        symbol: "LINK",
        address: "0xe4ab69c077896252fafbd49efd26b5d171a32410",
        convert_id: "1975",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/link-logo.svg",
      },
    ],
  },
  {
    chainId: 11155420,
    chainName: "Optimism",
    isBase: false,
    rpcUrl: "https://optimism-sepolia.drpc.org",
    wsUrl:
      "wss://optimism-sepolia.infura.io/ws/v3/f33dc6bd82054b91aada84a3ad016c64",
    explorerUrl: "https://sepolia-optimism.etherscan.io",
    faucetUrl: "https://faucets.chain.link/optimism-sepolia",
    convert_id: "2781",
    id: "1027",
    symbol: "ETH",
    logo: "/tokens/op-logo.svg",
    addresses: {
      Fusion: "0xF768fA09b378200811eE0CFe6DeD7B2E830202E5",
      FusionForwarder: "0x2020B832f19BCF6aC3ae8073Fe1C8e06140c2306",
      FactoryForwarder: "0xADcCA523443cf9e9Cfda181872fB20D286C5ebBc",
      FusionProxyFactory: "0x1FAd28Ec81C7e9DF883bf05aA1a42aBe4684904E",
      FusionVault: "0x8C76A41a3bF34624589f1fB59A42836C27Ad2a76",
      PasswordVerifier: "0xfeE8519dA4D85ECa10d77735dcf1b89F44dE03b9",
      SignatureVerifier: "0xea8A2dD688F021A2d2FdA73124235e673E7A4BFc",
      FusionGasTank: "0x51781cc1439BD05a85185C8c8CEc979b263236e3",
    },
    tokens: [
      {
        name: "ETH",
        symbol: "ETH",
        address: null,
        convert_id: "1027",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/eth-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
      {
        name: "LINK",
        symbol: "LINK",
        address: "0xE4aB69C077896252FAFBD49EFD26B5D171A32410",
        convert_id: "1975",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/link-logo.svg",
      },
    ],
  },
];

export default config;
