# App structure

    - App
        - Header
        - Searchbar
        - TodoList
            - TodoItem
        - Footer

# Functionality

## State
    - todoItemsArr
        - id: int
        - name: str
        - isCompleted: bool

    - isDarkTheme: bool

    - todoListView: str ("All")

## Theme
    - When the Theme button is clicked, the theme is changed from light to dark
        -- Add dark classes to all elements?
        -- Select the head element and change order of style files?
    - The icon changed from dark to light icon
        -- conditionally render based on isDark var

## Searchbar 
    - When the circle next to the input is clicked, a todo item is added to the arr and rendered
        - check input field is not empty
        - item added to todoItemsArr
    
## Mark todo item completed
    - then the check box has been checked, change isCompleted to true

## Remove todo item
    - when 'x' is clicked, get id of clicked item and remove from todoItemsArr

## Footer listView Buttons
    - clicking one of the listview buttons will change the todoListView to "active" for example
    - React should then automatically render the filtered arr based on the todoListView

## Other
    - App should utilize local storage
    - make app only extend to 600px




