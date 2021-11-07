import express from "express";
const router = express.Router();

import mcc from "../../data/halo.js";

router.get("/xp", async (req, res) => {
	try {
		const xpImg = await mcc.images.xp();
		res.set("Content-Type", "image/jpeg");
		xpImg.pipe(res);
	} catch(err) {
		console.log(err);
		res.json({err});
	}
});

router.get("/ranks", async (req, res) => {
	try {
		const ranksImg = await mcc.images.ranks();
		res.set("Content-Type", "image/jpeg");
		ranksImg.pipe(res);
	} catch(err) {
		console.log(err);
		res.json({err});
	}
});

router.get("/stats", async (req, res) => {
	try {
		const stats = await mcc.stats();
		res.json(stats);		
	} catch(err) {
		console.log(err);
		res.json({err});
	}
});

router.get("/clips", async (req, res) => {
	try {
		const clipsList = await mcc.clips();
		res.json(clipsList);
	} catch(err) {
		console.log(err);
		res.json({err});
	}
});

router.get("/clip/:id", (req, res) => {
	if(req.params.id) {
		res.redirect(mcc.clip(req.params.id));
	} else {
		res.sendStatus(404);
	}
});

router.get("/screenshots", async (req, res) => {
	try {
		const sss = await mcc.screenshots();
		res.json(sss);
	} catch(err) {
		console.log(err);
		res.json({err});
	}
});

router.get("/matches", async (req, res) => {
	try {
		const matches = await mcc.matches();
		res.json(matches);
	} catch(err) {
		console.log(err);
		res.json({err});
	}
});

export default router;