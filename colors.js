
let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if(theme == null)
{
    setTheme('light');
}
else
{
    setTheme(theme);
}

for(var i = 0; i < themeDots.length; i++)
{
    themeDots[i].addEventListener('click', function()
    {
        let mode = this.dataset.mode
        console.log("option clicked: ", mode);
        setTheme(mode);
    })
}

function setTheme(mode)
{
    if(mode == 'green')
    {
        document.getElementById('theme-style').href = 'default.css';
    }
    if(mode == 'blue')
    {
        document.getElementById('theme-style').href = "blue.css";
    }
    if(mode == 'grey')
    {
        document.getElementById('theme-style').href = 'grey.css';
    }
    if(mode == 'purple')
    {
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}