// Array of objects
var fencer = [
	// First member of the club
	{
		id: 'f001',
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
		id: 'f002',
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
		id: 'f003',
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
		id: 'f004',
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
		id: 'f005',
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
		id: 'f006',
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
		id: 'f007',
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
		id: 'f008',
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
		id: 'f009',
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
		id: 'f010',
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
		id: 'f011',
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
		id: 'f012',
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
		id: 'f013',
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
		id: 'f014',
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
		id: 'f015',
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
		'<td>' + fencer[i].lastName + ', ' + fencer[i].firstName + '</td>' +
		'<td>' + fencer[i].age + '</td>' +
		'<td>' + fencer[i].weapon[0] + '</td>' +
	'</tr>';
}

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
	for(j=0; j < 1; j++){
		for(i=0; i < fencer.length; i++){
			if((fencer[i].age >= minimumAge) && (fencer[i].age <= maximumAge) && (fencer[i].weapon[j] === weaponSelected)){
				writeFencers();
			}
		}
	}
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
	for(j=0; j < 1; j++){
		for(i=0; i < fencer.length; i++){
			if((fencer[i].age >= minimumAge) && (fencer[i].age <= maximumAge) && (fencer[i].weapon[j] === weaponSelected)){
				writeFencers();
			}
		}
	}
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
	for(j=0; j < 1; j++){
		for(i=0; i < fencer.length; i++){
			if((fencer[i].age >= minimumAge) && (fencer[i].age <= maximumAge) && (fencer[i].weapon[j] === weaponSelected)){
				writeFencers();
			}
		}
	}
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
});



