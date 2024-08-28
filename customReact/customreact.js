import { Children } from "react"



function customRender(reactElement, Container) {
    const domElement = document.reactElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.progs.href)
    domElement.setAttribute('target', reactElement.progs.target)

    Container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    progs: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children : 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)