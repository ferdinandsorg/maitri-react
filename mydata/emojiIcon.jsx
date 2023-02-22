export const emoji = (emoji) => {
  return () => (
    <span role="img" style={{fontSize: '2rem'}}>
      {emoji}
    </span>
  )
}
