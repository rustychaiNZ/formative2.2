// Array of objects
var fencer = [
	// First member of the club
	{
		id: 101,
		firstName: 'Janet',
		lastName: 'HIGH',
		weapon: ['Foil', 'blank'],
		age: 8,
		gender: 'female',
		fencerEmail: 'janetehigh@jourrapide.com',
		fencerNumber: '022 225 8982',
		emergencyNumber: '027 895 6875'
	},
	{
		id: 102,
		firstName: 'Gregory',
		lastName: 'EDENS',
		weapon: ['Sabre', 'blank'],
		age: 26,
		gender: 'Male',
		fencerEmail: 'gregoryaedens@jourrapide.com',
		fencerNumber: '020 692 6891',
		emergencyNumber: '027 596 8423'
	},
	{
		id: 103,
		firstName: 'James',
		lastName: 'GABLE',
		weapon: ['Epee', 'blank'],
		age: 24,
		gender: 'Male',
		fencerEmail: 'JamesTGable@rhyta.com',
		fencerNumber: '028 016 6723',
		emergencyNumber: '027 456 8923'
	},
	{
		id: 104,
		firstName: 'Una',
		lastName: 'HAJEK',
		weapon: ['Foil', 'blank'],
		age: 12,
		gender: 'Female',
		fencerEmail: 'UnaJHajek@teleworm.us',
		fencerNumber: '026 932 9641',
		emergencyNumber: '022 897 5687'
	},
	{
		id: 105,
		firstName: 'Ruth',
		lastName: 'REGAN',
		weapon: ['Sabre', 'blank'],
		age: 20,
		gender: 'Female',
		fencerEmail: 'RuthRRegan@jourrapide.com',
		fencerNumber: '022 195 9827',
		emergencyNumber: '021 568 7892'
	},
	{
		id: 106,
		firstName: 'Gary',
		lastName: 'ARIAS',
		weapon: ['Foil', 'blank'],
		age: 10,
		gender: 'Male',
		fencerEmail: 'GaryJArias@teleworm.us',
		fencerNumber: '029 867 8633',
		emergencyNumber: '022 568 7896'
	},
	{
		id: 107,
		firstName: 'Nicole',
		lastName: 'SHEA',
		weapon: ['Epee', 'blank'],
		age: 8,
		gender: 'Female',
		fencerEmail: 'NicoleKShea@jourrapide.com',
		fencerNumber: '029 362 9089',
		emergencyNumber: '022 578 4562'
	},
	{
		id: 108,
		firstName: 'Garry',
		lastName: 'BORDON',
		weapon: ['Foil', 'blank'],
		age: 19,
		gender: 'Male',
		fencerEmail: 'GarryDBorden@dayrep.com',
		fencerNumber: '021 708 1235',
		emergencyNumber: '022 892 4568'
	},
	{
		id: 109,
		firstName: 'Jamie',
		lastName: 'DAY',
		weapon: ['Epee', 'blank'],
		age: 16,
		gender: 'Female',
		fencerEmail: 'JaimeGDay@jourrapide.com',
		fencerNumber: '029 873 2675',
		emergencyNumber: '021 895 5987'
	},
	{
		id: 110,
		firstName: 'Nick',
		lastName: 'BAILY',
		weapon: ['Sabre', 'blank'],
		age: 14,
		gender: 'Male',
		fencerEmail: 'NickPBailey@armyspy.com',
		fencerNumber: '021 246 4452',
		emergencyNumber: '022 596 5687'
	},
	{
		id: 111,
		firstName: 'Michael',
		lastName: 'GLOVER',
		weapon: ['Foil', 'blank'],
		age: 15,
		gender: 'Male',
		fencerEmail: 'MichaelCGlover@armyspy.com',
		fencerNumber: '021 997 4744',
		emergencyNumber: '021 567 5621'
	},
	{
		id: 112,
		firstName: 'Jennifer',
		lastName: 'SHIELDS',
		weapon: ['Sabre', 'blank'],
		age: 12,
		gender: 'Female',
		fencerEmail: 'JenniferLShields@dayrep.com',
		fencerNumber: '022 610 5749',
		emergencyNumber: '021 895 4568'
	},
	{
		id: 113,
		firstName: 'Laura',
		lastName: 'JONES',
		weapon: ['Epee', 'blank'],
		age: 18,
		gender: 'Female',
		fencerEmail: 'LauraWJones@rhyta.com',
		fencerNumber: '020 026 9764',
		emergencyNumber: '022 489 6578'
	},
	{
		id: 114,
		firstName: 'Jarrett',
		lastName: 'JOHNSON',
		weapon: ['Sabre', 'blank'],
		age: 11,
		gender: 'Male',
		fencerEmail: 'JarrettPJohnson@jourrapide.com',
		fencerNumber: '022 187 9131',
		emergencyNumber: '022 657 8956'
	},
	{
		id: 115,
		firstName: 'David',
		lastName: 'ROBBS',
		weapon: ['Epee', 'blank'],
		age: 14,
		gender: 'Male',
		fencerEmail: 'DavidRRobbs@armyspy.com',
		fencerNumber: '022 527 9886',
		emergencyNumber: '027 568 7892'
	},
];
// Variable used to store minimum age in filtered range
var minimumAge = 0;
// Variable used to store the maximum age in filtered range
var maximumAge = 99;
// Variable used to store the correct weapon in filtered range
var weaponSelected = 'blank';

// Function to clear printed table
function clear(){
	document.getElementById('registryResults').innerHTML = '';
}
function clearField(){
	document.getElementById('firstName').value = '';
	document.getElementById('lastName').value = '';
	document.getElementById('age').value = '';
	document.getElementById('genderSelect').value = 1;
	document.getElementById('fencerEmail').value = '';
	document.getElementById('fencerNumber').value = '';
	document.getElementById('emergencyNumber').value = '';
	document.getElementById('fencerWeapon').value = 1; 
}

// Function that writes appropriate information to results table
function writeFencers(){
	document.getElementById('registryResults').innerHTML += 
	'<tr>' +
		'<td id="' + fencer[i].id + '" class="member-popup" >' + fencer[i].lastName + ', ' + fencer[i].firstName + '</td>' +
		'<td>' + fencer[i].age + '</td>' +
		'<td>' + fencer[i].weapon[0] + '</td>' +
	'</tr>';
}

// Writes fencer's info for filters
	/*
		* The first loop looks at what weapon that the fencer users
		* The second loop looks through all of the members in the list
		* If the filter applies to the fencer, the correct information will be displayed
		* If no weapon has been selected, the second weapon a fencer could patisipate in is 'blank' which allows all of the fencers that meet the other filters to be displayed
	*/
function writeFilterFencerInfo(){
	for(j=0; j < 2; j++){
		for(i=0; i < fencer.length; i++){
			if((fencer[i].age >= minimumAge) && (fencer[i].age <= maximumAge) && (fencer[i].weapon[j] === weaponSelected)){
				writeFencers();
			}
		}
	}
}

// Writes fencer's info to a modal
function writeFencerInfo(){
	document.getElementById('memberInfoModal').innerHTML = 
	'<div class="row modal-data">' +
		// Personal details, Name(first and last), Age, Gender and Weapon
		'<div class="col-md-6">' +
			'<h3>Name</h3>' +
			'<p class="modal-para">' + fencer[i].lastName + ', ' + fencer[i].firstName + 
			'<h3>Age</h3>' +
			'<p class="modal-para">' + fencer[i].age + ' years old' +
			'<h3>Gender</h3>' +
			'<p class="modal-para">' + fencer[i].gender +
			'<h3>Weapon</h3>' + 
			'<p class="modal-para">' + fencer[i].weapon[0] + 
		'</div>' +
		// Contact information, Fencer's email, fencer's number, emergency number
		'<div class="col-md-6">' +
			'<h3 class="r-align">Fencer\'s Email</h3>' + 
			'<p class="modal-para r-align">' + fencer[i].fencerEmail + '</p>' +
			'<h3 class="r-align">Fencer\'s Number</h3>' +
			'<p class="modal-para r-align">' + fencer[i].fencerNumber + '</p>' +
			'<h3 class="r-align">Emergency Number</h3>' + 
			'<p class="modal-para r-align">' + fencer[i].emergencyNumber + '<p>' +
		'</div>' +
	'</div>';
}

// --- Modals ---
/*
	* There are 2 different modals being used by the site
	* The first modal allows the user to be able to view all of the information in the fencer object
	* The second modal allows the user to be able to temporairly add a new user to the array 
*/

// Function to open the member modal
function openMemberInfo(){
	// Shows my custom modal of any particular member that the user clicks on 
	$('.member-popup').on('click', function(){
		// Shows the id of the fencer that was clicked in the console, used for trouble shooting 
		console.log(this.id);
		// Reveals the modal that the information is going to be shown in 
		$('.member-modal').show();
		for(i=0; i<fencer.length; i++) {
			// This looks at the id defined and checksfor equivalence with the fencer's id that was clicked. It will dispaly the information
			if(this.id == fencer[i].id) {
				// Prints the fencer that was clicked into the modal with the correlating information
				writeFencerInfo();
			}
		}
	});

	// This allows the user to be able to close the modal by hitting the 'x' in the top right of the modal
	$('.close-bar').on('click', function() {
		// Used for trouble shooting to make sure that the button press was being recorded
		console.log('Close Modal');
		// Hides the modal on clicking the button
		$('.member-modal').hide();
		// When the modal is hidden, we want to remain at the top of the scroll position
		document.body.style.position = '';
	});
	// Close the modal clicking the close button
	$('#closeFencerInfo').on('click', function() {
		$('.member-modal').hide();
	});
}

// Function to open the add a new member modal
function openAddNewMember(){
	$('#addNewMemberBtn').on('click', function(){
		$('.add-member-modal').show();
	});
}
openAddNewMember();
function closeAddNewMember(){
	$('.close-bar').on('click', function(){
		$('.add-member-modal').hide();
	});
	$('#addMemberToRegistryBtn').on('click', function(){
		$('add-member-modal').hide();
	});
}
closeAddNewMember();
// Function to open and close modal ends

var fencerNewGender = '';
var fencerNewWeapon = '';
// Function that will take the fields that have been inputted and add them to the array
document.getElementById('addMemberToRegistryBtn').addEventListener('click', function(){
	// Takes users input for first name and stores it
	var fencerFirstName = document.getElementById('firstName').value;
	// Checks to see if the user has inputted anything into the name field
	if(fencerFirstName == ''){
		alert('The Member must have a first name');
		// won't let the form select if nothing has been entered 
		return false;
	}
	// Takes the user input for last name and stores it in a variable
	var fencerLastName = document.getElementById('lastName').value;
	// Checks to see if the user has inputted anything into the field
	if(fencerLastName == ''){
		alert('The Member must have a last name');
		return false;
	}
	// Converts surname into upper case
	var fencerSurname = fencerLastName.toUpperCase();
	// Takes the user's input for age and stores it in the variable
	var fencerAge = parseInt(document.getElementById('age').value);
	// Checks to make sure that the user has submitted a number
	if(isNaN(fencerAge)){
		alert('The Member must have an age');
		return false;
	}
	// Takes the user input for gender
	var fencerGender = document.getElementById('genderSelect').value;
	// If the user hasn't selected a gender yet, doesn't allow form to be submitted
	if(fencerGender == 1){
		alert('Must select a gender');
		return false;
	}
	// If the user selects 'Male', it is saved to a new variable to be inputted into the object
	else if(fencerGender == 2){
		fencerNewGender = 'Male';
	} else if(fencerGender == 3){ // If the user inputs femaile, it is saved to a new variable and inputted into the object
		fencerNewGender = 'Female';
	}
	// Takes the user input for email and stores it in the variable
	var fencersEmail = document.getElementById('fencerEmail').value;
	// If the user hasn't entered anything, doesn't allow the form to be submitted
	if(fencersEmail == ''){
		alert('The Member must have an email');
		return false;
	}
	// Takes the user input for fencer's phone number and stores it in the variable
	var fencersNumber = document.getElementById('fencerNumber').value;
	// If the user hasn't inputted anything into the field, doesn't allow the form to be submitted
	if(fencersNumber == ''){
		alert('The Member must have a phone number');
		return false;
	}
	// Takes the user's input for fencer's emergency contact number and store it in the variable
	var emergencyContact = document.getElementById('emergencyNumber').value;
	// If the user hasn't inputted anything into the field, doesn't allow the form to be submitted
	if(emergencyContact == ''){
		alert('The Member must have an emergency phone number');
		return false;
	}
	// Takes the user's input for for
	var fencerChosenWeapon = document.getElementById('fencerWeapon').value;
	if(fencerGender == 1){
		alert('Must select a weapon');
		return false;
	}
	if(fencerChosenWeapon == 2){
		fencerNewWeapon = 'Foil';
	} else if(fencerChosenWeapon == 3){
		fencerNewWeapon = 'Sabre';
	} else if(fencerChosenWeapon == 4){
		fencerNewWeapon = 'Epee';
	}
	// Generates a new ID for the member. Looks at all of the exsisting members in the array and adds 101 to give them their new ID
	var newID = fencer.length + 101;
	// Adds the new fencer to the array
	fencer.push({
		id: newID,
		firstName: fencerFirstName,
		lastName: fencerSurname,
		weapon: [fencerNewWeapon, 'blank'],
		age: fencerAge,
		gender: fencerNewGender,
		fencerEmail: fencersEmail,
		fencerNumber: fencersNumber,
		emergencyNumber: emergencyContact
	});
	// Clears all of the fields after entering in all details
	clearField();
	writeFencers();
	openMemberInfo();
});

// --- Filters that can be applied to the array to find age range and weapon fenced ---

// Function to apply a weapons filter
function filterWeaponSelect(){
	// Takes value from weapon select 
	var filteredWeapon = document.getElementById('weaponSelect').value;
	clear();
	// No weapon is selected
	if(filteredWeapon == 1){
		weaponSelected = 'blank';
	} 
	// Foil filter
	else if(filteredWeapon == 2){
		weaponSelected = 'Foil';
	} 
	// Sabre Filter
	else if(filteredWeapon == 3){
		weaponSelected = 'Sabre';
	} 
	// Epee filter
	else if(filteredWeapon == 4) {
		weaponSelected = 'Epee';
	}
	writeFilterFencerInfo();
	openMemberInfo();
}

// Function to apply minmin age filter
function minAgeFilter(){
	// takes value from min age select
	var minAge = document.getElementById('minAgeSelector').value;
	clear();
	// No min age selected
	if(minAge == 1){
		minimumAge = 0;
	}
	// Older than U9
	else if(minAge == 2){
		minimumAge = 9;
	}
	// Older than U11
	else if(minAge == 3){
		minimumAge = 11;
	}
	// Older than U13
	else if(minAge == 4){
		minimumAge = 13;
	}
	// Older than U15
	else if(minAge == 5){
		minimumAge = 15;
	}
	// Older than U17
	else if(minAge == 6){
		minimumAge = 17;
	}
	// Older than U20
	else if(minAge == 7){
		minimumAge = 20;
	}
	writeFilterFencerInfo();
	openMemberInfo();
}

// function to apply a max age filter
function maxAgeFilter(){
	// takes value from max age select
	var maxAge = document.getElementById('maxAgeSelector').value;
	clear();
	// No max age selected
	if(maxAge == 1){
		maximumAge = 99;
	}
	// Older than U9
	else if(maxAge == 2){
		maximumAge = 9;
	}
	// Older than U11
	else if(maxAge == 3){
		maximumAge = 11;
	}
	// Older than U13
	else if(maxAge == 4){
		maximumAge = 13;
	}
	// Older than U15
	else if(maxAge == 5){
		maximumAge = 15;
	}
	// Older than U17
	else if(maxAge == 6){
		maximumAge = 17;
	}
	// Older than U20
	else if(maxAge == 7){
		maximumAge = 20;
	}
	writeFilterFencerInfo();
	openMemberInfo();
}

// Resets filter options
function resetWeaponFilter(){
	document.getElementById('weaponSelect').value = 1;
}
function resetMinAgeFilter(){
	document.getElementById('minAgeSelector').value = 1;
}
function resetMaxAgeFilter(){
	document.getElementById('maxAgeSelector').value = 1;
}

// Button clickable to reveal all members in the registry 
document.getElementById('allFencerBtn').addEventListener('click', function(){
	// Clears table upon pressing button
	clear();
	// Adds table heading
	// Loops through all fencers in array
	for(i=0; i < fencer.length; i++){
		writeFencers();
	}
	resetWeaponFilter();
	resetMinAgeFilter();
	resetMaxAgeFilter();
	maximumAge = 99;
	minimumAge = 0;
	weaponSelected = 'blank';
	openMemberInfo();
});

// --- Adding sort icons when sorting alphabetically
// Begins by hiding the ascending and descending icons
$('#sortDescAlphabeticalBtn').hide();
$('#sortAscAlphabeticalBtn').hide();
// When the sort button is pressed, the ascending icon is displayed
$('#sortAlphabeticalBtn').on('click', function(){
	$('#sortAlphabeticalBtn').hide();
	$('#sortAscAlphabeticalBtn').show();
});
// When the ascending icon is pressed, the descending icon is displayed
$('#sortAscAlphabeticalBtn').on('click', function(){
	$('#sortAscAlphabeticalBtn').hide();
	$('#sortDescAlphabeticalBtn').show();
});
// When the descending icon is pressed, the ascending icon is displayed
$('#sortDescAlphabeticalBtn').on('click', function(){
	$('#sortDescAlphabeticalBtn').hide();
	$('#sortAscAlphabeticalBtn').show();
});
// When the all fencer button is pressed, the alphabetical order is shuffled so the button is returned to its default state
$('#allFencerBtn').on('click', function(){
	$('#sortAscAlphabeticalBtn').hide();
	$('#sortDescAlphabeticalBtn').hide();
	$('#sortAlphabeticalBtn').show();
});
// When the min age is selected is pressed, the alphabetical order is shuffled so the button is returned to its default state
$('#minAgeSelector').on('click', function(){
	$('#sortAscAlphabeticalBtn').hide();
	$('#sortDescAlphabeticalBtn').hide();
	$('#sortAlphabeticalBtn').show();
});
// When the max age is selected is pressed, the alphabetical order is shuffled so the button is returned to its default state
$('#maxAgeSelector').on('click', function(){
	$('#sortAscAlphabeticalBtn').hide();
	$('#sortDescAlphabeticalBtn').hide();
	$('#sortAlphabeticalBtn').show();
});
// When the weapon selecect is pressed, the alphabetical order is shuffled so the button is returned to its default state
$('#weaponSelect').on('click', function(){
	$('#sortAscAlphabeticalBtn').hide();
	$('#sortDescAlphabeticalBtn').hide();
	$('#sortAlphabeticalBtn').show();
});

// Toggleble heading to sort by name of fencers
function sortTableAlphabetical(n){
	// All of the variables being declared at the start
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	// Adds the table output to a variable
	table = document.getElementById('memberTable');
	switching = true;
	// Set the sorting direction to ascending:
	dir = "asc";
	// Make a loop that will continue until no switching has been done:
	while(switching){
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		// Loop through all table rows (except the first, which contains table headers):
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			//Get the two elements you want to compare, one from current row and one from the next:
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			// Check if the two rows should switch place, based on the direction, asc or desc:
			if(dir == 'asc'){
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				//if so, mark as a switch and break the loop:
				shouldSwitch= true;
				break;
				}
			} else if (dir == "desc"){
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch){
			//If a switch has been marked, make the switch and mark that a switch has been done:
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchcount ++;
		} else {
			// If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
			if (switchcount == 0 && dir == "asc"){
				dir = "desc";
				switching = true;
			}
		}
	}
}





























