import { deleteMsg } from "../db.js";

const removeMsg = async (req,res) => {
    const id = await req.params.id;
    deleteMsg(id);
    res.redirect("/");
}

export default removeMsg