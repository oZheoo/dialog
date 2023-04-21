const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } =require ("openai");
const configuration = new Configuration({
    organization: "org-2h8w8IQTFi37tNZp5EAJGbSL",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const app = express();

app.use(express.json());

app.post("/find", async (req, res) =>{
    try {

        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt:req.body.prompt,
          max_tokens: 64,
          temperature: 0,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          stop: ["stop"],
        });
        
        return res.status(200).json({
          success: true,
          data: "你好 有會員或載具嗎?",
        });

      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error.response
            ? error.response.data
            : "There was an issue on the server",
        });
      }

    });
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));