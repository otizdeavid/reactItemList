import React from 'react'

const Footer = ({title}) => {
  // const today = new Date;
  return (
    <footer > 
      <p> {title} {/* <p>copyright &copy; {today.getFullYear()}</p> */} List {title === 1? "item" : "items"}
      </p>
    </footer>
  )
}

export default Footer