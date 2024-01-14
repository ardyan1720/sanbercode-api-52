const newman = require("newman");

newman.run({
  collection: "../json-collection/Ardyan.posman_collection.json",
  environment: "../json-env/ardyan-env.json",
  reporters: ["cli", "htmlextra"],
});
