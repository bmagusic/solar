AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: 'Avatar Name',
		required: true,
		re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 
		errStr: 'At least one 1 digit, 1 lowercase and 1 uppercase',
	}, {
		_id: 'profession',
		type: 'select',
		displayName: 'Profession',
		select: [
			{
				text: 'Developer',
				value: 'developer'
			}, {
				text: 'Analyst',
				value: 'analyst'
			}, {
				text: 'Designer',
				value: 'designer' 
			} 
		] 
	}
]);