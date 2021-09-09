
btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", ()=>{

    nomePaciente = document.getElementById('nomePaciente').value;

    peso = parseFloat(document.getElementById('peso').value);

    altura = parseFloat(document.getElementById('altura').value);

    imc = peso / (altura * altura);

    if(imc <= 18.5){
        window.confirm('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + ' m. Você foi classificado como abaixo do peso ideal! Com IMC de: ' + imc.toFixed(2) + ' kg/m².');
    }
    else if(imc >= 18.6 && imc <= 24.9){
        window.confirm('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + ' m. Você foi classificado com o peso ideal! Com IMC de: ' + imc.toFixed(2) + ' kg/m². Parabéns!');
    }
    else if(imc >= 25 && imc <= 29.9){
        window.confirm('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + ' m. Você foi classificado como Sobrepeso! Com IMC de: ' + imc.toFixed(2) + ' kg/m².');   
    }
    else if(imc >= 30 && imc <= 34.9){
        window.confirm('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + ' m. Você foi classificado como Obesidade nível 1! IMC: ' + imc.toFixed(2) + ' kg/m².');   
    }
    else if(imc >= 35 && imc <= 39.9){
        window.confirm('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + ' m. Você foi classificado como obesidade nível 2! IMC: ' + imc.toFixed(2) + ' kg/m².');   
    }
    else {
        window.confirm('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + ' m. Você foi classificado como obesidade nível 3! IMC: ' + imc.toFixed(2) + ' kg/m².');   
    }

});



