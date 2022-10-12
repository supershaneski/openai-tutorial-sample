import React from 'react'
import Logo from "./logo";

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

export default Header