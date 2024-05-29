const form=document.getElementById("form");
let rec="";
let k=0;
rec=localStorage.getItem("reci");
document.getElementById("recomendation").innerHTML = (rec);
form.addEventListener("submit", e => {
    rec="Рекомендуем посетить: ";
    const kid=form.querySelector('[name="kid"]');
    const strana=form.querySelector('[name="strana"]');
    const price=form.querySelector('[name="price"]');
    const tip=form.querySelector('[name="tip"]');
    const vozrast=form.querySelector('[name="vozrast"]');
    const lil = { 
        kid: kid.value, 
        strana: strana.value, 
        price: price.value, 
        tip: tip.value, 
        vozrast: vozrast.value 
    };
    for (let i=0; i<all.length; i++){
        if( (lil.kid==all[i].kid  || lil.kid=="Любой") && 
            (lil.strana==all[i].strana || lil.strana=="Любой") && 
            (lil.price==all[i].price || lil.price=="Любой") && 
            (lil.tip==all[i].tip || lil.tip=="Любой") && 
            (lil.vozrast==all[i].vozrast || lil.vozrast=="Любой")
        ){
            rec=rec+"<br>" + all[i].name;
            k+=1;
        }
    }
    if(k!=0){
        document.getElementById("knopochka").addEventListener("click", function() { 
            document.getElementById("recomendation").innerHTML = (rec); 
        });
        localStorage.setItem("reci", rec);
    }
    else{
        rec="По вашим рекомендациям ничего не найдено";
        document.getElementById("knopochka").addEventListener("click", function() { 
            document.getElementById("recomendation").innerHTML = (rec); 
        });
        localStorage.setItem("reci", rec);
    }

});
const all=[
    {name: "Поездка на озеро Байкал", kid: "Нет", strana: "Россия", price: "d20", tip: "Активный", vozrast: "50+"},
    {name: "Посетите Краснодарский край", kid: "Да", strana: "Россия", price: "d50", tip: "Пассивный", vozrast: "18+"},
    {name: "Посетите Валенсию", kid: "Нет", strana: "Испания", price: "d200", tip: "Пассивный", vozrast: "18+"},
    {name: "Посетите тур Aparthotel Marinada", kid: "Да", strana: "Испания", price: "d200", tip: "Активный", vozrast: "18+"},
    {name: "Посетите курорт в Пусане", kid: "Нет", strana: "Корея", price: "dbez", tip: "Активный", vozrast: "30+"},
    {name: "Посетите курорт в Чеджу", kid: "Да", strana: "Корея", price: "d200", tip: "Пассивный", vozrast: "50+"},
    {name: "Посетите большое путешествие по Фьордам", child: "Нет", strana: "Норвегия", price: "dbez", tip: "Активный", vozrast: "30+"},
    {name: "Посетите Атлантическую дорогу", kid: "Да", strana: "Норвегия", price: "d50", tip: "Пассивный", vozrast: "18+"},
    {name: "Посетите Норвежскую классику", kid: "Нет", strana: "Норвегия", price: "d200", tip: "Активный", vozrast: "30+"},
    {name: "Вам подойдет тур Знакомство с Лондоном", kid: "Нет", strana: "Великобритания", price: "d50", tip: "Активный", vozrast: "18+"},
    {name: "Вам подойдет тур Путешествие по дворцам и замкам Англии", child: "Да", strana: "Великобритания", price: "d20", tip: "Пассивный", vozrast: "50+"},
    {name: "Посетите Курорты Эгейского побережья", kid: "Нет", strana: "Турция", price: "d200", tip: "Пассивный", vozrast: "18+"},
    {name: "Посетите Курорты Антайского побережья", kid: "Да", strana: "Турция", price: "dbez", tip: "Активный", vozrast: "18+"},
    {name: "Посетите ЗОЛОТО КАЛИФОРНИИ И НАЦИОНАЛЬНЫЕ ПАРКИ", kid: "Да", strana: "США", price: "d200", tip: "Активный", vozrast: "30+"},
    {name: "Тур по Аляске", kid: "Нет", strana: "США", price: "d200", tip: "Активный", vozrast: "18+"},
    {name: "Отдых в Флориде", kid: "Да", strana: "США", price: "dbez", tip: "Пассивный", vozrast: "18+"},
]
