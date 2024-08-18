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


// A function to show the answer
function showAnswer( that )
{
	let td1 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 2 ];
	let td2 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 3 ];

	td1.innerText = td1.dataset.answer;
	td1.style.backgroundColor = 'LightCyan';

	td2.innerText = td2.dataset.answer;
	td2.style.backgroundColor = 'LightCyan';
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
		let td1 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 2 ];
		let td2 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 3 ];

		td1.innerText = td1.dataset.answer;
		td1.style.backgroundColor = 'LightCyan';

		td2.innerText = td2.dataset.answer;
		td2.style.backgroundColor = 'LightCyan';
	}
}


// A function to check all the answers
function checkAll()
{
	for ( let i = 1; i < document.querySelectorAll( 'tr' ).length; i++ )
	{
		let td1 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 2 ];
		let td2 = document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 3 ];

		if ( td1.innerText === td1.dataset.answer )
		{
			td1.style.backgroundColor = '#CCFF90';
		}
		else
		{
			td1.style.backgroundColor = '#FFCDD2';
		}

		if ( td2.innerText === td2.dataset.answer )
		{
			td2.style.backgroundColor = '#CCFF90';
		}
		else
		{
			td2.style.backgroundColor = '#FFCDD2';
		}
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
