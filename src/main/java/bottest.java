import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.awt.*;
import java.awt.event.InputEvent;
import java.lang.ref.SoftReference;

public class bottest {

    private WebDriver driver;
    private Robot robot;


    @Dado("^que o usuario abre o twitter para fazer login$")
    public void queOUsuarioAbreOTwitter() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "/home/murilohg/Drivers/version81chrome/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://twitter.com/login");
    }

    @Dado("^e coloca o usuario (.*)")
    public void eColocaOUsuario(String arg1) throws Throwable {
        driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/form/div/div[1]/label/div/div[2]/div/input")).sendKeys(arg1);
    }

    @Dado("^a senha (.*)")
    public void aSenha(String arg1) throws Throwable {
        driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/form/div/div[2]/label/div/div[2]/div/input")).sendKeys(arg1);
    }

//    @Dado("^caso o acesso de erro$")
//    public void casoOAcessoDeErro() throws Throwable {
//        String teste;
//        teste = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/div[1]/span)")).getText();
//        System.out.println(teste);
//
//    }

    @Dado("^e entrar$")
    public void eEntrar() throws Throwable {
        driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/form/div/div[3]/div/div")).click();
    }

    @Entao("^digitar a (.*)$")
    public void digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(String arg1) throws Throwable {
        driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div/div")).sendKeys(arg1);

    }

    @Entao("^realizar o twitte$")
    public void realizarOTwitte() throws Throwable {

        Point coordinates = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div[2]/div/div/div[2]/div[3]")).getLocation();
        Robot robot = new Robot();
        robot.mouseMove(coordinates.getX()+60,coordinates.getY()+180);
        robot.mousePress(InputEvent.BUTTON1_DOWN_MASK);
        robot.mouseRelease(InputEvent.BUTTON1_DOWN_MASK);
        robot.mousePress(InputEvent.BUTTON1_DOWN_MASK);
        robot.mouseRelease(InputEvent.BUTTON1_DOWN_MASK);
        robot.mousePress(InputEvent.BUTTON1_DOWN_MASK);

    }


}
