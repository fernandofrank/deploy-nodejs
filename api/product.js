const express = require("express");
const router = express.Router();
/**
 *
 * GET product list.
 *                I
 *  @return product list|empty.
 */
router.get("/", async (req, res) => {
	try {
		res.json({
			status: 200,
			message: "Get data has successfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send("Server error");
	}
});
module.exports = router;
