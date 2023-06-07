import { FC } from "react"

type OwnProps = {
  light?: boolean
}

const Logo: FC<OwnProps> = ({light = false}) => {
  return (
    <div>
      <a href="#hero">
        <img src={light ? "/logo-light.svg" : "/logo.svg"} alt="logo" />
      </a>
    </div>
  )
}

export default Logo