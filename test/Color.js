const Color = artifacts.require('./Color.sol');

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Color', (accounts) => {

    let contract;
    before(async() => {
        contract = await Color.deployed();
    })

    describe('deployment', async() => {
        it('deploys sucesfully', async() => {
            const address = await contract.address;
            console.log(address);
            assert.notEqual(address, '')
        })
    })

    it('has a name', async() => {
        var name = await contract.name();
        assert.equal(name, 'Color');
    })

    describe('minting', async() => {
        it('creates a new token', async() => {
            const result = await contract.mint("#FFFFFF");
            const totalSupply = await contract.totalSupply();

            assert.equal(totalSupply, 1);
            const event = result.logs[0].args;

            assert.equal(event.tokenId.toNumber(), 1, 'token id is correct');
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct');
            assert.equal(event.to, accounts[0], 'admin')

            console.log('total supply: ', totalSupply.toNumber());
        })
    })
})