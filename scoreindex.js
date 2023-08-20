let score=0;
let wicket=0;
let ballcount=[]
let count =1;
function addscore(num){
    if(wicket<10){
        ballcount.push(num);
        score+=num;
        rootelement.render(<App/>);
    }
}    

function addwicket(){
    if (wicket<10){
        ballcount.push(".");
    wicket+=1;
    rootelement.render(<App/>);
    }
}

    
function App(){
    


    return(
        <>
        <h1>Score Board</h1>
        <p>Welcome to cricket score board</p>
        <h3>Score:{score}/{wicket}</h3>
        <div>
            <button onClick={()=>addscore(0)}>0</button>
            <button onClick={()=>addscore(1)}>1</button>
            <button onClick={()=>addscore(2)}>2</button>
            <button onClick={()=>addscore(3)}>3</button>
            <button onClick={()=>addscore(4)}>4</button>
            <button onClick={()=>addscore(5)}>5</button>
            <button onClick={()=>addscore(6)}>6</button>
            <button onClick={addwicket}>Wicket</button>
        <div id="maincount">
            </div>
            <h3>Ball</h3>
            <div id="ball">
                {ballcount.map((res,index)=>(
                    <>
                    {index %6 === 0? <br/ >:null}
                <span key={index}>{res}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                </>))}
            </div>
        
        
            <h3>Over</h3>
            
            <div id="ball">
                {ballcount.map((res,index)=>(
                    <>
                    {index %6 === 0? <br/> :null}
                <span key={index}>{res}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                </>))}
            </div>
        </div>

       </>
    )

};
const rootelement = ReactDOM.createRoot(document.getElementById("root"))
rootelement.render(<App/>);