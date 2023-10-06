const express = require("express");
const {
  average,
  energy,
  manufacturing,
  aero,
  gas,
  oil,
  consumption,
  world,
  northernamerica,
  centralamerica,
  india,
  usa,
  russia,
  political,
  technological,
  year,
} = require("../controller/controller");

const router = express.Router();

router.get("/average", average);
router.get("/energy", energy);
router.get("/manufacturing", manufacturing);
router.get("/aero", aero);
router.get("/gas", gas);
router.get("/oil", oil);
router.get("/consumption", consumption);
router.get("/world", world);
router.get("/northernamerica", northernamerica);
router.get("/centralamerica", centralamerica);
router.get("/india", india);
router.get("/usa", usa);
router.get("/russia", russia);
router.get("/political", political);
router.get("/technological", technological);
router.get("/year", year);

module.exports = router;
