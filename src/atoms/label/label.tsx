import { AppProps } from 'next/app'

export default function Label(props: AppProps) {
  return (
    <>
      <label>{props.Component.displayName}</label>
    </>
  )
}
