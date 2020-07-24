import React from 'react'

export default function charactorItem({item}) {
    console.log('itemm',item)
    return (
        <div className="charactorItem">
            <img src={item.img} />
            <div className="overlay">
            <ul>
                <li><h1 className="charactor-name">{item.nickname}</h1></li>
                <li><span className="charactor-information">fullname : </span><span className="charactor-information">{item.name}</span></li>
                <li><span className="charactor-information">birthday : </span><span className="charactor-information">{item.birthday}</span></li>
                <li><span className="charactor-information">status : </span><span className="charactor-information">{item.status}</span></li>
            </ul>
            </div>
        </div>
    )
}
