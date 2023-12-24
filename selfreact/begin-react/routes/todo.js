import express from "express";

const router = express.Router();
router.post("/", () => {});
router.get("/todoId", (req, res) => {
    console.log(req.params.todoId);
    res.send(req.params.todoId + color + keyword);
});
router.delete("/", () => {});

export default router;
