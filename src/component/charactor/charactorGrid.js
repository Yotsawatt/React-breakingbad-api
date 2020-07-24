import React from 'react'
import CharactorItem from './charactorItem'

export default function charactorGrid({item}) {
    return (
        <div className="charactor-grid">
            {item.map(item => (
                <CharactorItem key={item.char_id} item={item}></CharactorItem>
            ))}
        </div>
    )
}
