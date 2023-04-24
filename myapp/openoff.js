const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-2h8w8IQTFi37tNZp5EAJGbSL",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function generateText() {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "我想去捷運站",
    });
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

generateText();