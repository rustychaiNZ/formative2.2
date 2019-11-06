// Array of objects
var fencer = [
	// First member of the club
	{
		id: 'f101',
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
		id: 'f102',
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
		id: 'f103',
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
		id: 'f104',
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
		id: 'f105',
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
		id: 'f106',
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
		id: 'f107',
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
		id: 'f108',
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
		id: 'f109',
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
		id: 'f110',
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
		id: 'f111',
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
		id: 'f112',
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
		id: 'f113',
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
		id: 'f114',
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
		id: 'f115',
		firstName: 'David',
		lastName: 'ROBBS',
		weapon: ['Epee', 'blank'],
		age: 14,
		gender: 'Male',
		fencerEmail: 'DavidRRobbs@armyspy.com',
		fencerNumber: '022 527 9886',
		emergencyNumber: '027 568 7892'
	},

]
// Variable used to store minimum age in filtered range
var minimumAge = 0;
// Variable used to store the maximum age in filtered range
var maximumAge = 99;
// Variable used to store the correct weapon in filtered range
var weaponSelected = 'blank';
// Sets id so that the user is able to click on a member's name for a modal to pop up
var id = 101;

// Function to clear printed table
function clear(){
	document.getElementById('registryResults').innerHTML = '';
}

// Creating table heading
function tableHeading(){
	document.getElementById('registryResults').innerHTML += 
	'<thead class="thead-dark">' +
		'<tr>' +
			'<th>Name</th>' + 
			'<th>Age</th>' +
			'<th>Weapon</th>' +
		'</tr>' +
	'</thead>';
}

// Function that writes appropriate information to results table
function writeFencers(){
	document.getElementById('registryResults').innerHTML += 
	'<tr>' +
		'<td id="f' + id.toString() + '" class="member-popup" >' + fencer[i].lastName + ', ' + fencer[i].firstName + '</td>' +
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
		console.log('it worked!');
		// Reveals the modal that the information is going to be shown in 
		$('.member-modal-info').show();
		for(i=0; i<fencer.length; i++) {
			// This looks at the id defined and checksfor equivalence with the fencer's id that was clicked. It will dispaly the information
			if(this.id.trim() == fencer[i].id.trim()) {
				// Prints the dog that was clicked into the modal with the correlating information
				writeFencerInfo();
			}
		}
	});

	// This allows the user to be able to close the modal by hitting the 'x' in the top right of the modal
	$('.close-bar').on('click', function() {
		// Used for trouble shooting to make sure that the button press was being recorded
		console.log('Close Modal');
		// Hides the modal on clicking the button
		$('.member-modal-info').hide();
	});
}

// Writes fencer's info to a modal
function writeFencerInfo(){
	document.getElementById('memberInfoModal').innerHTML = 
	'<div class="row modal-data">' +
		// Personal details, Name(first and last), Age, Gender and Weapon
		'<div class="col-6">' +
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
		'<div class="col-6">' +
			'<h3 class="r-align">Fencer\'s Email</h3>' + 
			'<p class="modal-para r-align">' + fencer[i].fencerEmail + '</p>' +
			'<h3 class="r-align">Fencer\'s Number</h3>' +
			'<p class="modal-para r-align">' + fencer[i].fencerNumber + '</p>' +
			'<h3 class="r-align">Emergency Number</h3>' + 
			'<p class="modal-para r-align">' + fencer[i].emergencyNumber + '<p>' +
		'</div>' +
	'</div>'
}

for(i=0; i<fencer.length; i++){
	writeFencers();
	openMemberInfo();
}


// --- Filters that can be applied to the array to find age range and weapon fenced ---

// Function to apply a weapons filter
function filterWeaponSelect(){
	// Takes value from weapon select 
	var filteredWeapon = document.getElementById('weaponSelect').value;

	clear();
	tableHeading();
	
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
}

// Function to apply minmin age filter
function minAgeFilter(){
	// takes value from min age select
	var minAge = document.getElementById('minAgeSelector').value;

	clear();
	tableHeading();

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
}

// function to apply a max age filter
function maxAgeFilter(){
	// takes value from max age select
	var maxAge = document.getElementById('maxAgeSelector').value;

	clear();
	tableHeading();

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
	tableHeading();
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










































