import { BaseSyntheticEvent, FormEvent } from "react"
import { FieldErrors } from "react-hook-form"

type Props = {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
  children: JSX.Element[] | FieldErrors
}

const Form = (props: Props) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit()
    console.log("submit!")
  }

  return (
    <form onSubmit={ onSubmit }>
      { props.children }
    </form>
  )
}

export default Form