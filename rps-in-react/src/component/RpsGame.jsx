import React,{useState} from 'react';

function RpsGame() {
    let [playerMove,setplayerMove] = useState(''),
        [computerMove,setComputerMove] = useState(''),
        [result,setResult] = useState(''),
        [score,setScore] = useState({win:0,tie:0,lose:0});
            
    function playGame(playerMoveP){
        let random = ['rock','paper','scissors'],
            compMove = random[Math.floor(Math.random() * 3)];
            setplayerMove(playerMoveP);
            setComputerMove(compMove);
            
        if(playerMoveP === compMove){
            setResult('tie');
            
            setScore((prevScore) => {return {...prevScore, tie: prevScore.tie + 1 }});
        }else if(playerMoveP === 'rock' && compMove === 'scissors' || 
                playerMoveP === 'paper' && compMove === 'rock' || 
                playerMoveP === 'scissors' && compMove === 'paper'){
                    setResult('you win');
                    setScore((prevScore) => ({ ...prevScore, win: prevScore.win + 1 }));
            
        }else{
            setResult('you lose');
            setScore((prevScore) => ({ ...prevScore, lose: prevScore.lose + 1 }));
        }
         
          
        

        // console.log(playerMove, computerMove,result);
        
            
            
    

            

    }
  return (
    <>
        <div className='container'>
            <h1>rock paper scissors game</h1>

            <div className='btnDiv'>
            <button onClick={()=>{playGame('rock')}}>rock</button>
            <button onClick={()=>{playGame('paper')}}>paper</button>
            <button onClick={()=>{playGame('scissors')}}>scissors</button>
            </div>

            <div className='resultDiv'>
                <p>player : <span>{playerMove}</span></p>
                <p>computer : <span>{computerMove}</span></p>
                <p>result : <span className='resultspan'>{result}</span></p>
            </div>

            <div className='scoreDiv'>
                <p>win : <span>{score.win}</span></p>
                <p>tie : <span>{score.tie}</span></p>
                <p>lose : <span>{score.lose}</span></p>
            </div>
        </div>
    </>
  )
}

export default RpsGame
