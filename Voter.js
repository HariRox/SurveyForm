class Voter{
    constructor(){}
    getCount(){
      var voterCountRef = database.ref('voterCount');
      voterCountRef.on("value" , function(data){
        let voterCountvalue = data.val();
        if (voterCountvalue != null) {
            voterCount = voterCountvalue;
        }
        else{
            voterCount = 0;
        }
      });
    }
    updateCount(count){
        database.ref('/').update({
            voterCount:count
        });
    }

    update(name, age, gender, q1, q2, q3){
        var voterIndex = "voter" + voterCount;
        database.ref(voterIndex).set({
            name:name,
            age:age,
            gender:gender,
            question1:q1,
            question2:q2,
            question3:q3
        });
    }
};