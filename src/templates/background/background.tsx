import stylesheet from '@/templates/background/background.module.scss';

export default function Background() {
  return (
    <>
      <div className={stylesheet.lamp}>
        <div className={stylesheet.lava}>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
          <div className={stylesheet.blob}></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <h1 className="text-light">CSS Lava Lamp</h1>
      <p className="text-light">Originally by Rose Lui</p>
    </>
  )
}
