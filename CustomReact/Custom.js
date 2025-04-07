
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.text;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const mainContainer = document.getElementById("root");

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'Hello World'
}

customRender(reactElement, mainContainer)
