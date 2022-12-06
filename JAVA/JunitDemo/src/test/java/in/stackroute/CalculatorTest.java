package in.stackroute;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    Calculator calc=null;

    @BeforeEach
    public void beforeEach(){
         calc = new Calculator();
    }

    @AfterEach
    public void afterEach(){
        calc=null;
    }

    @Test
    public void sampleTest() {
        System.out.println("Test executed");
    }

//    @RepeatedTest(2)
    @Test
    @DisplayName("Addition method")
    public void addTest() {

       assertEquals(40, calc.add(10,30),"Test case failed for add");
       assertEquals(-40,calc.add(-10,-30),"Test case failed for add");
       assertEquals(20,calc.add(-10,30),"Test case failed for add");
        assertEquals(-20,calc.add(10,-30),"Test case failed for add");
    }

//    @Test
//    public void divisionTest(){
//     assertEquals(4,calc.div(20,5),"Test case failed for division");
//    }

    @Test
    public void newDivisionTest(){
        Exception exception = assertThrows(ArithmeticException.class, () ->
                Calculator.div(1, 0));
        assertEquals("/ by zero", exception.getMessage());
    }
    }

