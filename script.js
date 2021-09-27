
btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", ()=>{

    nomePaciente = document.getElementById('nomePaciente').value;

    peso = parseFloat(document.getElementById('peso').value);

    altura = parseFloat(document.getElementById('altura').value);

    if(nomePaciente !== '' && peso !== '' && altura !== ''){

        imc = peso / (altura * altura);

        pesoMinimo = 18.6*(altura * altura);
        pesoMaximo = 24.9*(altura * altura);

        if(imc <= 18.5){
            window.alert('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + 
            ' m. Você foi classificado como abaixo do peso ideal! Com IMC de: ' + imc.toFixed(2) + ' kg/m². Procure manter o seu peso entre ' + pesoMinimo.toFixed(2) + ' kg e ' + pesoMaximo.toFixed(2) + ' kg.');
        }
        else if(imc >= 18.6 && imc <= 24.9){
            window.alert('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + 
            ' m. Você foi classificado com o peso ideal! Com IMC de: ' + imc.toFixed(2) + ' kg/m². Parabéns! Procure manter o seu peso entre ' + pesoMinimo.toFixed(2) + ' kg e ' + pesoMaximo.toFixed(2) + ' kg.');   
        }
        else if(imc >= 25 && imc <= 29.9){
            window.alert('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + 
            ' m. Você foi classificado como Sobrepeso! Com IMC de: ' + imc.toFixed(2) + ' kg/m². Procure manter o seu peso entre ' + pesoMinimo.toFixed(2) + ' kg e ' + pesoMaximo.toFixed(2) + ' kg.');   
        }
        else if(imc >= 30 && imc <= 34.9){
            window.alert('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + 
            ' m. Você foi classificado como Obesidade nível 1! IMC: ' + imc.toFixed(2) + ' kg/m². Procure manter o seu peso entre ' + pesoMinimo.toFixed(2) + ' kg e ' + pesoMaximo.toFixed(2) + ' kg.'); 
        }
        else if(imc >= 35 && imc <= 39.9){
            window.alert('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura + 
            ' m. Você foi classificado como obesidade nível 2! IMC: ' + imc.toFixed(2) + ' kg/m². Procure manter o seu peso entre ' + pesoMinimo.toFixed(2) + ' kg e ' + pesoMaximo.toFixed(2) + ' kg.');   
        }
        else {
            window.alert('Olá ' + nomePaciente + '! Com o peso ' + peso + ' kg e a altura ' + altura +
             ' m. Você foi classificado como obesidade nível 3! IMC: ' + imc.toFixed(2) + ' kg/m². Procure manter o seu peso entre ' + pesoMinimo.toFixed(2) + ' kg e ' + pesoMaximo.toFixed(2) + ' kg.');
        }

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

});



