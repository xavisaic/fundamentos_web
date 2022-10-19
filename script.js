function buyer() {
    const counter = document.querySelector('.counter');
    
    let num = counter.innerHTML;
    num++;
    counter.innerHTML = num;
}