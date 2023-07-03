export function init() {
    const btn = document.querySelector('.header__lang-btn')
    const content = document.querySelector('.header__lang-content')
    const track = document.querySelector('.header__lang-track')
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        content.classList.toggle('active');
        if(content.classList.contains('active')){
            content.style.height = `${track.clientHeight}px`
        }else{
            content.style.height = `0px`
        }
    })
    window.onclick = (e) => {
        if (content.classList.contains('active') && !e.composedPath().includes(btn) && !e.composedPath().includes(content)){
            btn.classList.remove('active');
            content.classList.remove('active');
            content.style.height = `0px`
        }
    };
}