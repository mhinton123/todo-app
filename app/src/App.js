import './App.css';
import React from 'react';
import Header from './components/Header.jsx'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
    
    const [todoItemsArr, setTodoItemsArr] = React.useState([])
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)
    const [todoListView, setTodoListView] = React.useState("all")

    // Retrieve local Storage on mount
    React.useEffect(() => {
        const storedData = localStorage.getItem('todoItemsArr')
        if (storedData) {
            setTodoItemsArr(JSON.parse(storedData))
        }
    }, [])

    // Update LocalStorage 
    React.useEffect(() => {
        localStorage.setItem('todoItemsArr', JSON.stringify(todoItemsArr))
    }, [todoItemsArr])

    // Set Background colour
    document.body.style.backgroundColor = isDarkTheme ? '#171823' : "white"

    return (
        <div className={isDarkTheme && "darkmode"} id="main-wr">
            <div className="bg-wr" style={isDarkTheme ? {backgroundImage: `url(/images/bg-desktop-dark.jpg)`} : {backgroundImage: `url(/images/bg-desktop-light.jpg)`}}>
                
            </div>
            <Header 
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
            />
            <main>
                <TodoInput 
                    todoItemsArr={todoItemsArr} 
                    setTodoItemsArr={setTodoItemsArr}
                />
                <TodoList 
                    todoItemsArr={todoItemsArr}
                    setTodoItemsArr={setTodoItemsArr}
                    todoListView={todoListView}
                />
            </main>
            <Footer 
                todoItemsArr={todoItemsArr}
                setTodoListView={setTodoListView}
            />
        </div>
  )
}

