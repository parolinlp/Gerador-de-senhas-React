import styles from './App.module.css';

import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
	const [copyText, setCopyText] = useState("Copiar")

	function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
		setCopyText("Copiar")
  }

	function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className={styles.MainContainer}>
      <h1 className={styles.MainText}>Gerador de senhas com <span className={styles.SpanReact}>React</span></h1>
      <p className={styles.SecondText}>Este é o meu primeiro projeto com React. Trata-se de um gerador de senhas que possui apenas dois botões: um para gerar a senha e outro para copiar a senha gerada.</p>
			<div className={styles.ContainerBnts}>
        <button className={styles.BntGerar} onClick={generate}>Gerar</button>
        <button className={styles.BntCopiar} onClick={copyToClipboard}>{copyText}</button>
      </div>
      <div className={styles.containerPass}>{password}</div>
    </div>
  )
}

export default App