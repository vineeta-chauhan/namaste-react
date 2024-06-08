// const heading=React.createElement('div',{},"i'am div")


const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        React.createElement('h1', {}, 'i am h1 tag')
    )
)

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(parent)