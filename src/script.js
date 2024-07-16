'use strict';

function checkAnswer( target )
{
	let focussed = false;
	let targetP = target.querySelectorAll( 'td' )[ 2 ];
	let targetPP = target.querySelectorAll( 'td' )[ 3 ];

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
}
