import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "blue-fantastic-capybara-764.mypinata.cloud",
});

async function main() {
  try {
    const data = await pinata.gateways.get("bafkreieizjpyc3roqp5v7dugfcdcgvwodc7vegg2qupfrjndgow2c24iza");
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

main();