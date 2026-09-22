package runners;

import com.intuit.karate.junit5.Karate;

class ApiTest {
    @Karate.Test
    Karate run() {
        return Karate.run("classpath:features");
    }
}
