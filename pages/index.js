import Head from "next/head"
import { useState, useEffect } from "react"
import styles from "./index.module.css"
import Logo from "./components/logo"
import { capitalizeString, removeNumberBullet } from './lib/utils'

export default function Home() {

  const [dishInput, setDishInput] = useState("")
  const [dishName, setDishName] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)
  const [timerState, setTimerState] = useState(0)
  const [timerValue, setTimerValue] = useState(0)
  
  useEffect(() => {

    let tim

    if(timerState === 1) {
      tim = setInterval(() => {
        setTimerValue(v => v - 1)
      }, 1000)
    }

    if(timerValue === 0) {
      setTimerState(0)
      clearInterval(tim)
    }

    return () => {
      clearInterval(tim)
    }

  }, [timerState, timerValue])

  const onSubmit = (event) => {
    
    event.preventDefault()

    setLoading(true)
    setIngredients([])
    setDishName(capitalizeString(dishInput))

    sendRequest()
    
  }

  const sendRequest = async () => {

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dish: capitalizeString(dishInput) }),
    })

    const data = await response.json()

    let items = data.result.split("\n").filter(item => item.length > 0).map(item => removeNumberBullet(item))

    items = items.length === 1 ? items.split(",").map(item => item.trim()) : items

    setDishInput("")
    setIngredients(items)
    setLoading(false)

    setTimerValue(60)
    setTimerState(1)

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
            value={timerState === 1 ? `Please wait ${timerValue}` : "Generate Ingredients"}
            style={{
              backgroundColor: (loading || timerState === 1) ? '#e6e6e6' : '#06c4f9'
            }}
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
