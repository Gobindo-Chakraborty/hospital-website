const domContainer = document.querySelector("#root");

const MyElement = () => {
    const [counter, x] = React.useState(0);
    return (
        <div class="container">
            <div id="number">{ counter }</div>
            <button id="btn" onClick={ () => x(counter + 1)}>increment</button>
        </div>
    );
};

ReactDOM.render(
    <>
        <MyElement/>
        <MyElement/>
        <MyElement/>
    </>,
    domContainer
);