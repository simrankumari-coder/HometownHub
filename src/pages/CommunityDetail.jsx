import React from 'react'
import communities from '../data/communties'
import Communities from './Communities'
import { useParams } from 'react-router-dom'
const CommunityDetail = () => {
    const { id } = useParams
    const community = communities.find((community, index) => {
        return community.id === id
    })
    return (
        <div>
            <div><img src={community.image} alt='no image found' /></div>
        </div>
    )
}

export default CommunityDetail







