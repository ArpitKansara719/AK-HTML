<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
       
        class Parent
        {
            constructor()
            {
                this.message = "Hello"
            }
            getmsg()
            {
                console.log(this.message);
            }
        }
        class child extends Parent
        {
            constructor()
            {
                super();
                // this.message = "World"
            }
        }

        let obj = new child();
        console.log(obj);



    </script>
</body>
</html>