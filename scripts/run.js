const main = async () => {
    // hre == hardhat runtime environment
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');  // compile the given contract
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contracted deployed to:", waveContract.address);

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

runMain();