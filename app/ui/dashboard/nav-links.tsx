'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { PowerIcon } from '@heroicons/react/24/outline'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon }
]

export default function NavLinks () {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] w-48 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='md:block'>{link.name}</p>
          </Link>
        )
      })}
      <form>
        <button className='flex h-[48px] grow items-center justify-center gap-2 px-6 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-6'>
          <PowerIcon className='w-6' />
          <Link href='/dashboard/signout'>
            <div className='md:block'>Sign Out</div>
          </Link>
        </button>
      </form>
    </>
  )
}
