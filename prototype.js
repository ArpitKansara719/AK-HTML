<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
            
    var Parent = {
        getmsg : function()
        {
            console.log("Parent call    ");
        }
    }
    
    var child = Object.create(Parent);
    child.getmsg();
    </script>
</body>
</html>