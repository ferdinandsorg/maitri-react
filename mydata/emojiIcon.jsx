export const emoji = (emoji) => {
  return () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewport="0 0 35 35"
      style={{fontSize: '31px'}}
    >
      <text y="85%">{emoji}</text>
    </svg>
  )
}
