import Ajv from "ajv";
import addFormats from "ajv-formats";
import schema from "../metadata/schema/cardSchema.json" assert { type: 'json' };
import cardEffectSchema from "../metadata/schema/cardEffectSchema.json" assert { type: 'json' };

const ajv = new Ajv();
addFormats(ajv);
ajv.addSchema(cardEffectSchema, "cardEffectSchema");
const validate = ajv.compile(schema);

const fileName = process.argv[2];
if (!fileName) {
    console.error("Please provide a file name as an argument");
    process.exit(1);
}

const filePath = `../metadata/card_data/${fileName}`;
const fileData = await import(filePath, { assert: { type: 'json' }});
const data = fileData.default;

const valid = validate(data);

if (!valid) {
  console.log(validate.errors);
} else {
  console.log("Valid JSON!");
}
