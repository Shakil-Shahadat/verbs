'use strict';

for ( let e of document.querySelectorAll( '.checkBtn' ) )
{
	e.addEventListener( 'click', function(){
		let focussed = false;
		let targetP = this.parentElement.parentElement.querySelectorAll( 'td' )[ 2 ];
		let targetPP = this.parentElement.parentElement.querySelectorAll( 'td' )[ 3 ];

		if ( targetP.innerText === targetP.dataset.answer )
		{
			targetP.style.backgroundColor = '#CCFF90';
		}
		else
		{
			targetP.style.backgroundColor = '#FFCDD2';
			targetP.focus();
			focussed = true;
		}

		if ( targetPP.innerText === targetPP.dataset.answer )
		{
			targetPP.style.backgroundColor = '#CCFF90';
		}
		else
		{
			targetPP.style.backgroundColor = '#FFCDD2';

			if ( !focussed )
			{
				targetPP.focus();
			}
		}
	});
}

function showAnswer( that )
{
	let targetP = that.parentElement.parentElement.querySelectorAll( 'td' )[ 2 ];
	let targetPP = that.parentElement.parentElement.querySelectorAll( 'td' )[ 3 ];

	targetP.innerText = targetP.dataset.answer;
	targetP.style.backgroundColor = 'LightCyan';

	targetPP.innerText = targetPP.dataset.answer;
	targetPP.style.backgroundColor = 'LightCyan';
}

// Automatically add numbers to serial columns
for ( let i = 1; i < document.querySelector( 'table' ).querySelectorAll( 'tr' ).length; i++ )
{
	document.querySelector( 'table' ).querySelectorAll( 'tr' )[ i ].querySelector( 'td' ).innerText = i;
}


// A function to show all answers
function learnAll()
{
	for ( let i = 1; i < document.querySelectorAll( 'tr' ).length; i++ )
	{
		let targetP = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 2 ];
		let targetPP = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 3 ];

		targetP.innerText = targetP.dataset.answer;
		targetP.style.backgroundColor = 'LightCyan';

		targetPP.innerText = targetPP.dataset.answer;
		targetPP.style.backgroundColor = 'LightCyan';
	}
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
