import java.util.Scanner;

class CodeToSnap {
    public static void main(String[] args) {

        System.out.println("Welcome to CodeToSnap: I'm Yatharth Chauhan");

        Scanner input = new Scanner(System.in);

        System.out.print("Input your first name: ");
        String fname = input.next();

        System.out.print("Input your last name: ");
        String lname = input.next();

        System.out.println("Hello \n" + fname + " " + lname);

        input.close();
    }
}
