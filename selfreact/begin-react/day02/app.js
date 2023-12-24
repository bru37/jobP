import express from "express";
const app = express();
// app.get("/todo/:todoId", (req, res) => {
//     console.log(req.params.todoId);
//     res.send(req.params.todoId + color + keyword);
// });
const_dirname = path.resolve();
app.use("/", express.static(path.join(_dirname, "public")));
app.use("/todo", todo);
app.listenerCount(3030, () => {
    console.log("3030포트로 서버 실행 중");
});
