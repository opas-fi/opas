<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Form</title>
</head>
<body>
<h1>Contact us</h1>

<form action="/gdform.php" method="post">
<input type="hidden" name="subject" value="Form Submission" />
<input type="hidden" name="redirect" value="index.html" />
<input type="hidden" name="email" value="islamopas@protonmail.com" />
<p>First Name:<input type="text" name="FirstName" /></p>

<p>Last Name:<input type="text" name="LastName" /></p>
<p>E-Mail:<input type="text" name="email" /></p>
<p>Comments:</p><textarea name="comments" cols="40" rows="10">
Type comments here.</textarea>


<input type="submit" name="submit" value="submit"/>
</form>
</body>
</html>
