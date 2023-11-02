import React from 'react'
import Card from './Card'

const CardList = ({posts}) => {

  return (
    <div className="card-list">
        {posts?.map((post) => (
            <div className="card-list__item" key={post.id}>
                <Card id={post.id} title={post.title} desc={post.body}  />
            </div>
        ))}
    </div>
  );
}

export default CardList