export enum TitleSizeEnum {
  PRIMARY = 'lg:text-8xl md:text-6xl text-4xl',
  SECONDARY = 'lg:text-6xl md:text-4xl text-2xl',
}

export enum TitleColorEnum {
  ORANGE = 'text-transparent bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]',
}

export interface TitleProps {
  text?: string
  coloredTitle?: string
  color?: TitleColorEnum
  size: TitleSizeEnum
}

const Title = ({ text, coloredTitle, color, size }: TitleProps) => {
  return (
    <div>
      <h2 className={`font-bold ${size}`}>
        {text} <br />
        <span className={color}>{coloredTitle}</span>
      </h2>
    </div>
  )
}

export default Title
