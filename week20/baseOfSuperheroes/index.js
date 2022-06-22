let json = `[{
    "name": "Железный человек",
    "universe": "Marvel",
    "alterEgo": "Тони Старк",
    "activity": "Гений",
    "superpower": "Высокий уровень интеллекта"
},{
    "name": "Халк",
    "universe": "Marvel",
    "alterEgo": "Брюс Беннер",
    "activity": "Борец за справедливость",
    "superpower": "Cверхчеловеческая сила"
},{
    "name": "Черная вдова",
    "universe": "Marvel",
    "alterEgo": "Наташа Романофф",
    "activity": "Шпионка",
    "superpower": "Пик человеческого физического потенциала"
}]`;

document.addEventListener("DOMContentLoaded", function (event){
   
    let superheroes = JSON.parse(json);

    let heroInfo = "";
    for (let hero of superheroes){
        heroInfo += `<div class='hero'>
        <h3> ${hero.name}</h3>
        <div>Вселенная: ${hero.universe}</div>
        <div>Альтер эго: ${hero.alterEgo}</div>
        <div>Деятельность: ${hero.activity}</div>
        <div>Суперсила: ${hero.superpower}</div>
        </div>`
    }
    document.getElementById('container').innerHTML = heroInfo;
});