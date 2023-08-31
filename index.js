const container = document.querySelector(`#root`);

const randomColor = () => {
    let color = '#';
    
    for(let i = 0; i < 6; i++){
    
        const hexChoices = '0123456789ABCDEF';
    
        color += hexChoices[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateShapeStyle = (isCircle) => {
    const borderRadius = isCircle ? '50%' : '0%';
    return {
        borderRadius,
        backgroundColor: randomColor(),
        height: '150px',
        width: '150px',
        display: 'inline-block',
        marginRight: '35px'
    }
}

const Circles = () => {
    const circleStyle1 = generateShapeStyle(true);
    const circleStyle2 = generateShapeStyle(true);
    const circleStyle3 = generateShapeStyle(true);


   return (
        <>
            <h2>Circles</h2>
            <div style={circleStyle1}></div>
            <div style={circleStyle2}></div>
            <div style={circleStyle3}></div>
        </>        
   ) 
}

const Squares = () => {
    const squareStyle1 = generateShapeStyle(false);
    const squareStyle2 = generateShapeStyle(false);
    const squareStyle3 = generateShapeStyle(false);

   return (
        <>
            <h2>Squares</h2>
            <div style={squareStyle1}></div>
            <div style={squareStyle2}></div>
            <div style={squareStyle3}></div>
        </>        
   ) 
}

const root = ReactDOM.createRoot(container);
root.render(<>
    <Circles />
    <Squares />
</>)