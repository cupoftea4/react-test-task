import { FC } from "react"

type OwnProps = {
  light?: boolean
}

const Logo: FC<OwnProps> = ({light = false}) => {
  return (
    <div>
      <img src={light ? "/logo-light.svg" : "/logo.svg"} alt="logo" />
    </div>
  )
}

export default Logo