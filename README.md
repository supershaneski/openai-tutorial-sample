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


# OpenAI API Quickstart - Node.js example app

This is an example pet name generator app used in the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Check out the tutorial or follow the instructions below to get set up.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://beta.openai.com/docs/quickstart).
