'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const games = [
  { id: 1, name: 'Valorant', slug: 'valorant' },
  { id: 2, name: 'PUBG', slug: 'pubg' },
  { id: 3, name: 'PUBG Mobile', slug: 'pubg-mobile' },
  { id: 4, name: 'League of Legends', slug: 'lol' },
  { id: 5, name: 'Fortnite', slug: 'fortnite' },
  { id: 6, name: 'Call of Duty Mobile', slug: 'cod-mobile' },
  { id: 7, name: 'Apex Legends', slug: 'apex-legends' },
  { id: 8, name: 'CS:GO', slug: 'csgo' },
  { id: 9, name: 'Clash of Clans', slug: 'coc' },
  { id: 10, name: 'Clash Royale', slug: 'cr' },
  { id: 11, name: 'Roblox', slug: 'roblox' },
  { id: 12, name: 'Genshin Impact', slug: 'genshin' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link
                  href="/accounts"
                  className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Hesap Satın Al
                </Link>
                <Link
                  href="/sell"
                  className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Hesap Sat
                </Link>
                <Link
                  href="/items"
                  className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Item Satın Al
                </Link>
                <Link
                  href="/support"
                  className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Destek
                </Link>
                <Menu as="div" className="relative">
                  <Menu.Button className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Oyunlar
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white dark:bg-dark-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden z-50">
                      <div className="py-1">
                        {games.map((game) => (
                          <Menu.Item key={game.id}>
                            {({ active }) => (
                              <Link
                                href={`/games/${game.slug}`}
                                className={`${
                                  active
                                    ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                                    : 'text-dark-700 dark:text-white'
                                } block px-4 py-2 text-sm transition-colors duration-200`}
                              >
                                {game.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Giriş Yap
              </Link>
              <Link
                href="/register"
                className="btn-primary"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/accounts"
              className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Hesap Satın Al
            </Link>
            <Link
              href="/sell"
              className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Hesap Sat
            </Link>
            <Link
              href="/items"
              className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Item Satın Al
            </Link>
            <Link
              href="/support"
              className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Destek
            </Link>
            <div className="pt-4 pb-3 border-t border-dark-200 dark:border-dark-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <Link
                    href="/login"
                    className="text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  >
                    Giriş Yap
                  </Link>
                </div>
                <div className="ml-3">
                  <Link
                    href="/register"
                    className="btn-primary"
                  >
                    Kayıt Ol
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 