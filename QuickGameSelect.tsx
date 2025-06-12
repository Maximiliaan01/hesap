'use client'

import Image from 'next/image'
import Link from 'next/link'

const games = [
  {
    id: 1,
    name: 'Valorant',
    image: '/images/games/valorant.png',
    slug: 'valorant',
  },
  {
    id: 2,
    name: 'PUBG',
    image: '/images/games/pubg.png',
    slug: 'pubg',
  },
  {
    id: 3,
    name: 'League of Legends',
    image: '/images/games/lol.png',
    slug: 'lol',
  },
  {
    id: 4,
    name: 'Fortnite',
    image: '/images/games/fortnite.png',
    slug: 'fortnite',
  },
  {
    id: 5,
    name: 'CS:GO',
    image: '/images/games/csgo.png',
    slug: 'csgo',
  },
  {
    id: 6,
    name: 'PUBG Mobile',
    image: '/images/games/pubg-mobile.png',
    slug: 'pubg-mobile',
  },
]

export function QuickGameSelect() {
  return (
    <section className="py-16 bg-gradient-to-b from-dark-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          Popüler Oyunlar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="group"
            >
              <div className="card p-4 hover:scale-105 transition-all duration-200">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-center font-semibold text-dark-900 dark:text-white">
                  {game.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 