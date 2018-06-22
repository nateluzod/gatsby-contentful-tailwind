import React from 'react'

export default ({ person }) => (
  <div>
    <img
      src={`${person.node.image.file.url}?w=1180&h=600&fit=pad&bg=rgb:000000`}
      alt=""
    />
    <div>
      <h3>{person.node.name}</h3>
      <p>{person.node.title}</p>
      <p>{person.node.shortBio.shortBio}</p>
    </div>
  </div>
)
