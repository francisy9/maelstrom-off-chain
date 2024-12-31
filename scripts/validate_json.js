import Ajv from "ajv";
import addFormats from "ajv-formats";
import schema from "../metadata/cardSchema.json" assert { type: 'json' };
import cardEffectSchema from "../metadata/cardEffectSchema.json" assert { type: 'json' };
import data from "../metadata/sampleCardJson.json" assert { type: 'json' };

const ajv = new Ajv();

addFormats(ajv);

ajv.addSchema(cardEffectSchema, "cardEffectSchema");
const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.log(validate.errors);
} else {
  console.log("Valid JSON!");
}
