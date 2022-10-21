import { useState } from 'react'

import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const handleLabelClick = () => {
    console.log('HANDLE LABEL CLICK')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('HANDLE SUBMIT FORM')
    console.log({ email, password })
  }

  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }

  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          placeholder="Digite seu e-mail"
          onChange={(e) => handleChangeInput(e, setEmail)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => handleChangeInput(e, setpassword)}
        />
        <p>O e-mail digitado foi: {email}</p>
        <Button type="submit">Botão dentro do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão FORA do form</Button>
      <label>Label Teste</label>
      <button>Button</button>
    </>
  )
}
