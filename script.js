document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o recarregamento da página

        const weight = document.getElementById('weight').value.trim();
        const height = document.getElementById('height').value.trim();

        if (!weight || !height) {
            document.getElementById('alert').classList.remove('hidden');
            return; // Impede a continuação da função se os campos não estiverem preenchidos
        } else {
            document.getElementById('alert').classList.add('hidden');
        }

        const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    value.textContent = bmi.replace('.', ',');
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!';
        value.classList.add('attention');
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
        value.classList.add('attention');
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
        value.classList.add('attention');
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
        value.classList.add('attention');
    } else {
        description = "Cuidado! Você está com obesidade morbida!";
        value.classList.add('attention');
    }
    document.getElementById('description').textContent = description;
});
    });