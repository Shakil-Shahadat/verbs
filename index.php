<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Test Your Irregular Verbs Knowledge</title>
	<link rel="stylesheet" href="src/style.css">
</head>
<body>

	<div class="container">

		<table>
			<tr>
				<th>Serial</th>
				<th>Verb</th>
				<th>Past Tense</th>
				<th>Past Participle</th>
				<th>Check</th>
			</tr>
			<tr>
				<td></td>
				<td>Go</td>
				<td data-answer="went" contenteditable></td>
				<td data-answer="gone" contenteditable></td>
				<td>
					<button onclick="checkAnswer( this.parentElement.parentElement )">Check</button>
				</td>
			</tr>
		</table>

	</div><!-- .container -->

<script src="src/script.js"></script>
</body>
</html>
