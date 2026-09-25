import { messages } from "../db.js";
import { deleteMsg } from "../db.js";

export const postMsg = async (req,res) => {
    const userA = await req.body.authorName;
      const textA = await req.body.authorText;
    
      messages.push({
        id: crypto.randomUUID(),
        text: textA,
        user: userA,
        added: new Date(),
      });
    
      res.redirect("/");
}


export const removeMsg = async (req,res) => {
    const id = await req.params.id;
    deleteMsg(id);
    res.redirect("/");
}