import React from 'react'
import CollectionCard from './CollectionCard'

const collections = [
    {
        imageUrl: "/collection/strawberry-cake.jpg",
        name: "cake",
        collectionUrl: "/main/collection",
    },
    {
        imageUrl: "/collection/strawberry-cream-puff.jpg",
        name: "cream-puff",
        collectionUrl: "/main/collection",
    },
    {
        imageUrl: "/collection/strawberry-cupcakes.jpg",
        name: "cupcakes",
        collectionUrl: "/main/collection",
    },
    {
        imageUrl: "/collection/strawberry-tart.jpg",
        name: "cupcakes",
        collectionUrl: "/main/collection",
    },
]

const CollectionList = () => {
    return (
        <section className='mt-16'>
            <h1 className='text-4xl'>Collection</h1>
            <div className='grid grid-cols-3 gap-2'>
                {collections.map((collection, index) => (
                    <CollectionCard
                        key={index}
                        imageUrl={collection.imageUrl}
                        name={collection.name}
                        collectionUrl={collection.collectionUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default CollectionList