updateUserName(displayName) {
	const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to update username');
      return Promise.reject('User not signed in: unable to update username');
    }
	
	return currentUser.updateProfile({
		displayName
	});
},