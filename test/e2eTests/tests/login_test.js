
Feature('Login');

//TypeScript Definitions provide autocompletion in Visual Studio Code and other IDEs Definitions were generated in steps.d.ts Load them by adding at the top of a test file:

/// <reference path="./steps.d.ts"/>


//Before(pause);

Scenario('Login successful with admin credentials and logout', async (I, LoginPage, Data) => {
  // Log the user in
	const loginStatus = await LoginPage.login(Data.users.admin);

	// Validate that login was successful
	const dashboardPage = await loginStatus.successful();

  //pause();
	// Log the user out
	const logoutStatus = await dashboardPage.logout();

	// Validate that logout was successful
  logoutStatus.successful();
});

Scenario('Attempt to login with a user that does not have the provider role', async (I, Apis, LoginPage, Data) => {
  // Create a user that does not have the provider role
  I.say("Attempting to add test user to OpenMRS database...");

  // eslint-disable-next-line angular/log
	await Apis.user.create(Data.users.nonProvider).catch(error => console.error("OpenMRS API: ", error.message));

	// Attempt to log the user in
	const loginStatus = LoginPage.login(Data.users.nonProvider);

  // TODO: Make strings dependant on locale
  // eslint-disable-next-line angular/log
  await loginStatus.unsuccessful("Não estás configurado como provedor. Por favor, contacte o administrador.").catch(error => console.error("Step Error: ", error.message));
});

//.fails()?
Scenario('Login failed with invalid username', async (I, LoginPage, Data) => {
	const loginStatus = LoginPage.login(Data.users.invalidUsername);
  // eslint-disable-next-line angular/log
  await loginStatus.unsuccessful("A autenticação falhou. Por favor, tente novamente").catch(error=> console.error("Step Error: ",error));
});

Scenario('Login failed with invalid password', async (I, LoginPage, Data) => {
  const loginStatus = LoginPage.login(Data.users.invalidPassword);
  // eslint-disable-next-line angular/log
	await loginStatus.unsuccessful("A autenticação falhou. Por favor, tente novamente").catch(error=>console.error("Step Error: ",error));
});

/*Scenario('Login failed with invalid default locale', async (I, Apis, LoginPage, Data) => {
	// Create a user with an invalid default locale
	const invalidLocationUser = await Apis.user.create(Data.users.invalidDefaultLocation)

	await Apis.provider.create(Data.providers.generateJsonFromUser(invalidLocationUser))

	const loginStatus = LoginPage.login(Data.users.invalidDefaultLocation)
	loginStatus.unsuccessful("A localização pre-definida não foi configurada. Por favor, contacte o administrador do sistema.")
})*/


//After(actor: I)
After((I) => {
});
