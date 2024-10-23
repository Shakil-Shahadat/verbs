'use strict';


// All verbs and their other forms
const verbs = 'Abide/abode, abided/abided;Arise/arose/arisen;Awake/awoke/awaked, awoken;Be/was/been;Bear */bore/borne;Beat */beat/beaten;Become/became/become;Befall/befell/befallen;Beget/begot/begotten;Begin */began/begun;Behold/beheld/beheld;Bend */bent/bent;Bereave/bereaved, bereft/bereaved, bereft;Beseech/besought/besought;Beset/beset/beset;Bet/bet, betted/bet, betted;Betake/betook/betaken;Bethink/bethought/bethought;Bid */bade, bid/bidden, bid;Bind */bound/bound;Bite */bit/bitten, bit;Bleed */bled/bled;Blend/blended, blent/blended, blent;Bless/blessed, blest/blessed, blest;Blow */blew/blown;Break */broke/broken;Breed/bred/bred;Bring */brought/brought;Broadcast/broadcast, broadcasted/broadcast, broadcasted;Build */built/built;Burn */burnt, burned/burnt, burned;Burst */burst/burst;Buy */bought/bought;Cast/cast/cast;Catch */caught/caught;Chide/chided, chid/chided, chidden;Choose */chose/chosen;Cleave/clove, cleft/cloven, cleft;Cling/clung/clung;Clothe/clothed, clad/clothed, clad;Come */came/come;Cost */cost/cost;Creep */crept/crept;Crow/crowed, crew/crowed;Cut */cut/cut;Dare/dared, durst/dared;Deal */dealt/dealt;Dig */dug/dug;Dive/dived, dove/dived;Do */did/done;Draw */drew/drawn;Dream */dreamt, dreamed/dreamt, dreamed;Drink */drank/drunk;Drive */drove/driven;Dwell */dwelt/dwelt;Eat */ate/eaten;Fall */fell/fallen;Feed */fed/fed;Feel */felt/felt;Fight */fought/fought;Find */found/found;Flee */fled/fled;Fling */flung/flung;Fly */flew/flown;Forbear/forbore/forborne;Forbid/forbade, forbad/forbidden;Forecast/forecast, forcasted/forecast, forcasted;Foreknow/foreknew/foreknown;Foresee/foresaw/foreseen;Foretell/foretold/foretold;Forget */forgot/forgotten;Forgive/forgave/forgiven;Forsake/forsook/forsaken;Forswear/forswore/forsworn;Freeze */froze/frozen;Gainsay/gainsaid/gainsaid;Get */got/got, gotten;Gild/gilded, gilt/gilded;Gird/girded, girt/girded, girt;Give */gave/given;Go */went/gone;Grave/graved/graven, graved;Grind */ground/ground;Grow */grew/grown;Hamstring/hamstringed, hamstrung/hamstringed, hamstrung;Hang */hung, hanged/hung, hanged;Have/had/had;Hear */heard/heard;Heave/heaved, hove/heaved, hove;Hew/hewed/hewed, hewn;Hide */hid/hidden;Hit */hit/hit;Hold */held/held;Hurt */hurt/hurt;Inlay/inlaid/inlaid;Keep */kept/kept;Kneel */knelt/knelt;Knit/knitted, knit/knitted, knit;Know */knew/known;Lade/laded/laden;Lay */laid/laid;Lead */led/led;Lean/leant, leaned/leant, leaned;Leap/leapt, leaped/leapt, leaped;Learn/learnt, learned/learnt, learned;Leave */left/left;Lend */lent/lent;Let */let/let;Lie */lay/lain;Light */lit, lighted/lit, lighted;Lose */lost/lost;Make */made/made;Mean */meant/meant;Meet */met/met;Melt/melted/melted, molten;Miscast/miscast/miscast;Misdeal/misdealt/misdealt;Misgive/misgave/misgiven;Mislay/mislaid/mislaid;Mislead/misled/misled;Misspell/misspelt/misspelt;Misspend/misspent/misspent;Mistake/mistook/mistaken;Misunderstand/misunderstood/misunderstood;Mow/mowed/mown, mowed;Outbid/outbid/outbid;Outdo/outdid/outdone;Outgo/outwent/outgone;Outgrow/outgrew/outgrown;Outride/outrode/outridden;Outrun/outran/outrun;Outshine/outshone/outshone;Overbear/overbore/overborne;Overcast/overcast/overcast;Overcome/overcame/overcome;Overdo/overdid/overdone;Overhang/overhung/overhung;Overhear/overheard/overheard;Overlay/overlaid/overlaid;Overleap/overleapt, overleaped/overleapt, overleaped;Overlie/overlay/overlain;Override/overrode/overridden;Overrun/overran/overrun;Oversee/oversaw/overseen;Overshoot/overshot/overshot;Oversleep/overslept/overslept;Overtake/overtook/overtaken;Overthrow/overthrew/overthrown;Partake/partook/partaken;Pay */paid/paid;Prove/proved/proved, proven;Put */put/put;Quit/quitted, quit/quitted, quit;Read */read/read;Rebind/rebound/rebound;Rebuild/rebuilt/rebuilt;Recast/recast/recast;Redo/redid/redone;Relay/relaid/relaid;Remake/remade/remade;Rend/rent/rent;Repay/repaid/repaid;Rerun/reran/rerun;Reset/reset/reset;Retell/retold/retold;Rewrite/rewrote/rewritten;Rid/rid, ridded/rid, ridded;Ride */rode/ridden;Ring */rang/rung;Rise */rose/risen;Rive/rived/riven, rived;Run */ran/run;Saw/sawed/sawn, sawed;Say */said/said;See */saw/seen;Seek */sought/sought;Sell */sold/sold;Send */sent/sent;Set */set/set;Sew */sewed/sewn, sewed;Shake */shook/shaken;Shave/shaved/shaved, shaven;Shear/sheared/sheared, shorn;Shed */shed/shed;Shine */shone/shone;Shoe/shod/shod;Shoot */shot/shot;Show */showed/shown, showed;Shrink */shrank, shrunk/shrunk, shrunken;Shrive/shrove, shrived/shriven, shrived;Shut */shut/shut;Sing */sang/sung;Sink */sank/sunk, sunken;Sit */sat/sat;Slay/slew/slain;Sleep */slept/slept;Slide/slid/slid;Sling/slung/slung;Slink/slunk/slunk;Slit/slit/slit;Smell */smelt, smelled/smelt, smelled;Smite/smote/smitten;Sow */sowed/sown, sowed;Speak */spoke/spoken;Speed/sped, speeded/sped, speeded;Spell */spelt, spelled/spelt, spelled;Spend */spent/spent;Spill/spilt, spilled/spilt, spilled;Spin/spun, span/spun;Spit/spat/spat;Split/split/split;Spoil/spoilt, spoiled/spoilt, spoiled;Spread */spread/spread;Spring */sprang/sprung;Stand */stood/stood;Stave/staved, stove/staved, stove;Steal */stole/stolen;Stick */stuck/stuck;Sting/stung/stung;Stink/stank, stunk/stunk;Strew/strewed/strewn, strewed;Stride/strode/stridden;Strike */struck/struck, stricken;String/strung/strung;Strive */strove/striven;Swear */swore/sworn;Sweep */swept/swept;Swell/swelled/swollen, swelled;Swim */swam/swum;Swing */swung/swung;Take */took/taken;Teach */taught/taught;Tear */tore/torn;Tell */told/told;Think */thought/thought;Thrive/throve, thrived/thriven, thrived;Throw */threw/thrown;Thurst */thurst/thurst;Tread */trod/trodden, trod;Unbend/unbent/unbent;Unbind/unbound/unbound;Underbid/underbid/underbid;Undergo/underwent/undergone;Understand/understood/understood;Undertake/undertook/undertaken;Undo/undid/undone;Upset/upset/upset;Wake */woke, waked/woken, waked;Waylay/waylaid/waylaid;Wear */wore/worn;Weave/wove/woven;Weep */wept/wept;Win */won/won;Wind */wound/wound;Withdraw/withdrew/withdrawn;Withhold/withheld/withheld;Withstand/withstood/withstood;Work/worked, wrought/worked, wrought;Wring/wrung/wrung;Write */wrote/written';

// Prepare table rows
let tableRows = '';
let rowCounter = 1;
const words = verbs.split( ';' ); // Convert verbs list into an array

for ( let e of words )
{
	const seg = e.split( '/' );
	tableRows += `
			<tr>
				<td>${ rowCounter++ }</td>
				<td>${ seg[ 0 ] }</td>
				<td data-answer="${ seg[ 1 ] }" contenteditable${ rowCounter === 2 ? ' autofocus' : '' }></td>
				<td data-answer="${ seg[ 2 ] }" contenteditable></td>
				<td>
					<button onclick="checkAnswer( this )">Check</button>
					<button onclick="showAnswer( this )">Learn</button>
					<button onclick="clearAnswer( this )">Clear</button>
				</td>
			</tr>`;
}

// Add table rows to the table
document.querySelector( 'tbody' ).insertAdjacentHTML( 'beforeend', tableRows );


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
} // End of checkAnswer()


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
} // End of showAnswer()


// A function to convert strings into title case
function toTitleCase( str )
{
	return str.replace(
		/\w\S*/g,
		text => text.charAt( 0 ).toUpperCase() + text.substring( 1 ).toLowerCase()
	);
} // End of toTitleCase()
// Source: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript


// A function to clear answers
function clearAnswer( that )
{
	let td1 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 2 ];
	let td2 = that.parentElement.parentElement.querySelectorAll( 'td' )[ 3 ];

	td1.innerText = '';
	td1.style.backgroundColor = '';

	td2.innerText = '';
	td2.style.backgroundColor = '';
} // End of clearAnswer()


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

		for ( let e of [ td1, td2 ] )
		{
			// Find if the user answer matches the correct answer
			let matchedResult = matchAnswer( e.innerText, e.dataset.answer ); // Will return correct, partial or none

			// Set background color and focus based on the matchedResult
			if ( matchedResult === 'correct' )
			{
				e.style.backgroundColor = '#CCFF90'; // Green color
				correctAns++;
			}
			else if ( matchedResult === 'partial' )
			{
				e.style.backgroundColor = 'yellow';
				partialAns++;

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
				wrongAns++;

				// Set focus only if it hasn't been set yet
				if ( focussed === false )
				{
					e.focus();
					focussed = true;
				}
			}
		} // End of for loop
	} // End of first for loop

	setTimeout( () => {
		alert( 'Score\nCorrect: ' + correctAns + ', Partial: ' + partialAns + ', Wrong: ' + wrongAns );
	}, 50 );

} // End of checkAll()


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
} // End of learnAll()


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
} // End of clearAll()


// A function to show/hide less important words
function hideLessImp()
{
	if ( document.querySelectorAll( 'tr' )[ 1 ].style.display === '' )
	{
		// Hide less important words
		for ( let i = 1; i <= 260; i++ )
		{
			if ( document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 1 ].innerText.includes( '*' ) === false )
			{
				document.querySelectorAll( 'tr' )[ i ].style.display = 'none';
			}
		}

		// Set focus
		document.querySelectorAll( 'tr' )[ 5 ].querySelectorAll( 'td' )[ 2 ].focus();

		// Change button text
		document.querySelector( '.toggleLessImp' ).innerText = 'Show Less Important';
	}
	else
	{
		// Show all words
		for ( let i = 1; i <= 260; i++ )
		{
			document.querySelectorAll( 'tr' )[ i ].style.display = '';
		}

		// Set focus
		document.querySelectorAll( 'tr' )[ 1 ].querySelectorAll( 'td' )[ 2 ].focus();

		// Change button text
		document.querySelector( '.toggleLessImp' ).innerText = 'Hide Less Important';
	}
} // End of hideLessImp()


// A function to hide the last column of the table
function hideLastCol()
{
	if ( document.querySelectorAll( 'tr' )[ 0 ].querySelectorAll( 'th' )[ 4 ].style.display === '' )
	{
		document.querySelectorAll( 'tr' )[ 0 ].querySelectorAll( 'th' )[ 4 ].style.display = 'none';
		for ( let i = 1; i <= 260; i++ )
		{
			document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 4 ].style.display = 'none';
		}
		document.querySelector( '.toggleLastCol' ).innerText = 'Show Last Column';
	}
	else if ( document.querySelectorAll( 'tr' )[ 0 ].querySelectorAll( 'th' )[ 4 ].style.display === 'none' )
	{
		document.querySelectorAll( 'tr' )[ 0 ].querySelectorAll( 'th' )[ 4 ].style.display = '';
		for ( let i = 1; i <= 260; i++ )
		{
			document.querySelectorAll( 'tr' )[ i ].querySelectorAll( 'td' )[ 4 ].style.display = '';
		}
		document.querySelector( '.toggleLastCol' ).innerText = 'Hide Last Column';
	}
} // End of hideLastCol()


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

		// Change start button icon
		document.querySelector( '.timerButton' ).title = 'Pause Timer ( Ctrl + , )';
		document.querySelector( '.timerButton' ).innerHTML = '<img src="src/pause-fill.svg">';

		// Turn on the timer
		secCounter = setInterval( updateTimer, 1000 );
	}
	else
	{
		// If the timer is on, turn it off
		timerStat = false;

		// Change start button icon
		document.querySelector( '.timerButton' ).title = 'Start Timer ( Ctrl + , )';
		document.querySelector( '.timerButton' ).innerHTML = '<img src="src/play-fill.svg">';

		// Turn off the timer
		clearInterval( secCounter );
	}
} // End of toggleTimer()

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
} // End of updateTimer()

// A function to reset the timer
function resetTimer()
{
	// Turn off the timer
	clearInterval( secCounter );

	timerStat = false;

	// Change start button icon
	document.querySelector( '.timerButton' ).title = 'Start Timer ( Ctrl + , )';
	document.querySelector( '.timerButton' ).innerHTML = '<img src="src/play-fill.svg">';

	// Reset the value of second and minute
	document.querySelector( '.sec' ).innerText = '00';
	document.querySelector( '.min' ).innerText = '00';
} // End of resetTimer()


// Add shortcut keys for top buttons
let keysPressed = {};

document.addEventListener( 'keydown', ( event ) => {
	keysPressed[ event.key ] = true;

	// Shortcut for 'Check All'
	if ( keysPressed[ 'Control' ] && event.key == 'q' ) {
		checkAll();
	}

	// Shortcut for 'Learn All'
	if ( keysPressed[ 'Control' ] && event.key == 'y' ) {
		learnAll();
	}

	// Shortcut for 'Clear All'
	if ( keysPressed[ 'Control' ] && event.key == 'b' ) {
		clearAll();
	}

	// Shortcut for 'Hide Last Column'
	if ( keysPressed[ 'Control' ] && event.key == 'm' ) {
		hideLastCol();
	}

	// Shortcut for 'Toggle Timer'
	if ( keysPressed[ 'Control' ] && event.key == ',' ) {
		toggleTimer();
	}

	// Shortcut for 'Reset Timer'
	if ( keysPressed[ 'Control' ] && event.key == '.' ) {
		resetTimer();
	}
});

document.addEventListener( 'keyup', ( event ) => {
	delete keysPressed[ event.key ];
});
