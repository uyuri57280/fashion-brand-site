import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories1 = [
    {
        name: 'All',
        href: '/',
    },
    {
        name: 'Dress',
        href: '/',
    },
    {
        name: 'Tops',
        href: '/',
    },
    {
        name: 'Skirts',
        href: '/',
    },
    {
        name: 'Pants',
        href: '/',
    },
    {
        name: 'Outer',
        href: '/',
    },
    {
        name: 'Bag',
        href: '/',
    },
]

const categories2 = [
    {
        name: 'Bag',
        href: '/',
    },
    {
        name: 'Shoes',
        href: '/',
    },
    {
        name: 'Limited',
        href: '/',
    },
]
const Category = () => {
    return (
        <div>
            <div className='p-8 flex flex-col gap-4'>
                <h1 className='font-bold text-xl'>CATEGORY</h1>
                <div className='flex flex-row gap-4'>
                    {categories1.map((categorie, index) => (
                        <Link href="/" key={index}>
                            <p className='text-sm font-bold underline'>{categorie.name}</p>
                        </Link>
                    ))}
                </div>
                <div className='flex flex-row gap-4'>
                    {categories2.map((categorie, index) => (
                        <Link href="/" key={index}>
                            <p className='text-sm font-bold underline'>{categorie.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <Image src="/girl-dress2.jpg" alt="girl-dress" width={190} height={220} />
                <Image src="/girl-dress2.jpg" alt="girl-dress" width={190} height={220} />
            </div>

        </div>
    )
}

export default Category