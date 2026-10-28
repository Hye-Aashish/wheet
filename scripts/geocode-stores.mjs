import fs from "fs";

const stores = [
  { name: "Fruiticana (Surrey - Cedar Hills)", address: "12867 96 Avenue, Surrey, BC V3V 6V9", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3V 6V9", badge: "Fruiticana", tag: "Cedar Hills" },
  { name: "Fruiticana (Surrey - Clayton)", address: "7228 192 Street, Surrey, BC V4N 5Y4", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V4N 5Y4", badge: "Fruiticana", tag: "Clayton" },
  { name: "Fruiticana (Surrey - Fleetwood)", address: "15933 Fraser Highway, Surrey, BC V4N 0Y3", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V4N 0Y3", badge: "Fruiticana", tag: "Fleetwood" },
  { name: "Fruiticana (Surrey - Newton 64th Avenue)", address: "13174 64 Avenue, Surrey, BC V3W 1X7", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 1X7", badge: "Fruiticana", tag: "Newton 64 Ave" },
  { name: "Fruiticana (Surrey - Newton 72nd Avenue)", address: "13783 72 Avenue, Surrey, BC V3W 9Z1", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 9Z1", badge: "Fruiticana", tag: "Newton 72 Ave" },
  { name: "Fruiticana (Surrey - Newton 76A Avenue)", address: "12788 76A Avenue, Surrey, BC V3W 1S9", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 1S9", badge: "Fruiticana", tag: "Newton 76A Ave" },
  { name: "Fruiticana (Surrey - Scott Road)", address: "12047 80 Avenue, Surrey, BC V3W 1M9", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 1M9", badge: "Fruiticana", tag: "Scott Road" },
  { name: "Fruiticana (Surrey - Scott Road South)", address: "7028 120 Street, Surrey, BC V3W 3M8", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 3M8", badge: "Fruiticana", tag: "Scott Road South" },
  { name: "Fruiticana (Surrey - South Surrey / White Rock)", address: "Unit 191, 1812 152 Street, Surrey, BC V4A 4N5", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V4A 4N5", badge: "Fruiticana", tag: "South Surrey" },
  { name: "Fruiticana (Surrey - 64th Avenue)", address: "16788 64 Avenue, Surrey, BC V3S 3Y2", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3S 3Y2", badge: "Fruiticana", tag: "64 Ave" },
  { name: "Fruiticana (Surrey - 72nd Avenue)", address: "12990 72 Avenue, Surrey, BC V3W 2M9", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 2M9", badge: "Fruiticana", tag: "72 Ave" },
  { name: "Fruiticana (Surrey - Fleetwood 84th Avenue)", address: "15230 84 Avenue, Surrey, BC V3S 2N1", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3S 2N1", badge: "Fruiticana", tag: "Fleetwood 84 Ave" },
  { name: "Fruiticana (Surrey - King George Boulevard)", address: "Unit 101, 10241 King George Boulevard, Surrey, BC V3T 2W6", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3T 2W6", badge: "Fruiticana", tag: "King George Blvd" },
  { name: "Fruiticana (Abbotsford - Bourquin Crescent)", address: "2785 Bourquin Crescent West, Abbotsford, BC V2S 5X6", city: "Abbotsford", region: "Abbotsford, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V2S 5X6", badge: "Fruiticana", tag: "Bourquin Crescent" },
  { name: "Fruiticana (Abbotsford - Maclure Road)", address: "31205 Maclure Road, Abbotsford, BC V2T 5E5", city: "Abbotsford", region: "Abbotsford, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V2T 5E5", badge: "Fruiticana", tag: "Maclure Road" },
  { name: "Fruiticana (Kelowna)", address: "160-2463 Highway 97 North, Kelowna, BC V1X 4J2", city: "Kelowna", region: "Kelowna, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V1X 4J2", badge: "Fruiticana", tag: "Highway 97" },
  { name: "Fruiticana (New Westminster)", address: "Unit 10, 1331 6th Street, New Westminster, BC V3L 3A9", city: "New Westminster", region: "Metro Vancouver, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3L 3A9", badge: "Fruiticana", tag: "6th Street" },
  { name: "Fruiticana (Port Coquitlam)", address: "2807 Shaughnessy Street, Port Coquitlam, BC V3C 3H1", city: "Port Coquitlam", region: "Metro Vancouver, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3C 3H1", badge: "Fruiticana", tag: "Shaughnessy St" },
  { name: "Fruiticana (Richmond)", address: "4101 No. 5 Road, Richmond, BC V6X 2T9", city: "Richmond", region: "Metro Vancouver, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V6X 2T9", badge: "Fruiticana", tag: "No. 5 Road" },
  { name: "Fruiticana (Vancouver)", address: "6257 Fraser Street, Vancouver, BC V5W 3A2", city: "Vancouver", region: "Metro Vancouver, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V5W 3A2", badge: "Fruiticana", tag: "Fraser Street" },
  { name: "Fruiticana (Calgary - Saddletowne)", address: "216 Saddletowne Circle NE, Calgary, AB T3J 0C9", city: "Calgary", region: "Calgary & Area, AB", province: "Alberta", provinceCode: "AB", postalCode: "T3J 0C9", badge: "Fruiticana", tag: "Saddletowne" },
  { name: "Fruiticana (Calgary - Country Hills)", address: "6004 Country Hills Boulevard NE, Calgary, AB", city: "Calgary", region: "Calgary & Area, AB", province: "Alberta", provinceCode: "AB", postalCode: "", badge: "Fruiticana", tag: "Country Hills" },
  { name: "Fruiticana (Chestermere)", address: "140 East Chestermere Drive, Chestermere, AB", city: "Chestermere", region: "Calgary & Area, AB", province: "Alberta", provinceCode: "AB", postalCode: "", badge: "Fruiticana", tag: "Chestermere" },
  { name: "Fruiticana (Edmonton - Ellerslie)", address: "6860 Ellerslie Road SW, Edmonton, AB", city: "Edmonton", region: "Edmonton, AB", province: "Alberta", provinceCode: "AB", postalCode: "", badge: "Fruiticana", tag: "Ellerslie" },
  { name: "Fruiticana (Edmonton - 34th Avenue)", address: "9324 34 Avenue NW, Edmonton, AB", city: "Edmonton", region: "Edmonton, AB", province: "Alberta", provinceCode: "AB", postalCode: "", badge: "Fruiticana", tag: "34 Avenue" },
  { name: "Day To Day (Surrey - Wholesale Cash & Carry)", address: "7843 128 Street, Surrey, BC V3V 2J8", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3V 2J8", badge: "Day To Day", tag: "128 St Wholesale" },
  { name: "Day To Day (Abbotsford)", address: "31877 South Fraser Way, Unit 103, Abbotsford, BC V2T 1V4", city: "Abbotsford", region: "Abbotsford, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V2T 1V4", badge: "Day To Day", tag: "South Fraser Way" },
  { name: "Day To Day (Langley)", address: "6339 200 Street, Unit 500, Langley, BC V2Y 1A2", city: "Langley", region: "Langley, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V2Y 1A2", badge: "Day To Day", tag: "200 Street" },
  { name: "Day To Day (Victoria)", address: "Unit 7, 50 Burnside Road, Victoria, BC V9A 1B5", city: "Victoria", region: "Victoria, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V9A 1B5", badge: "Day To Day", tag: "Burnside Road" },
  { name: "Day To Day (Kamloops)", address: "363 Tranquille Road, Kamloops, BC V2B 3G4", city: "Kamloops", region: "Kamloops, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V2B 3G4", badge: "Day To Day", tag: "Tranquille Road" },
  { name: "Day To Day (Delta - 82nd Avenue)", address: "11961 82 Avenue, Delta, BC", city: "Delta", region: "Delta, BC", province: "British Columbia", provinceCode: "BC", postalCode: "", badge: "Day To Day", tag: "82 Avenue" },
  { name: "Day To Day (Delta - 120th Street)", address: "7337 120 Street, Unit 100, Delta, BC V4C 1C9", city: "Delta", region: "Delta, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V4C 1C9", badge: "Day To Day", tag: "120 Street" },
  { name: "Surrey Supermarket (Surrey - 104 Avenue)", address: "13853 104 Avenue, Surrey, BC V3T 1W8", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3T 1W8", badge: "Surrey Supermarket", tag: "104 Avenue" },
  { name: "Surrey Supermarket (Surrey - Payal Business Centre)", address: "Unit 361, 8158 128 Street, Surrey, BC V3W 1R1", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 1R1", badge: "Surrey Supermarket", tag: "Payal Business Centre" },
  { name: "Aggarwal Grocery Hub (Surrey - 78 Avenue)", address: "12787 78 Avenue, Surrey, BC V3W 5Z7", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 5Z7", badge: "Aggarwal Grocery Hub", tag: "78 Avenue" },
  { name: "Aggarwal Grocery Hub (Surrey - King George Boulevard)", address: "6899 King George Boulevard, Surrey, BC V3W 5A1", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 5A1", badge: "Aggarwal Grocery Hub", tag: "King George Blvd" },
  { name: "Sun Farm (Surrey - 68 Avenue)", address: "15299 68 Avenue, Unit 109, Surrey, BC V3S 2C1", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3S 2C1", badge: "Sun Farm", tag: "68 Avenue" },
  { name: "Sunfarm (Surrey - 160 Street)", address: "9196 160 Street, Surrey, BC V4N 3A5", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V4N 3A5", badge: "Sunfarm", tag: "160 Street" },
  { name: "Sunfarm (Abbotsford - Townline Road)", address: "3670 Townline Road, Unit 108, Abbotsford, BC V2T 0H2", city: "Abbotsford", region: "Abbotsford, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V2T 0H2", badge: "Sunfarm", tag: "Townline Road" },
  { name: "Farm & Spice (Surrey - 96 Avenue)", address: "12830 96 Avenue, Units 9 & 10, Surrey, BC V3V 0C2", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3V 0C2", badge: "Farm & Spice", tag: "96 Avenue" },
  { name: "Farm & Spice (Surrey - 64 Avenue)", address: "14320 64 Avenue, Unit 101, Surrey, BC V3W 1Z1", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3W 1Z1", badge: "Farm & Spice", tag: "64 Avenue" },
  { name: "Farm & Spice (Surrey - Scott Town Plaza)", address: "9548 120 Street, Unit 9546, Surrey, BC V3V 4C1", city: "Surrey", region: "Surrey, BC", province: "British Columbia", provinceCode: "BC", postalCode: "V3V 4C1", badge: "Farm & Spice", tag: "Scott Town Plaza" },
  { name: "Brampton Cash and Carry (Winnipeg)", address: "1315 Inkster Boulevard, Winnipeg, MB R2X 1P6", city: "Winnipeg", region: "Winnipeg, MB", province: "Manitoba", provinceCode: "MB", postalCode: "R2X 1P6", badge: "Brampton Cash and Carry", tag: "Inkster Blvd" },
  { name: "Singh Grocers (Winnipeg)", address: "2777 McPhillips Street, Unit 107, Winnipeg, MB R2V 5K5", city: "Winnipeg", region: "Winnipeg, MB", province: "Manitoba", provinceCode: "MB", postalCode: "R2V 5K5", badge: "Singh Grocers", tag: "McPhillips St" },
  { name: "Malhotra Wholesale (Edmonton)", address: "9426 39 Avenue NW, Edmonton, AB T6E 5T9", city: "Edmonton", region: "Edmonton, AB", province: "Alberta", provinceCode: "AB", postalCode: "T6E 5T9", badge: "Malhotra Wholesale", tag: "39 Avenue" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function geocode(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query + ", Canada")}`;
  const res = await fetch(url, { headers: { "User-Agent": "BAAZ-Store-Locator/1.0" } });
  const data = await res.json();
  if (data[0]) return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  return null;
}

const results = [];
for (let i = 0; i < stores.length; i++) {
  const s = stores[i];
  const coords = await geocode(s.address);
  if (!coords) console.error("FAILED:", s.name);
  results.push({ ...s, id: i + 1, lat: coords?.lat ?? 0, lng: coords?.lng ?? 0 });
  process.stderr.write(`${i + 1}/${stores.length}\n`);
  await sleep(1100);
}

fs.writeFileSync("scripts/geocoded.json", JSON.stringify(results, null, 2), "utf8");
console.log(`Saved ${results.length} locations to scripts/geocoded.json`);
