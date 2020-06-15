// QUICKSTART
// Step 1. Pick a style you like from https://www.mapbox.com/gallery/
// Step 2. Click "Add ___ to your account" at the bottom-right. This should take you to Mapbox Studio.
// Step 3. Click "Share" in the toolbar at the top-right
// Step 4. Click "Draft" at the top of the popup
// Step 5. Copy the "Style URL" and "Access Token" into the fields below
// Step 6. Done!
const ACCESS_TOKEN =
  "pk.eyJ1IjoicnlhbmRlbmczMiIsImEiOiJja2JnczM4NGcwbTR0MnVwdjRkdHRjajVoIn0.-Iwu79fxcN3LsADQqUE-1g";
const MAPBOX_STYLE =
  "mapbox://styles/ryandeng32/ckbgs6xjb5ev01joa3c9yt8gv/draft";

mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: "map",

  style: MAPBOX_STYLE,
  center: [-77.04, 38.907],
  zoom: 14,
});
