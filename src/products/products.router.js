const router = require("express").Router({ mergeParams: true });
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.route("/")
    .get(cors(), controller.list)
    .all(methodNotAllowed);

router.route("/:productId([0-9]+)")
    .get(cors(), controller.read)
    .all(methodNotAllowed);

router.route("/out-of-stock-count")
    .get(cors(), controller.listOutOfStockCount)
    .all(methodNotAllowed);

router.route("/price-summary")
    .get(cors(), controller.listPriceSummary)
    .all(methodNotAllowed);

router.route("/total-weight-by-product")
    .get(cors(), controller.listTotalWeightByProduct)
    .all(methodNotAllowed);

module.exports = router;
