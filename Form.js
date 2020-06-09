//create the form class
class Form{
  constructor(){}
  display(){
      var title = createElement('h2');
      title.html("Survey Form");
      title.position(430,0);
       
      var input = createInput("Name");
      var button = createButton('OK');
      input.position(430,160);
      button.position(550,600);
    
      var greeting = createElement('h3');
      
      var age = createInput("Your Age");
      age.position(430,200);

      var gender = createInput("Your Gender");
      gender.position(430,240);
      
      var question1 = createElement('h4');
      question1.html("1. Do you think we need to have free lunch meals in our school for very poor children?");
      question1.position(430,280);
      var option1 = createInput("Yes / No");
      option1.position(430,320);
     

     //create the second question and its answer box
      var question2 = createElement('h4');
      question2.html("2. Would you be willing to contribute a small amount every month for such a program?");
      question2.position(430,380);
      var option3 = createInput("Yes / No");
      option3.position(430,420);
      

      //create the third question and its money box
      var question3 = createElement('h4');
      question3.html("3. If yes, how much would you like to be willing to pay? And if not, why?");
      question3.position(430,480);
      var amount = createInput("Amount(in rupees) / Reason");
      amount.position(430,520);
      
      button.mousePressed(function(){

         input.hide();
         button.hide();
         age.hide();
         gender.hide();
         question1.hide();
         option1.hide();
         question2.hide();
         option3.hide();
         question3.hide();
         amount.hide();

         var name = input.value();
         var ageValue = age.value();
         var genderValue = gender.value();
         var q1 = option1.value() 
         var q2 = option3.value() 
         var q3 = amount.value();

         voter.getCount();
         voterCount += 1;

         voter.update(name, ageValue, genderValue, q1,q2,q3);
         voter.updateCount(voterCount);

         greeting.html("Your Vote is saved in database");
         greeting.position(530,160);
      })
    }
};