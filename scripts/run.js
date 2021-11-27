const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    // hre == hardhat runtime environment
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');  // compile the given contract
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contracted deployed to:", waveContract.address);
    console.log("Contracted deployed by:", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait()

    waveCount = await waveContract.getTotalWaves();

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