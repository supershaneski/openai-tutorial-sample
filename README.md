openai-tutorial-sample
=========

This project is based from the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart) sample.

It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/).

Instead of `pet name generator`, I modified it to create `grocery shopping list` based on the menu of dishes.

# Motivation

Please note that this is still a work in progress...

Basically, my idea is for the user to list their weekly menu.
Then using OpenAI API `completion` endpoint, generate a grocery shopping list.
I will need to process the output to remove similar items and other unnecessary details like amount, etc.

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
