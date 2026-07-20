// app/login/actions.ts
'use server';

export async function loginAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Add your authentication logic here (e.g., calling an API or database)
  console.log('Login attempt:', { email, password });

  // Example: Redirect after success
  // redirect('/dashboard');
}