async function getUsers(names) {
  const users = names.map((name) => {
    const user = fetch(`https://api.github.com/users/${name}`).then(
      (success) => {
        if (success.status !== 200) {
          return null;
        } else {
          return success.json();
        }
      },
      (error) => {
        return null;
      }
    );

    return user;
  });

  return result = await Promise.all(users);
}
