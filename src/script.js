'use strict';


// Automatically add numbers to serial columns
for ( let i = 1; i < document.querySelector( 'table' ).querySelectorAll( 'tr' ).length; i++ )
{
	document.querySelector( 'table' ).querySelectorAll( 'tr' )[ i ].querySelector( 'td' ).innerText = i;
}


// A function to check a single answer
function checkAnswer( that )
{
	let td1 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 2 ];
	let td2 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 3 ];

	// A variable to keep the status of if the focus has been set
	let focussed = false;

	for ( let e of [ td1, td2 ] )
	{
		// Find if the user answer matches the correct answer
		let matchedResult = matchAnswer( e.innerText, e.dataset.answer ); // Will return correct, partial or none

		// Set background color and focus based on the matchedResult
		if ( matchedResult === 'correct' )
		{
			e.style.backgroundColor = '#CCFF90'; // Green color
		}
		else if ( matchedResult === 'partial' )
		{
			e.style.backgroundColor = 'yellow';

			// Set focus only if it hasn't been set yet
			if ( focussed === false )
			{
				e.focus();
				focussed = true;
			}
		}
		else if ( matchedResult === 'none' )
		{
			e.style.backgroundColor = '#FFCDD2'; // Red color

			// Set focus only if it hasn't been set yet
			if ( focussed === false )
			{
				e.focus();
				focussed = true;
			}
		}
	} // End of for loop
}


// A function to match user answer and correct answer
function matchAnswer( userAnswer, correctAnswer )
{
	// Convert to lower case and replace all spaces
	userAnswer = userAnswer.toLowerCase().replaceAll( ' ', '' );

	// Replace all spaces
	correctAnswer = correctAnswer.replaceAll( ' ', '' );

	// Find out if userAnswer has multiple parts
	let userAnswerMultiPart = userAnswer.includes( ',' );

	// Find out if correctAnswer has multiple parts
	let correctAnswerMultiPart = correctAnswer.includes( ',' );

	// If both answer has multiple parts
	if ( userAnswerMultiPart === true && correctAnswerMultiPart === true )
	{
		let userAnswerParts = userAnswer.split( ',' );
		let correctAnswerParts = correctAnswer.split( ',' );
		let rightAns = 0;

		if ( userAnswerParts[ 0 ] === correctAnswerParts [ 0 ] || userAnswerParts[ 0 ] === correctAnswerParts [ 1 ] )
		{
			rightAns++;
		}

		if ( userAnswerParts[ 1 ] === correctAnswerParts [ 0 ] || userAnswerParts[ 1 ] === correctAnswerParts [ 1 ] )
		{
			rightAns++;
		}

		if ( rightAns === 0 )
		{
			// If none of the user answers matches the correct answers, return none
			return 'none';
		}
		else if ( rightAns === 1 )
		{
			// If only one answer matches, return partial
			return 'partial';
		}
		else if ( rightAns === 2 )
		{
			// If both answer matches, return correct
			return 'correct';
		}
	}
	// If userAnswer has multiple parts but correctAnswer has single part
	else if ( userAnswerMultiPart === true && correctAnswerMultiPart === false )
	{
		let userAnswerParts = userAnswer.split( ',' );

		if ( userAnswerParts[ 0 ] === correctAnswer || userAnswerParts[ 1 ] === correctAnswer )
		{
			return 'partial'; // It's partial, cause the user answer has one wrong answer
		}
		else
		{
			return 'none';
		}
	}
	// If userAnswer has single part but correctAnswer has multiple parts
	else if ( userAnswerMultiPart === false && correctAnswerMultiPart === true )
	{
		let correctAnswerParts = correctAnswer.split( ',' );

		if ( userAnswer === correctAnswerParts[ 0 ] || userAnswer === correctAnswerParts[ 1 ] )
		{
			return 'partial';
		}
		else
		{
			return 'none';
		}
	}
	// If both answer has a single part
	else if ( userAnswerMultiPart === false && correctAnswerMultiPart === false )
	{
		if ( userAnswer === correctAnswer )
		{
			return 'correct';
		}
		else
		{
			return 'none';
		}
	}
} // End of matchAnswer()


// A function to show the answer
function showAnswer( that )
{
	let td1 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 2 ];
	let td2 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 3 ];

	td1.innerText = toTitleCase( td1.dataset.answer );
	td1.style.backgroundColor = 'LightCyan';

	td2.innerText = toTitleCase( td2.dataset.answer );
	td2.style.backgroundColor = 'LightCyan';
}


// A function to convert strings into title case
function toTitleCase( str )
{
	return str.replace(
		/\w\S*/g,
		text => text.charAt( 0 ).toUpperCase() + text.substring( 1 ).toLowerCase()
	);
}
// Source: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript


// A function to check all the answers
function checkAll()
{
	let focussed = false;

	let correctAns = 0; // A variable to store correct answers
	let partialAns = 0; // A variable to store partially correct answers
	let wrongAns = 0; // A variable to store wrong answers

	for ( let i = 1; i < document.querySelectorAll( 'tr' ).length; i++ )
	{
		let td1 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 2 ];
		let td2 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 3 ];

		if ( td1.innerText.toLowerCase().replaceAll( ' ', '' ) === td1.dataset.answer.replaceAll( ' ', '' ) )
		{
			td1.style.backgroundColor = '#CCFF90';
			correctAns++;
		}
		else if ( td1.innerText.includes( ',' ) && td1.dataset.answer.includes( ',' ) )
		{
			const words = td1.innerText.toLowerCase().replaceAll( ' ', '' ).split( ',' );
			const answers = td1.dataset.answer.replaceAll( ' ', '' ).split( ',' );

			// Testing for reverse order answers
			if ( words[ 0 ] === answers[ 1 ] && words[ 1 ] === answers[ 0 ] )
			{
				td1.style.backgroundColor = '#CCFF90';
				correctAns++;
			}
			// Check if only one of them is correct
			else if ( words[ 0 ] === answers[ 0 ] || words[ 0 ] === answers[ 1 ] || words[ 1 ] === answers[ 0 ] || words[ 1 ] === answers[ 1 ] )
			{
				td1.style.backgroundColor = 'yellow';
				partialAns++;

				if ( focussed === false )
				{
					td1.focus();
					focussed = true;
				}
			}
			else
			{
				td1.style.backgroundColor = '#FFCDD2';
				wrongAns++;

				if ( focussed === false )
				{
					td1.focus();
					focussed = true;
				}
			}
		}
		// If there is only one input and two answers, then check if any of the answers matches the input
		else if ( td1.innerText.includes( ',' ) === false && td1.dataset.answer.includes( ',' ) )
		{
			const input = td1.innerText.toLowerCase().replaceAll( ' ', '' );
			const answers = td1.dataset.answer.replaceAll( ' ', '' ).split( ',' );

			if ( input === answers[ 0 ] || input === answers[ 1 ] )
			{
				td1.style.backgroundColor = 'yellow';
				partialAns++;
			}
			else
			{
				td1.style.backgroundColor = '#FFCDD2';
				wrongAns++;
			}

			if ( focussed === false )
			{
				td1.focus();
				focussed = true;
			}
		}
		else
		{
			td1.style.backgroundColor = '#FFCDD2';
			wrongAns++;

			if ( focussed === false )
			{
				td1.focus();
				focussed = true;
			}
		}

		if ( td2.innerText.toLowerCase().replaceAll( ' ', '' ) === td2.dataset.answer.replaceAll( ' ', '' ) )
		{
			td2.style.backgroundColor = '#CCFF90';
			correctAns++;
		}
		else if ( td2.innerText.includes( ',' ) && td2.dataset.answer.includes( ',' ) )
		{
			const words = td2.innerText.toLowerCase().replaceAll( ' ', '' ).split( ',' );
			const answers = td2.dataset.answer.replaceAll( ' ', '' ).split( ',' );

			// Testing for reverse order answers
			if ( words[ 0 ] === answers[ 1 ] && words[ 1 ] === answers[ 0 ] )
			{
				td2.style.backgroundColor = '#CCFF90';
				correctAns++;
			}
			// Check if only one of them is correct
			else if ( words[ 0 ] === answers[ 0 ] || words[ 0 ] === answers[ 1 ] || words[ 1 ] === answers[ 0 ] || words[ 1 ] === answers[ 1 ] )
			{
				td2.style.backgroundColor = 'yellow';
				partialAns++;

				if ( focussed === false )
				{
					td2.focus();
					focussed = true;
				}
			}
			else
			{
				td2.style.backgroundColor = '#FFCDD2';
				wrongAns++;

				if ( focussed === false )
				{
					td2.focus();
					focussed = true;
				}
			}
		}
		// If there is only one input and two answers, then check if any of the answers matches the input
		else if ( td2.innerText.includes( ',' ) === false && td2.dataset.answer.includes( ',' ) )
		{
			const input = td2.innerText.toLowerCase().replaceAll( ' ', '' );
			const answers = td2.dataset.answer.replaceAll( ' ', '' ).split( ',' );

			if ( input === answers[ 0 ] || input === answers[ 1 ] )
			{
				td2.style.backgroundColor = 'yellow';
				partialAns++;
			}
			else
			{
				td2.style.backgroundColor = '#FFCDD2';
				wrongAns++;
			}

			if ( focussed === false )
			{
				td2.focus();
				focussed = true;
			}
		}
		else
		{
			td2.style.backgroundColor = '#FFCDD2';
			wrongAns++;

			if ( focussed === false )
			{
				td2.focus();
				focussed = true;
			}
		}
	}

	alert( 'Score\nCorrect: ' + correctAns + ', Partial: ' + partialAns + ', Wrong: ' + wrongAns );
}


// A function to show all answers
function learnAll()
{
	for ( let i = 1; i < document.querySelectorAll( 'tr' ).length; i++ )
	{
		let td1 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 2 ];
		let td2 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 3 ];

		td1.innerText = toTitleCase( td1.dataset.answer );
		td1.style.backgroundColor = 'LightCyan';

		td2.innerText = toTitleCase( td2.dataset.answer );
		td2.style.backgroundColor = 'LightCyan';
	}
}


// A function to clear all answers
function clearAll()
{
	for ( let i = 1; i < document.querySelectorAll( 'tr' ).length; i++ )
	{
		let td1 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 2 ];
		let td2 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 3 ];

		td1.innerText = '';
		td1.style.backgroundColor = '';

		td2.innerText = '';
		td2.style.backgroundColor = '';
	}
}


// A function to clear answers
function clearAnswer( that )
{
	let td1 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 2 ];
	let td2 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 3 ];

	td1.innerText = '';
	td1.style.backgroundColor = '';

	td2.innerText = '';
	td2.style.backgroundColor = '';
}


/*
setTimeout( () => {

	let verbs = '';
	for ( let i = 1; i < document.querySelectorAll( 'tr' ).length; i++ )
	{
		verbs += document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 1 ].innerText + '/';
		verbs += document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 2 ].dataset.answer + '/';
		verbs += document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 3 ].dataset.answer + ';';
	}

	console.log( verbs );

}, 1000 );
*/


// Variables for timer management
let timerStat = false;
let secCounter;

// A function to toggle the timer
function toggleTimer()
{
	if ( timerStat === false )
	{
		// If the timer is off, turn it on
		timerStat = true;

		// Change the text of the timer start button
		document.querySelector( '.timerButton' ).innerText = 'Pause Timer';

		// Turn on the timer
		secCounter = setInterval( updateTimer, 1000 );
	}
	else
	{
		// If the timer is on, turn it off
		timerStat = false;

		// Change the text of the timer start button
		document.querySelector( '.timerButton' ).innerText = 'Start Timer';

		// Turn off the timer
		clearInterval( secCounter );
	}
}

// A function to update the time of the timer
function updateTimer()
{
	// Get the values of the second and the minute
	let sec = parseInt( document.querySelector( '.sec' ).innerText );
	let min = parseInt( document.querySelector( '.min' ).innerText );

	if ( sec < 59 )
	{
		// Only increase the value of second
		if ( sec < 9 )
		{
			// If the value of second is single digit, pad it with a zero
			document.querySelector( '.sec' ).innerText = '0' + ++sec;
		}
		else
		{
			document.querySelector( '.sec' ).innerText = ++sec;
		}
	}
	else
	{
		// Reset the value of second
		document.querySelector( '.sec' ).innerText = '00';

		// Increase the value of minute
		if ( min < 9 )
		{
			// If the value of minute is single digit, pad it with a zero
			document.querySelector( '.min' ).innerText = '0' + ++min;
		}
		else
		{
			document.querySelector( '.min' ).innerText = ++min;
		}
	}
}

// A function to reset the timer
function resetTimer()
{
	// Turn off the timer
	clearInterval( secCounter );

	timerStat = false;

	// Change the text of the timer start button
	document.querySelector( '.timerButton' ).innerText = 'Start Timer';

	// Reset the value of second and minute
	document.querySelector( '.sec' ).innerText = '00';
	document.querySelector( '.min' ).innerText = '00';
}
