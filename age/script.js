var age = +prompt('Введите ваш возраст')

if(age < 18) {
    alert('Ты совсем еще зеленый, уроки сделал?')
}
if(age >= 18 && age < 45) {
    alert('Иди работай')
}
if(age >= 45 && age < 70) {
    alert('Ох, старичок')
}
if(age >= 70 && age < 100) {
    alert('Живучий ты однако')
}
if(age >= 100) {
    alert('Ты что такое?')
}