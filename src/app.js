import express from "express";
import accountRoute from "./routes/AccountsRoute.js"
// import subCategory from "./routes/CategoryRoute.js"
// import category from "./routes/SubcategoryRoute.js"

const app = express();

app.use(express.json())

app.use(accountRoute);
// app.use(subCategory)
// app.use(category)

export default app