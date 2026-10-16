import { useState } from 'react'

const goals = [
  {
    id: 1,
    title: 'Программирование',
    description: 'Изучение технологий и создание проектов',
    image: '/images/programming.jpg'
  },
  {
    id: 2,
    title: 'Философия',
    description: 'Книги, идеи и философские направления',
    image: '/images/philosophy.jpg'
  }
]

function App() {
  const [currentGoal, setCurrentGoal] = useState('Главная')
  function openGoal() {
    setCurrentGoal("Программирование")
  }

  function goBack() {
    setCurrentGoal("Главная")
  }


  return (
    <main className="board">
      <h1>MemoryBoard</h1>
      <p>Моё пространство целей и знаний</p>

      <div className='razdel'>
        <p>Текущий раздел: {currentGoal}</p>
        {currentGoal !== "Главная" ?
          (<button onClick={goBack}>Назад</button>) : (null)
        }

      </div >


      {/* Строка с заголовком целей */}
      {currentGoal === "Главная" ?
        (<h2>Мои цели</h2>) : (<h2>Мои подцели</h2>)
      }
      {/* Строка с заголовком целей */}


      <div className="goal-list">
        <div className="goal-card" onClick={openGoal}> {/*onClick можно выбрать у div*/}
          <img
            src="/images/programming.jpg"
            alt="Программирование"
          />
          <h3>Программирование</h3>
          <p>Изучение технологий и создание проектов</p>
        </div>

        <div className="goal-card">
          <img
            src="/images/philosophy.jpg"
            alt="Философия"
          />
          <h3>Философия</h3>
          <p>Книги, идеи и философские направления</p>
        </div>
      </div>
    </main>
  )
}

export default App

