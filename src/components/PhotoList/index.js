import React, { useState } from 'react'

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Birthday girl',
            category: 'babies',
            description:
              'This cute little birthday girl with her cake!'
        },
        {
            name: 'Those cute little toes',
            category: 'babies',
            description:
              'Love baby toes!'
        },
        {
            name: 'Baby',
            category: 'babies',
            description:
              'Love black and white baby pictures!'
        },
        {
            name: 'Baby closeup',
            category: 'babies',
            description:
              'This closeup of the cutest baby! #babyfever'
        },
        {
            name: 'Baby in a field',
            category: 'babies',
            description:
              'I love this picture!'
        },
        {
            name: 'Couple',
            category: 'couples',
            description:
              'The way they look at each other'
        },
        {
            name: 'The laugh',
            category: 'couples',
            description:
              'It looks like they are having so much fun!!'
        },
        {
            name: 'Dancing',
            category: 'couples',
            description:
              'I love this picture, the background, the dancing!!'
        },
        {
            name: 'The sonogram',
            category: 'couples',
            description:
              "I can't imagine the joy!!"
        },
        {
            name: 'The girl in the creek',
            category: 'seniors',
            description:
              "So cute, love this girl in the water!!"
        },
        {
            name: 'The girl in the field',
            category: 'seniors',
            description:
              "This is one of my favorites!!"
        },
        {
            name: 'The girl under the lights',
            category: 'seniors',
            description:
              "Love this background!!"
        },
        {
            name: 'Her eyes',
            category: 'seniors',
            description:
              "She has the most beautiful eyes!!"
        },
        {
            name: 'This smile',
            category: 'seniors',
            description:
              "She has the best smile"
        },
        {
            name: 'The girl downtown',
            category: 'seniors',
            description:
              "Love this picture of her downtown!!"
        },
        {
            name: 'Picture through the window',
            category: 'seniors',
            description:
              "Love this picture through the window!!"
        },
        {
            name: 'Happy in the cap',
            category: 'seniors',
            description:
              "Her big smile in her graduation cap!"
        },
        {
            name: 'Cap and gown',
            category: 'seniors',
            description:
              "The future is awaiting her!!"
        },
        {
            name: 'Senoir graduate',
            category: 'seniors',
            description:
              "This graduate looks so happy"
        },
        {
            name: 'Baby belly',
            category: 'babies',
            description:
              "So much future in this picture!"
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);



    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../assets/small/${category}/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
}

export default PhotoList;