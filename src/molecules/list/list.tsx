import { AppProps } from 'next/app'
import ListItem from '../../atoms/listItem/listItem'
import { jSXAttribute } from '@babel/types'
import { ListName } from '../../models/customTypeDefinitions'

function EnumerateListItems(listItems: string[]): string {
  let outJsx = ''

  listItems.forEach((item: string) => {
    outJsx += <ListItem name={item} />
  })

  return outJsx
}

export default function List(listItems: string[]) {
  return (
    <>
      <ul>{EnumerateListItems(listItems)}</ul>
    </>
  )
}
