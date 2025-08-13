
let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if(theme == null)
{
    setTheme('white');
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
    if(mode == 'white')
    {
        document.getElementById('theme-style').href = 'default.css';
    }
    if(mode == 'dark')
    {
        document.getElementById('theme-style').href = "dark.css";
    }
    if(mode == 'green')
    {
        document.getElementById('theme-style').href = 'green.css';
    }
    if(mode == 'teal')
    {
        document.getElementById('theme-style').href = 'teal.css';
    }

    localStorage.setItem('theme', mode);
}