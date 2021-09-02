const Colors = artifacts.require("Color");

module.exports = function(deployer) {
    deployer.deploy(Colors);
};