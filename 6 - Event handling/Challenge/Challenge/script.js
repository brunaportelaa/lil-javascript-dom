document.addEventListener('DOMContentLoaded', () => {
    // Task: React to a button click by changing text in the paragraph with id 'para1'.
   const btn =  document.getElementById('changeTextButton')
   const p = document.getElementById('para1')
   btn.addEventListener('click', () => p.textContent = 'Hover to change style :)')


    // Task: Change the style of 'para1' on mouseover and mouseout.
    function styleParagraph () {
        p.style.fontWeight = 'bold'
        p.style.color = 'red'
    }

    function resetStyle() {
        p.style.fontWeight = '300'
        p.style.color = 'black'
    }

    p.addEventListener ('mouseover', styleParagraph)
    p.addEventListener ('mouseout', resetStyle)

    // Task: Use event delegation on 'itemList' to display which item was clicked.
    const itemList = document.getElementById('preventLink')
    itemList.addEventListener('click', function(e) {e.target.textContent = 'Item Clicked!'})


    // Task: Prevent navigating to the link URL with preventDefault and show text in 'para2'.
    const p2 = document.getElementById('preventLink')
    p2.addEventListener('click', e => e.preventDefault())
});