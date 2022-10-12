import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
//import Logo from "./components/logo";
import { capitalizeString, validateString } from './lib/utils'
import Header from "./components/header";

/*
const Header = () => {
  return (
    <>
      <div>
        <Logo color="white" size={40} />
      </div>
      <style jsx>{`
      div {
        position: relative;
        background-color: #48CFAD;
        padding: 12px;
        border-radius: 50%;
      }
      `}</style>
    </>
    
  )
}
*/

export default function Home() {

  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState()

  const [menuList, setMenuList] = useState([])
  const [groceryList, setGroceryList] = useState([])
  const [menuInput, setMenuInput] = useState("")
  const [loading, setLoading] = useState(false)

  async function onSubmit(event) {
    
    event.preventDefault();

    setLoading(true)
    
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: menuList }),
    });

    const data = await response.json();
    //setResult(data.result);
    //setAnimalInput("");

    const recipeKey = menuList[0].toLowerCase()

    const tokens = data.result.split('\n')

    //let list = []
    //let state = 0

    /*for(let i = 0; i < tokens.length; i++) {
      const str = tokens[i].toLowerCase()
      if(str.indexOf(':') > 0) {
        if(str.indexOf(recipeKey) >= 0) {
          state = 1
        } else {
          if(state === 1) {
            break
          }
        }
      } else {
        if(state == 1) {
          if(str.length > 0) {
            let s = str
            s = s.indexOf("-") === 0 ? s.slice(1) : s // remove -
            list.push(capitalizeString(s))
          }
        }
      }
    }*/

    let list = tokens.filter(str => str.length > 0)

    setGroceryList(list)
    setLoading(false)

  }

  const addMenuToList = () => {

    // check for banned words
    if(!validateString(menuInput)) {
      return
    }

    // check if already added
    if(menuList.some(menu => menu.toLowerCase().indexOf(menuInput.toLowerCase()) >= 0 || menuInput.toLowerCase().indexOf(menu.toLowerCase()) >= 0)) {
      return
    }

    const menuName = capitalizeString(menuInput)
    
    const list = menuList.slice(0)
    list.push(menuName)

    setMenuList(list)

    setMenuInput("")

  }

  const isAddButtonDisabled = menuInput.length < 3 || menuList.length === 1
  const isGenerateButtonDisabled = menuList.length === 0 || groceryList.length > 0
  
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart | My Shopping List</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <h3>Grocery List Generator</h3>
        <div className={styles.inputPanel}>
          <input
            type="text"
            name="menu"
            placeholder="Enter name of a dish"
            maxLength={20}
            value={menuInput}
            onChange={(e) => setMenuInput(e.target.value)}
          />
          <input 
          disabled={isAddButtonDisabled ? true : false} 
          style={{backgroundColor: isAddButtonDisabled ? '#e6e6e6' : '#10a37f'}}
          onClick={addMenuToList} type="button" value="Add" />
        </div>
        <div className={styles.list}>
          <h4>Weekly Menu</h4>
          <ul>
          {
            menuList.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
          </ul>
        </div>
        <div className={styles.action}>
          <button 
          onClick={onSubmit}
          className={styles.button}
          disabled={isGenerateButtonDisabled ? true : false} 
          style={{backgroundColor: isGenerateButtonDisabled ? '#e6e6e6' : '#10a37f'}}
          >Generate Grocery List</button>
        </div>
        <div className={styles.list}>
          <h4>Grocery List</h4>
          {
            loading &&
            <p>Loading...</p>
          }
          {
            !loading &&
            <ul>
            {
              groceryList.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
            </ul>
          }
        </div>
      </main>
    </div>
  );
}
