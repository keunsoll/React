const MyButtons=({text, type, onClick})=>{


    const btnType=['positive', 'negative'].includes(type) ? type:'default';    

    return(
        <button 
            className={["MyButtons", `MyButtons_${btnType}`].join(" ")}
            onClick={onClick}>
            
            {text}

        </button>
    )
}

MyButtons.defaultProps={
    type:"default",
}

export default MyButtons;