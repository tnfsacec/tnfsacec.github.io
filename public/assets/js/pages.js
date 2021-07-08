window.addEventListener('hashchange',()=>{
    let url = window.location.href.split('/')
    let toggle = [document.getElementById('1'),
                  document.getElementById('2'),
                  document.getElementById('3'),
                  document.getElementById('4'),
                  document.getElementById('5'),
                  document.getElementById('6')]

    var toChange = 1
    switch (url[4]){
        case 'experience':
            toChange = 3
            break
        case 'motivation':
            toChange = 2
            break
        case 'policy':
            toChange = 4
            break
        case 'debate':
            toChange = 5
            break
        case 'open':
            toChange = 6
            break
        default:
            break
    }
    for(var i = 0;i < 6;++i){
        if(toChange == (i+1)){
            toggle[i].classList.add('active')
        }else{
            toggle[i].classList.remove('active')
        }
    }
})