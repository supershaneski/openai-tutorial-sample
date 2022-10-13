openai-tutorial-sample
=========

This project is based from the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart) sample.

It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/).

Instead of `pet name generator`, I modified it to generate ingredients based on a dish.

# Motivation

***Please note that this is still a work in progress...***

My original idea when I started this exercise is to list a menu for the week then based on the dishes on the menu, using OpenAI API `completion` endpoint, generate a grocery shopping list.
I will need to process the output to remove similar items and other unnecessary details (e.g. chopped, sliced), etc.

However, upon further testing, I cannot get my expected output from the endpoint from my lack of experience in writing good prompts. 
So, I decided, for now, to just list the ingredients for one dish.

# Setup

Clone the repository, install the dependencies and run

```sh
$ git clone https://github.com/supershaneski/openai-tutorial-sample.git myproject

$ cd myproject

$ npm install
```

Before running the app, you will need your [API key](https://beta.openai.com/account/api-keys).
Copy the example environment variables file and insert your own `API key`.

```sh
$ cp .env.example .env
```

Then run,

```sh
$ npm start
```

Open your browser to `http://localhost:3004/` or some other port depending on the availability.
