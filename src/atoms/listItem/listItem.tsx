import { AppProps } from 'next/app'
import { ListName } from '../../models/customTypeDefinitions'

export default function listItem(name: ListName) {
  return (
    <>
      <li>{name.name.toString()}</li>
    </>
  )
}
