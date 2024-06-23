<!DOCTYPE html>
<html lang="en">
<head>
<title>Calculator</title>
<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
    }
    .calculator {
        width: 320px;
        margin: 55px auto;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input[type="button"] {
        width: 64px;
        height: 64px;
        font-size: 1.5em;
        margin: 5px;
    }
    input[type="text"] {
        width: 100%;
        font-size: 2em;
        padding: 10px;
        text-align: right;
        margin-bottom: 10px;
    }
</style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <br>
        <input type="button" value="7" onclick="addToDisplay('7')">
        <input type="button" value="8" onclick="addToDisplay('8')">
        <input type="button" value="9" onclick="addToDisplay('9')">
        <input type="button" value="/" onclick="addToDisplay('/')"><br>
        
        <input type="button" value="4" onclick="addToDisplay('4')">
        <input type="button" value="5" onclick="addToDisplay('5')">
        <input type="button" value="6" onclick="addToDisplay('6')">
        <input type="button" value="*" onclick="addToDisplay('*')"><br>
        
        <input type="button" value="1" onclick="addToDisplay('1')">
        <input type="button" value="2" onclick="addToDisplay('2')">
        <input type="button" value="3" onclick="addToDisplay('3')">
        <input type="button" value="-" onclick="addToDisplay('-')"><br>
        
        <input type="button" value="0" onclick="addToDisplay('0')">
        <input type="button" value="." onclick="addToDisplay('.')">
        <input type="button" value="=" onclick="calculate()">
        <input type="button" value="+" onclick="addToDisplay('+')"><br>
        
        <input type="button" value="C" onclick="clearDisplay()">
    </div>

    <script>
        function addToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculate() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch(err) {
                document.getElementById('display').value = 'Error';
            }
        }
    </script>
</body>
</html>
