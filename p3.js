class User{
    static count =0;
    
    constructor(username, email, password){
          this.username=username;
          this.email=email;
          this.password=password;
          User.count++;
          let rDate = new Date();
          let date = rDate.getDate();
          let month = rDate.getMonth();
          let year = rDate.getFullYear();
          let membershipactivetilldate = new Date(year,month+1,date);
            console.log(`Hi ${this.username}, you have free trial membership till : ${membershipactivetilldate}`);
          }
     
     renewMembership(policy){
        let rDate = new Date();
          let date = rDate.getDate();
          let month = rDate.getMonth();
          let year = rDate.getFullYear();
        if(policy=='Standard'){
           let membershipactivetilldate1 = new Date(year,month+1,date);
          
        console.log(`Hi ${this.username}, your Standard Package is valid till : ${membershipactivetilldate1}`);
        }else if ('Yearly'){
            let membershipactivetilldate1 = new Date(year+1,month,date);
            console.log(`Hi ${this.username}, your Yearly Package is valid till : ${membershipactivetilldate1}`);
        }
     }
    
    static registeredUsers(){
        console.log(User.count);
        }
    
    register(){
        console.log(this.username +' is now registered'); 
    }
    
}
const bob = new User ('bob','bob@gmail.com',12345,2020,11,3);
const raj = new User ('raj','raj@gmail.com',126345,new Date(2020,1,3));

bob.register();
raj.register();
User.registeredUsers();
bob.renewMembership('Standard');
raj.renewMembership('Yearly');  
