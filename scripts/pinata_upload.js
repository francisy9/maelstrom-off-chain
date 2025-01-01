import { PinataSDK } from "pinata-web3";
import dotenv from "dotenv";
import cardData from '../metadata/card_data/sampleCard.json' assert { type: 'json' };

dotenv.config();

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "blue-fantastic-capybara-764.mypinata.cloud",
});

async function main() {
  if (!process.env.PINATA_JWT) {
    console.error("PINATA_JWT environment variable is not defined");
    process.exit(1);
  }

  try {
    console.log(cardData);
    const jsonString = JSON.stringify(cardData);
    const blob = new Blob([jsonString], { type: "application/json" });
    console.log(blob);
    const upload = await pinata.upload.file(blob);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
}

await main();
