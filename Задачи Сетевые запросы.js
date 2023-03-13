async function getUsers(names) {
    let accs = [];
    for (let name of names) {
        let acc = fetch(`https://api.github.com/users/${name}`).then(
            success => {
                if (success.status != 200) {
                    return null;
                } else {
                    return success.json();
                }
            },
            fail => {
                return null;
            }
        );
     accs.push(acc);
    }
    let results = await Promise.all (accs);
    return results;
}

describe("getUsers", function () {
    it("gets users from GitHub", async function () {
        let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
        assert.equal(users[0].login, 'iliakan');
        assert.equal(users[1].login, 'remy');
        assert.equal(users[2], null);
    });

});
