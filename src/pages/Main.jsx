import React, { useEffect, useState } from 'react'
import Login from '../components/auth/Login'
import ImageGallery1 from '../components/ImageGallery'
import { arrayMove } from '@dnd-kit/sortable'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'
import image7 from '../assets/image7.jpeg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpeg'

const Main = () => {
  const imageItems = [
    { id: '1', url: image1, title: 'Male' },
    { id: '2', url: image9, title: 'Shirt',  },
    { id: '3', url: image5, title: 'Shirt',  },
    { id: '4', url: image3, title: 'Male',  },
    { id: '5', url: image6, title: 'Shirt',  },
    { id: '6', url: image7, title: 'Hoody',  },
    { id: '7', url: image4, title: 'Male',  },
    { id: '8', url: image2, title: 'Female',  },
    { id: '9', url: image8, title: 'Shirt', },
  ]

  const [authentication, setAuthentication] = useState(false)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setImages(imageItems)
    }, 10000)
  }, [])

  const handleAccess = () => {
    setAuthentication(true)
  }
  const handleDragEnd = (event) => {
    console.log('Dragged')
    const { active, over } = event
    console.log(`ACTIVE: ${active.id}`)
    console.log(`OVER: ${over.id}`)

    if (active.id !== over.id) {
      setImages((items) => {
        const newItems = arrayMove(
          items,
          items.findIndex((item) => item.id === active.id),
          items.findIndex((item) => item.id === over.id)
        )
        console.log(newItems)
        return newItems
      })
    }
  }

  return (
    <div>
      {authentication ? (
        <>
          <ImageGallery1
            images={images}
            loading={loading}
            handleDragEnd={handleDragEnd}
          />
        </>
      ) : (
        <>
          <Login onLogin={handleAccess} />
        </>
      )}
    </div>
  )
}

export default Main
