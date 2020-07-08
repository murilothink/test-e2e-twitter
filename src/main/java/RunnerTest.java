import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = "src/main/java/",
            plugin = {"pretty", "html:target/reports-html" },
            tags = {"~@ignore"},
            snippets = SnippetType.CAMELCASE,
            dryRun = false,
            strict = true
    )

    public class RunnerTest {

    }


