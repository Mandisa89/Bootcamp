// 12 March 2023
// Mandisa Macleod

// L1T20 - OOP III (Inheritance)

class Courses{

    constructor(courseName, contactWebsite){

        this.courseName = courseName;
        this.contactWebsite = contactWebsite;
    }

    // method to display the contact website of the selected course
    displayWebsite(){

        return `The contact website of ${this.courseName} is ${this.contactWebsite}.`;
    }
}


// ----- create subclass of "Courses" called "Subjects" ----- //

// use keyword "extend" to have class "Subject" inherit attributes from class "Courses"
class Subjects extends Courses{

    // ensure all exisiting attributes of the super class remain the same
    constructor(courseName, contactWebsite, subjectName, lecturer){
        
        super(courseName, contactWebsite);

        this.subjectName = subjectName;
        this.lecturer = lecturer;
       
    }
    
    // method to display which course this subject belongs to 
    whichCourseDoesSubjectBelongTo(){

        return `The subject "${this.subjectName}" belongs to the course on "${this.courseName}".`;
    }

    // method to display details of this course
    // use method overriding
    // keep name of method used in Course the exact same
    displayWebsite(){

        return `The contact website for the subject "${this.subjectName}" is ${this.contactWebsite}.`;
    }


    // method to display lecturer
    taughtByWhom(){

        return `The subject "${this.subjectName}" is taught by ${this.lecturer}.`;
    }
    


}

// create at least three instances of class Subject

const houseplantCare = new Subjects("Botany","www.wits.ac.za","Houseplant Care", "Mr Helder", "Tuesdays");

const cookingForFour = new Subjects ("Gastronomy", "www.chefs.co.za", "Cooking For Four", "Madame Poisson", "Fridays");

const babyProofing = new Subjects ("Prenatal Course", "www.parenthood.co.za", "Baby Proofing", "Mrs van der Merwe", "Saturdays");

console.log(houseplantCare.taughtByWhom());
console.log(cookingForFour.whichCourseDoesSubjectBelongTo());
console.log(babyProofing.displayWebsite());



// REFERENCES:

// Hyperiondev.2021. L1T20 - OOP III "Inheritance". Retrieved on 12 March via shared Dropbox folder