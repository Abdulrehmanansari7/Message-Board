import { messages } from "../db.js";

const postMsg = async (req,res) => {
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

export default postMsg