function fn() {
    return {
        baseUrl: karate.properties['baseUrl'] || 'https://restful-booker.herokuapp.com',
        username: karate.properties['username'] || 'admin',
        password: karate.properties['password'] || 'password123'
    };
}
