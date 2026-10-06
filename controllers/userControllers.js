import { messages, deleteMsg } from "../db.js";

export const postMsg = (req,res,next) => {
    try {
        const userA =  req.body.authorName;
          const textA =  req.body.authorText;
        
          messages.push({
            id: crypto.randomUUID(),
            text: textA,
            user: userA,
            added: new Date(),
          });
        
          res.redirect("/");
    } catch (error) {
        next(error)
    }
}


export const removeMsg =  (req,res,next) => {
    try {
        const id = req.params.id;
        deleteMsg(id);
        res.redirect("/");
    } catch (error) {
        next(error)
    }
}