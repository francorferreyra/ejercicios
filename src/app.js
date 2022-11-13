import express from "express";
import accountRoute from "./routes/AccountsRoute.js"
import categoryRoute from "./routes/CategoryRoute.js"
import subCategoryRoute from "./routes/SubcategoryRoute.js"

const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())

app.use(accountRoute);
app.use(subCategoryRoute);
app.use(categoryRoute);

export default app