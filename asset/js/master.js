  // ************delete
  function _del(x){
    x.parentElement.parentElement.style.height = '0'
    x.parentElement.parentElement.style.border = 'none'
}
// **************cheched
function _checked(x){
    let status = x.getAttribute('data-check')
    if(status == 'off'){
        x.style.color='rgb(87, 220, 87)'
        x.parentElement.style.color='rgba(115, 158, 115, 0.911)'
        x.parentElement.style.borderBottom='1px solid rgba(115, 158, 115, 0.911)'
        x.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('d-none')
        x.setAttribute('data-check' , 'on')
    }else{
        x.style.color='white'
        x.parentElement.style.color='white'
        x.parentElement.style.borderBottom='1px solid white'
        x.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('d-none')
        x.setAttribute('data-check' , 'off')

    }

}
// *******************edit
function _edit(x){
    let status = x.getAttribute('data-edit')
    if(status == 'off'){
        x.style.color='yellow'
        x.parentElement.previousElementSibling.classList.add('d-none')
        x.parentElement.previousElementSibling.classList.remove('d-flex')
        x.parentElement.previousElementSibling.previousElementSibling.classList.add('d-flex')
        x.parentElement.previousElementSibling.previousElementSibling.classList.remove('d-none')
        x.parentElement.previousElementSibling.previousElementSibling.value = x.parentElement.previousElementSibling.innerHTML
        x.setAttribute('data-edit' , 'on')
    }else{
        x.style.color='white'
        x.parentElement.previousElementSibling.classList.add('d-flex')
        x.parentElement.previousElementSibling.classList.remove('d-none')
        x.parentElement.previousElementSibling.previousElementSibling.classList.add('d-none')
        x.parentElement.previousElementSibling.previousElementSibling.classList.remove('d-flex')
        x.parentElement.previousElementSibling.innerHTML = x.parentElement.previousElementSibling.previousElementSibling.value 
        x.setAttribute('data-edit' , 'off')
    }
}

// ************************edit-key
function _EditIn(x){
    let d = x.getAttribute('data-edit')
    if(d == 'off'){
        x.style.color='blue'

    }else{
        x.style.color='yellow'
    }
}
function _EditLeave(x){
    
    let p = x.getAttribute('data-edit')
    if(p == 'off'){
        x.style.color='white'

    }else{
        x.style.color='yellow'
    }
}

// ***************************add
function _add(){
    temp = _inp.value
    if (
        (temp == '') ||
        (temp == null)
    ) {
        // empty
        alert('please write the task ')
    } else {
        // not empty
        let _li = document.createElement('li')
        _li.classList.add('task' , 'col-12')
        _li.innerHTML = `
            <i onclick="_checked(this)" data-check="off" class="bi bi-check-circle-fill col-1"></i>
            <input type="text" class="col-11 input-edit p-0 m-0 d-none justify-content-start align-items-center h-100">                                        
            <p class="col-11 p-0 m-0 d-flex justify-content-start align-items-center h-100"> ${temp}</p>
            <span class="icon-bar">
            <i onclick="_edit(this)" onmouseenter=" _EditIn(this)" onmouseleave="_EditLeave(this)" data-edit="off" class="bi bi-pencil-fill"></i>
            <i onclick="_del(this)" class="bi bi-trash3-fill"></i>
            </span>
        `
        document.getElementById('list').appendChild(_li)
        _inp.value = null
        _inp.focus()

    }
}


function _keyCode(e){
    let para = e.keyCode || e.which
    if(para==13){
        _add()
    }
}
// *****************add-btn
document.getElementById('add-btn').addEventListener('mousedown' , function(){
    this.style.transform='scale(0.9)'
    this.style.color='yellow'
})
document.getElementById('add-btn').addEventListener('mouseup' , function(){
    this.style.transform='scale(1.2)'
    this.style.color='white'
})
// *********************date
// let _day = prompt('eneter day')
// let _mon = prompt('eneter month')
// let _year = prompt('eneter year')
// document.getElementById('date').innerHTML=`
// ${_year}/${_mon}/${_day}
// `