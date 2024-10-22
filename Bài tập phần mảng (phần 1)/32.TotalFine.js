const date = 12
const car = [2375, 7682, 2325, 2352]
const fine = [250, 500, 350, 200]
function TotalFine(date, car, fine) {
let Fine = 0
        if (date%2!==0){
            for (let i = 0; i < car.length; i++) {
                if (car[i] %2 === 0) {
                    Fine += fine[i]
    }
}
}
        else {
            for (let i = 0; i < car.length; i++) {
                if (car[i] %2 !== 0) {
                    Fine += fine[i]
    }
}
}
        return Fine
}
console.log(TotalFine(date,car,fine))