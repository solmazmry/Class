// Person adlı bir sinif yaradın. Bu sinif ad (name) və yaş (age) xüsusiyyətlərinə sahib olsun.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    // console.log("Salam, mənim adım " + this.name +" və mən " +this.age+ " yaşındayam.");
  }
}
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age, jobTitle);
    this.jobTitle = jobTitle;
  }
  information() {
    console.log(
      "Mənim adim " +
        this.name +
        ", " +
        this.age +
        " yaşım var, " +
        this.jobTitle +
        " işləyirəm"
    );
  }
}

const employee = new Employee("Solmaz", 22, "Developer");

// console.log(employee);

// Person sinifindən bir obyekt yaradın və bu obyektin adını və yaşını konsola yazdırın.
// console.log(person.name);
// console.log(person.age);

// Person sinifinə bir greet metodu əlavə edin. Bu metod "Salam, mənim adım [name] və mən [age] yaşındayam" şəklində bir mesaj döndərsin.
//  person.greet()
// Bu metodu istifadə edərək Person sinifindən yaratdığınız obyektin salamlamasını konsola yazdırın.
// console.log( "salam "+employee.name);

// Employee adlı bir sinif yaradın və bu sinif Person sinifindən törəsin.

// Employee sinifinə əlavə olaraq jobTitle (vəzifə adı) xüsusiyyəti əlavə edin.

// Employee sinifindən bir obyekt yaradın və bu obyektin bütün xüsusiyyətlərini və metodlarını istifadə edərək bir mesaj konsola yazdırın.
employee.information();

// BankAccount adlı bir sinif yaradın. Bu sinifin bir balance (balans) xüsusiyyəti və deposit və withdraw metodlarına sahib olsun.
class BankAccount {
    #balance 
  constructor(balance, deposit, withdraw) {

  
    this.#balance = balance;
   
  }
 
  deposit(amount) {
 const dep= this.#balance+=amount
 console.log(`${amount } deposit`);
  }
  withdraw(amount) {
    const witts= this.#balance-=amount
    console.log(`${amount } withdraws`);
    console.log(`qalan: ${this.#balance}`);
  }
}

const bankAccount = new BankAccount(80000000);
bankAccount.deposit(5000);
bankAccount.withdraw(700);

// balance xüsusiyyətini özəl (private) edin və yalnız deposit və withdraw metodları vasitəsilə əlçatan edin.
// Bir BankAccount obyekti yaradın, balans əlavə edin və çıxarın, ardından balansı konsola yazdırın.
