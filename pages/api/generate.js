import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.menu),
    temperature: 0,
    max_tokens: 256,
    top_p: 0, //1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  
  /*const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });*/

  
  //console.log("menu", menu)
  //res.status(200).json({ result: completion.data.choices[0].text });
  //res.status(200).json({ result: `this is a test`, payload: prompt });

  //console.log(completion.data)

  res.status(200).json({ result: completion.data.choices[0].text });

}

function generatePrompt(menus) {

  const menuList = menus.join(',')

  return `List ingredients for the following recipes: ${menuList}`

}

function generatePrompt2(animal) {
  const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  /*return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;*/

  return `Write the ingredients for the dishes.

  Dish: Carbonara
  Ingredients: spaghetti, parmesan cheese, egg, salt, pepper
  Dish: ${capitalizedAnimal}
  `;
}
