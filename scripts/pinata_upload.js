import { PinataSDK } from "pinata-web3";
import dotenv from "dotenv";

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
    const file = new File(["hello"], "Testing.txt", { type: "text/plain" });
    const upload = await pinata.upload.file(file);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
}

await main();
