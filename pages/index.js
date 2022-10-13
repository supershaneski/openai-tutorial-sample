import Head from "next/head"
import { useState } from "react"
import styles from "./index.module.css"
import Logo from "./components/logo"
import { capitalizeString } from './lib/utils'

export default function Home() {

  const [dishInput, setDishInput] = useState("")
  const [dishName, setDishName] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)
  
  const onSubmit = (event) => {
    
    event.preventDefault()

    const dish = capitalizeString(dishInput)

    setLoading(true)
    setIngredients([])
    setDishName(dish)

    sendRequest()
    
  }

  const sendRequest = async () => {

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dish: dishName }),
    })

    const data = await response.json()

    const items = data.result.split("\n").filter(item => item.length > 0)

    console.log(items)

    setDishInput("")
    setIngredients(items)
    setLoading(false)
    

  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart | My Grocery List</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <Logo />
          <h3>My Grocery List</h3>
        </div>
        <form onSubmit={onSubmit}>
          <input
            disabled={loading}
            type="text"
            name="dish"
            placeholder="Enter a dish"
            maxLength={24}
            value={dishInput}
            onChange={(e) => setDishInput(e.target.value)}
          />
          <div className={styles.button}>
            <input 
            disabled={loading}
            type="submit" 
            value="Generate Grocery List"
            />
          </div>
        </form>
        {
          loading &&
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        }
        {
          (!loading && ingredients.length > 0) &&
          <div className={styles.result}>
            <h4>Ingredients for {dishName}</h4>
            <ul>
            {
              ingredients.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
            </ul>
          </div>
        }
      </main>
    </div>
  )
}
