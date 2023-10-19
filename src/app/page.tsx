'use client'

import Image from 'next/image'
import cover from './assets/Image.png'

import {
  Milk,
  Beef,
  Apple,
  Carrot,
  Sandwich,
  Plus,
  MoreVertical,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select'

type ListItem = {
  name: string
  quantity: string
  typeQuantity: string
  category: string
}

type typeQuantity = {
  name: string
  abbr: string
}

export default function Home() {
  const category = ['Padaria', 'Legume', 'Carne', 'Fruta', 'Bebida']
  const tipoQuantidade: typeQuantity[] = [
    { name: 'quantidade', abbr: 'UN.' },
    { name: 'litros', abbr: 'L' },
    { name: 'kg', abbr: 'Kg' },
  ]
  const [arrayListItem, setArrayListItem] = useState<ListItem[] | []>()
  const listItem: ListItem[] = []

  const [searchTest, setSearchTest] = useState('')

  function handlerCategory(value: string) {
    if (value === 'Padaria') {
      return <Sandwich className="h-4 w-4" />
    } else if (value === 'Legume') {
      return <Carrot className="h-4 w-4" />
    } else if (value === 'Carne') {
      return <Beef className="h-4 w-4" />
    } else if (value === 'Fruta') {
      return <Apple className="h-4 w-4" />
    } else if (value === 'Bebida') {
      return <Milk className="h-4 w-4" />
    }
  }

  function handleVerifyCategory(value: string) {
    if (value === 'Padaria') {
      return (
        <div className="w-20 h-8 flex justify-center items-center bg-yellow-dark rounded-full">
          <Sandwich className="h-4 w-4 text-yellow" />
          <p className="text-xs my-2 mx-1 text-yellow">{value}</p>
        </div>
      )
    } else if (value === 'Legume') {
      return (
        <div className="w-20 h-8 flex justify-center items-center bg-green-dark rounded-full">
          <Carrot className="h-4 w-4 text-green" />
          <p className="text-xs my-2 mx-1 text-green">{value}</p>
        </div>
      )
    } else if (value === 'Carne') {
      return (
        <div className="w-20 h-8 flex justify-center items-center bg-pink-dark rounded-full">
          <Beef className="h-4 w-4 text-pink" />
          <p className="text-xs my-2 mx-1 text-pink">{value}</p>
        </div>
      )
    } else if (value === 'Fruta') {
      return (
        <div className="w-20 h-8 flex justify-center items-center bg-orange-dark rounded-full">
          <Apple className="h-4 w-4 text-orange" />
          <p className="text-xs my-2 mx-1 text-orange">{value}</p>
        </div>
      )
    } else if (value === 'Bebida') {
      return (
        <div className="w-20 h-8 flex justify-center items-center bg-blue-dark rounded-full">
          <Milk className="h-4 w-4 text-blue" />
          <p className="text-xs my-2 mx-1 text-blue">{value}</p>
        </div>
      )
    }
  }

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = String(formData.get('Item'))
    const quantity = String(formData.get('quantidade'))
    const typeQuantity = String(formData.get('tipoQuantidade'))
    const category = String(formData.get('categoria'))

    const list: ListItem = {
      name,
      quantity,
      typeQuantity,
      category,
    }

    if (arrayListItem) {
      for (const iterator of arrayListItem) {
        listItem.push({
          name: iterator.name,
          category: iterator.category,
          quantity: iterator.quantity,
          typeQuantity: iterator.typeQuantity,
        })
      }
    }

    listItem.push(list)

    setArrayListItem(listItem)
  }

  return (
    <div className="min-w-[1440px] relative flex flex-1 flex-col font-sans">
      <Image src={cover} alt="Cover" className="w-screen" />

      <div className="flex-col left-[360px] w-[720px] h-[624px] bottom-[188px] top-[88px] absolute">
        <h1 className="font-bold text-2xl text-gray-100 items-start">
          Lista de Compras
        </h1>

        <form
          onSubmit={handleSubmitForm}
          className="mt-5 flex flex-row text-gray-200 gap-3 text-xs"
        >
          <div className="flex flex-col self-end w-80">
            <label htmlFor="Item" className=" hover:text-purple-light">
              Item
            </label>
            <input
              type="text"
              name="Item"
              id="Item"
              className="mt-2 bg-gray-500 border border-gray-300 rounded-md py-3 px-3 h-10 text-sm focus:outline-none focus:border-purple-light"
              required
            />
          </div>

          <div className="flex flex-col self-end">
            <label htmlFor="quantidade" className=" hover:text-purple-light">
              Quantidade
            </label>
            <div className="mt-2 flex flex-row h-10">
              <input
                type="number"
                name="quantidade"
                id="quantidade"
                className="bg-gray-500 border border-gray-300 w-20 py-3 px-3 text-sm rounded-l-md focus:outline-none focus:border-purple-light"
                required
              />
              {/* <select
                name="tipoQuantidade"
                title="tipoQuantidade"
                id="tipoQuantidade"
                className="bg-gray-400 border border-gray-300 rounded-r-md w-[4.5rem] text-xs focus:border-purple-light"
                required
              >
                {tipoQuantidade.map((value, index) => {
                  return (
                    <option key={index} value={value.name}>
                      {value.abbr}
                    </option>
                  )
                })}
              </select> */}

              <Select name="tipoQuantidade" required>
                <SelectTrigger className="inline-flex items-center justify-center rounded-r-md w-[4.5rem] text-xs leading-none gap-2 bg-gray-400 focus:border-purple-light outline-none">
                  <SelectValue placeholder={tipoQuantidade[0].abbr} />
                  <SelectIcon>
                    <ChevronDown />
                  </SelectIcon>
                </SelectTrigger>
                <SelectContent className="mt-1 border rounded-md border-gray-300 bg-gray-400">
                  {tipoQuantidade.map((value, index) => {
                    return (
                      <SelectItem
                        key={index}
                        value={value.name}
                        className="flex items-center gap-1 p-3 boder border-b-gray-300"
                      >
                        {value.abbr}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col self-end group">
            <label
              htmlFor="categoria"
              className=" group-hover:text-purple-light"
            >
              Categoria
            </label>
            <select
              name="categoria"
              id="categoria"
              className="mt-2 bg-gray-400 w-40 border border-gray-300 text-gray-200 rounded-md text-sm h-10 focus:border-purple-light px-3"
              required
            >
              <option value="">Selecione</option>
              {category.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="self-end">
            <button
              type="submit"
              title="plus"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-purple hover:bg-purple-dark"
            >
              <Plus className="h-8 w-8" />
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          {arrayListItem
            ? arrayListItem.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="h-20 w-[720px] bg-gray-400 border border-gray-300 flex justify-between items-center"
                  >
                    <div className="h-9 w-60 flex flex-row my-4 mx-4">
                      <div className="justify-center my-1">
                        <input
                          type="checkbox"
                          name="itens"
                          id="itens"
                          className="bg-gray-400 border border-purple-light mr-4 rounded-sm"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="itens"
                          className="text-sm text-gray-100 font-bold"
                        >
                          {value.name}
                        </label>
                        <label
                          htmlFor="itens"
                          className="text-gray-200 text-xs"
                        >
                          {`${value.quantity} ${value.typeQuantity}`}
                        </label>
                      </div>
                    </div>

                    <div className="w-28 h-8 flex flex-row">
                      {value.category
                        ? handleVerifyCategory(value.category)
                        : ''}
                      <button className="text-purple">
                        <MoreVertical />
                      </button>
                    </div>
                  </div>
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}
