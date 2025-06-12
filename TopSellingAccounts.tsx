'use client'

import Image from 'next/image'
import Link from 'next/link'

const accounts = [
  {
    id: 1,
    title: 'Valorant Immortal 3 Hesabı',
    game: 'Valorant',
    price: 2500,
    image: '/images/accounts/valorant-1.jpg',
    features: ['Immortal 3', 'Tüm Ajanlar', 'Premium Skinler'],
  },
  {
    id: 2,
    title: 'PUBG Global Elite Hesabı',
    game: 'PUBG',
    price: 1800,
    image: '/images/accounts/pubg-1.jpg',
    features: ['Global Elite', 'Tüm Skinler', 'Steam Bağlı'],
  },
  {
    id: 3,
    title: 'LoL Challenger Hesabı',
    game: 'League of Legends',
    price: 3000,
    image: '/images/accounts/lol-1.jpg',
    features: ['Challenger', 'Tüm Şampiyonlar', 'Prestij Skinler'],
  },
]

export function TopSellingAccounts() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-dark-50 dark:from-dark-800 dark:to-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          En Çok Satan Hesaplar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.map((account) => (
            <Link
              key={account.id}
              href={`/accounts/${account.id}`}
              className="group"
            >
              <div className="card overflow-hidden hover:scale-105 transition-all duration-200">
                <div className="relative w-full h-48">
                  <Image
                    src={account.image}
                    alt={account.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary-500">
                      {account.game}
                    </span>
                    <span className="text-lg font-bold text-dark-900 dark:text-white">
                      {account.price.toLocaleString('tr-TR')} ₺
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-dark-900 dark:text-white">
                    {account.title}
                  </h3>
                  <ul className="space-y-2">
                    {account.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-dark-600 dark:text-dark-300"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-primary-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 