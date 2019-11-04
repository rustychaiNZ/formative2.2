// Array of objects
var fencer = [
	// First member of the club
	{
		id: 'f001',
		firstName: 'Janet',
		lastName: 'High',
		weapon: 'Foil',
		age: 8,
		gender: 'female',
		fencerEmail: 'janetehigh@jourrapide.com',
		fencerNumber: '022 225 8982',
		emergencyNumber: '027 895 6875'
	},
	{
		id: 'f002',
		firstName: 'Gregory',
		lastName: 'Edens',
		weapon: 'Sabre',
		age: 26,
		gender: 'Male',
		fencerEmail: 'gregoryaedens@jourrapide.com',
		fencerNumber: '020 692 6891',
		emergencyNumber: '027 596 8423'
	},
	{
		id: 'f003',
		firstName: 'James',
		lastName: 'Gable',
		weapon: 'Epee',
		age: 24,
		gender: 'Male',
		fencerEmail: 'JamesTGable@rhyta.com',
		fencerNumber: '028 016 6723',
		emergencyNumber: '027 456 8923'
	},
	{
		id: 'f004',
		firstName: 'Una',
		lastName: 'Hajek',
		weapon: 'Foil',
		age: 12,
		gender: 'Female',
		fencerEmail: 'UnaJHajek@teleworm.us',
		fencerNumber: '026 932 9641',
		emergencyNumber: '022 897 5687'
	},
	{
		id: 'f005',
		firstName: 'Ruth',
		lastName: 'Regan',
		weapon: 'Sabre',
		age: 20,
		gender: 'Female',
		fencerEmail: 'RuthRRegan@jourrapide.com',
		fencerNumber: '022 195 9827',
		emergencyNumber: '021 568 7892'
	},
	{
		id: 'f006',
		firstName: 'Gary',
		lastName: 'Arias',
		weapon: 'Foil',
		age: 10,
		gender: 'Male',
		fencerEmail: 'GaryJArias@teleworm.us',
		fencerNumber: '029 867 8633',
		emergencyNumber: '022 568 7896'
	},
	{
		id: 'f007',
		firstName: 'Nicole',
		lastName: 'Shea',
		weapon: 'Epee',
		age: 8,
		gender: 'Female',
		fencerEmail: 'NicoleKShea@jourrapide.com',
		fencerNumber: '029 362 9089',
		emergencyNumber: '022 578 4562'
	},
	{
		id: 'f008',
		firstName: 'Garry',
		lastName: 'Borden',
		weapon: 'Foil',
		age: 19,
		gender: 'Male',
		fencerEmail: 'GarryDBorden@dayrep.com',
		fencerNumber: '021 708 1235',
		emergencyNumber: '022 892 4568'
	},
	{
		id: 'f009',
		firstName: 'Jamie',
		lastName: 'Day',
		weapon: 'Epee',
		age: 16,
		gender: 'Female',
		fencerEmail: 'JaimeGDay@jourrapide.com',
		fencerNumber: '029 873 2675',
		emergencyNumber: '021 895 5987'
	},
	{
		id: 'f010',
		firstName: 'Nick',
		lastName: 'Bailey',
		weapon: 'Sabre',
		age: 14,
		gender: 'Male',
		fencerEmail: 'NickPBailey@armyspy.com',
		fencerNumber: '021 246 4452',
		emergencyNumber: '022 596 5687'
	},
	{
		id: 'f011',
		firstName: 'Michael',
		lastName: 'Glover',
		weapon: 'Foil',
		age: 15,
		gender: 'Male',
		fencerEmail: 'MichaelCGlover@armyspy.com',
		fencerNumber: '021 997 4744',
		emergencyNumber: '021 567 5621'
	},
	{
		id: 'f012',
		firstName: 'Jennifer',
		lastName: 'Shields',
		weapon: 'Sabre',
		age: 12,
		gender: 'Female',
		fencerEmail: 'JenniferLShields@dayrep.com',
		fencerNumber: '022 610 5749',
		emergencyNumber: '021 895 4568'
	},
	{
		id: 'f013',
		firstName: 'Laura',
		lastName: 'Jones',
		weapon: 'Epee',
		age: 18,
		gender: 'Female',
		fencerEmail: 'LauraWJones@rhyta.com',
		fencerNumber: '020 026 9764',
		emergencyNumber: '022 489 6578'
	},
	{
		id: 'f014',
		firstName: 'Jarrett',
		lastName: 'Johnson',
		weapon: 'Sabre',
		age: 11,
		gender: 'Male',
		fencerEmail: 'JarrettPJohnson@jourrapide.com',
		fencerNumber: '022 187 9131',
		emergencyNumber: '022 657 8956'
	},
	{
		id: 'f015',
		firstName: 'David',
		lastName: 'Robbs',
		weapon: 'Epee',
		age: 14,
		gender: 'Male',
		fencerEmail: 'DavidRRobbs@armyspy.com',
		fencerNumber: '022 527 9886',
		emergencyNumber: '027 568 7892'
	},

]

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
		'<td>' + fencer[i].firstName + ' ' + fencer[i].lastName + '</td>' +
		'<td>' + fencer[i].age + '</td>' +
		'<td>' + fencer[i].weapon + '</td>' +
	'</tr>';
}

// Function to apply a weapons filter
function filterWeaponSelect(){
	// Takes value from weapon select 
	var filteredWeapon = document.getElementById('weaponSelect').value;
	
	// No weapon is selected
	if(filteredWeapon == 1){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			writeFencers();
		}
	} 
	// Foil filter
	else if(filteredWeapon == 2){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			// Displays all members who do foil
			if(fencer[i].weapon == 'Foil'){
				writeFencers();
			}
		}
	} 
	// Sabre Filter
	else if(filteredWeapon == 3){
		clear();
		tableHeading()
		for(i=0; i < fencer.length; i++){
			// Displays all members who do Sabre
			if(fencer[i].weapon == 'Sabre'){
				writeFencers();
			}
		}
	} 
	// Epee filter
	else if(filteredWeapon == 4) {
		clear();
		tableHeading()
		for(i=0; i < fencer.length; i++){
			// Displays all members who do Epee
			if(fencer[i].weapon == 'Epee'){
				writeFencers();
			}
		}
	}
}

// Function to apply minmin age filter
function minAgeFilter(){
	// takes value from min age select
	var minAge = document.getElementById('minAgeSelector').value;

	// No min age selected
	if(minAge == 1){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			writeFencers();
		}
		filterWeaponSelect();
	}
	// Older than U9
	else if(minAge == 2){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age >= 9){
				writeFencers();
			}
		}
	}
	// Older than U11
	else if(minAge == 3){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age >= 11){
				writeFencers();
			}
		}
	}
	// Older than U13
	else if(minAge == 4){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age >= 13){
				writeFencers();
			}
		}
	}
	// Older than U15
	else if(minAge == 5){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age >= 15){
				writeFencers();
			}
		}
	}
	// Older than U17
	else if(minAge == 6){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age >= 17){
				writeFencers();
			}
		}
	}
	// Older than U20
	else if(minAge == 7){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age >= 20){
				writeFencers();
			}
		}
	}
}

// function to apply a max age filter
function maxAgeFilter(){
	// takes value from max age select
	var maxAge = document.getElementById('maxAgeSelector').value;

	// No max age selected
	if(maxAge == 1){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			writeFencers();
		}
		filterWeaponSelect();
	}
	// Older than U9
	else if(maxAge == 2){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age <= 9){
				writeFencers();
			}
		}
	}
	// Older than U11
	else if(maxAge == 3){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age <= 11){
				writeFencers();
			}
		}
	}
	// Older than U13
	else if(maxAge == 4){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age <= 13){
				writeFencers();
			}
		}
	}
	// Older than U15
	else if(maxAge == 5){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age <= 15){
				writeFencers();
			}
		}
	}
	// Older than U17
	else if(maxAge == 6){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age <= 17){
				writeFencers();
			}
		}
	}
	// Older than U20
	else if(maxAge == 7){
		clear();
		tableHeading();
		for(i=0; i < fencer.length; i++){
			if(fencer[i].age <= 20){
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
});



