import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/singleCard/SingleCard'
import WinBox from './components/winBox/WinBox'

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false},
  { "src": "/img/potion-1.png", matched: false},
  { "src": "/img/ring-1.png", matched: false},
  { "src": "/img/scroll-1.png", matched: false},
  { "src": "/img/shield-1.png", matched: false},
  { "src": "/img/sword-1.png", matched: false},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [checkWinS, setCheckWinS] = useState(false)


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)   
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      checkWin()
      setDisabled(true)

        if(choiceOne.src === choiceTwo.src){
          setCards(prevCards => {
            return prevCards.map(card => {
              if(card.src === choiceOne.src) {
                return {...card, matched: true}
              } else {
                return card
              }
            })
          })
          resetTurn()
        } else {
          setTimeout(() =>resetTurn(), 1000) 
        }
    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  //start a new game auto
  useEffect(() => {
    shuffleCards()
  }, [])

  //check win
  const checkWin = () => {
    let countCard = 0
    cards.forEach((card) => {
      if(card.matched) {
        countCard++
      };
    })

    if(countCard === 10) {

      setTimeout(() =>{
        setCheckWinS(true)
        shuffleCards()
      }, 1000) 

      setTimeout(() =>{
        setCheckWinS(false)
        shuffleCards()
      }, 18000) 

    } 
  }

  return (
    <div className="App">
      <a href="https://github.com/DaniloWA/magic_memory_react" className="fork">
        <img src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149" width="149" height="149" alt="Fork me on GitHub"/>
      </a>
      {checkWinS ? <WinBox turns={turns}/> : <>  
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>   
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      </> 
      }
    </div>
  );
}

export default App