const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const SHIPPER_STATUS_URL = "http://localhost:5003/api/v1/items";
  try {
    const isShipperReady = await axios.get(SHIPPER_STATUS_URL);
    if (isShipperReady?.data?.length > 0) {
      res.status(200).json({
        shipper: {
          availability: "Shipper is ready to accept orders",
          currentState: "Awaiting orders",
        },
      });
    } else {
      res.status(200).json({
        ShipperStatus:
          "Sorry, the shipper is NOT ready to accept orders at the moment!",
      });
    }
  } catch (e) {
    res.status(200).json({
      ShipperStatus: "Sorry, no shipper is available at the moment!",
    });
  }
});

module.exports = router;
