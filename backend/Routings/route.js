let exp = require("express");
let routes = exp.Router()
let func = require("../Functions/logic")

routes.get("/",func.Home);
routes.post("/reg",func.register_user);
routes.get("/user",func.get_user)
routes.delete("/user/:id",func.delete_record)
routes.put("/user/:id",func.update_record)


module.exports = routes
