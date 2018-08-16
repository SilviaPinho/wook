Function DataAtual() {
        data = new Date();
        document.getElementById('data').value = data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear();
