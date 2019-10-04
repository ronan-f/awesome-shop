const INITIAL_STATE = {
  sections: [
      {
        title: 'hats',
        imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://images.unsplash.com/photo-1550521011-1d9d270e6d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens',
      },
      {
        title: 'mens',
        imageUrl: 'https://images.unsplash.com/photo-1472591651607-70e2d88ae3c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1556&q=80',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens',
      }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;