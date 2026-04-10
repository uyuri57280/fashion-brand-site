import Image from 'next/image'
import React from 'react'

interface collectionCardProps {
    imageUrl:string;
    name:string;
    collectionUrl:string;
}

const CollectionCard = (props:collectionCardProps) => {
    const {imageUrl, name, collectionUrl} = props;
  return (
    <div className='relative rounded-lg overflow-hidden
    w-32 h-32 md:w-60 md:h-60 lg:w-80 lg:h-80
    '>
        <Image src={imageUrl} alt={name} fill/>
    </div>
  )
}

export default CollectionCard