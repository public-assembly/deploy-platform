import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const chains = [
  { name: 'Ethereum', id: 1 },
  { name: 'Polygon', id: 137 },
  { name: 'Optimism', id: 10 },
  { name: 'Arbitrum', id: 42161 },
]

type DropDownProps = {
  placeholder?: string
  value?: string
  onChange?: any
}

export default function DropDown({ placeholder, value, onChange }: DropDownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left sm:w-3/5 h-14 sm:h-20">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 pa-paragraph font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {value || placeholder}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {chains.map((chain) => (
              <Menu.Item key={chain.id}>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => onChange(chain)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 pa-paragraph'
                    )}>
                    {chain.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
