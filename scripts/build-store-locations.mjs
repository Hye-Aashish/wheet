import fs from "fs";

const fixes = {
  7: [49.14892, -122.8886006],
  9: [49.0348989, -122.8008819],
  13: [49.1889024, -122.8457448],
  16: [49.8870418, -119.4219277],
  17: [49.2189851, -122.92765],
  19: [49.183876, -123.092026],
  27: [49.0486085, -122.341485],
  28: [49.118295, -122.6690818],
  29: [48.4463843, -123.3784187],
  32: [49.1367433, -122.89141],
  34: [49.1513708, -122.8648477],
  37: [49.127085, -122.7996889],
  39: [49.0690671, -122.3586486],
  40: [49.176309, -122.8671152],
  41: [49.1190154, -122.6962495],
  42: [49.176509, -122.8898654],
  44: [49.9529252, -97.147918],
};

const defaultHours = "Open Daily • 9:00 AM – 9:00 PM";
const defaultProducts = "Durum Wheat, Multigrain, Corn, Besan, Jawar";

const data = JSON.parse(fs.readFileSync("scripts/geocoded.json", "utf8"));

const lines = data.map((s) => {
  if (fixes[s.id]) {
    s.lat = fixes[s.id][0];
    s.lng = fixes[s.id][1];
  }
  if (!s.lat) throw new Error(`missing coords ${s.id} ${s.name}`);

  return `  {
    id: ${s.id},
    name: ${JSON.stringify(s.name)},
    address: ${JSON.stringify(s.address)},
    city: ${JSON.stringify(s.city)},
    region: ${JSON.stringify(s.region)},
    province: ${JSON.stringify(s.province)},
    provinceCode: ${JSON.stringify(s.provinceCode)},
    postalCode: ${JSON.stringify(s.postalCode)},
    lat: ${s.lat},
    lng: ${s.lng},
    tag: ${JSON.stringify(s.tag)},
    badge: ${JSON.stringify(s.badge)},
    phone: "",
    hours: ${JSON.stringify(defaultHours)},
    products: ${JSON.stringify(defaultProducts)},
  }`;
});

const out = `export const storeLocations = [\n${lines.join(",\n")},\n];\n`;
fs.writeFileSync("app/data/storeLocations.js", out);
console.log(`Wrote ${data.length} locations`);
