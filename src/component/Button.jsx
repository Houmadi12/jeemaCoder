function Button({param,onclick,titre}) {

  return (
    <button type="button" className={param} onClick={onclick}>{titre}</button>
  )
}

export default Button
