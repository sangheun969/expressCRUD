const express = require("express");
const router = express.Router();
const controller = require("./boardController");

router.get("/list", controller.getList);
router.get("/write", controller.getWrite);
router.get("/view", controller.getView);
router.get("/modify", controller.getModify);
router.get("/delete", controller.getDelete);

router.post("/write", controller.postWrite);
router.post("/modify", controller.postModify);
module.exports = router;
