 function runfunc() {
    
    //Prototype Tabanlı Kalıtım(Miras)
    console.log("program çalışıyor...");
        const ad = document.getElementById("ad");
        const oldInfos = document.getElementById("oldInfos");
        const newInfos = document.getElementById("newInfos");

        function Person(name,age){ //Person(kişi) constructor'ımızı oluşturduk. name ve age adlı iki parametre alacağını belirttik.
            this.name = name; //this ile person objesinin aldığı name parametresini name'e eşitledik.
            this.age = age; 
        }
        Person.prototype.showInfos = function(){ //Person objemizin prototype'ına showInfos methodunu ekledik.
            oldInfos.innerHTML = ("İsim: " + this.name + " Yaş: " + this.age);
        }

        function Employee(name,age,salary){ //Employee(Çalışan) Constructor'ımızı oluşturduk.
            this.name = name;
            this.age = age;
            this.salary = salary;
        }
        Employee.prototype = Object.create(Person.prototype);//Person() Objemizi ve methodlarını Object.create() methodunu kullanarak tamamiyle Employee() Objelerimize miras bıraktık.Yani Empolyee objemizin prototype'ını Person() objesi oalrak belirledik.
        Employee.prototype.showInfos = function(){
            newInfos.innerHTML = "İsim: "+ this.name + " Yaş: " + this.age + " Maaş: " + this.salary;
         }
        function zam(emp){
            const zam = 18;
            const newMaas = emp.salary + ((emp.salary * zam) / 100);
            if(emp.name === "Eren")
            {
                newInfos.innerHTML = emp.name + "'in %"+ zam +" zamlı maaşı: " + newMaas;
            }else if(emp.name === "Eda"){
                newInfos.innerHTML = emp.name + "'in %"+ zam +" zamlı maaşı: " + newMaas;
            }
            
        }
        function search() {
            if(ad.value === "Eren"){
                const emp = new Employee(ad.value,18,15000);
                oldInfos.innerHTML = ("İsim: "+ emp.name + " Yaş: " + emp.age + " Maaş: " + emp.salary);
                emp.showInfos();
                zam.call(emp,emp);
            }else if(ad.value === "Eda"){
                const emp = new Employee(ad.value,18,10000);
                oldInfos.innerHTML = "İsim: "+ emp.name + " Yaş: " + emp.age + " Maaş: " + emp.salary;
                emp.showInfos();
                zam.call(emp,emp);
            }else{
                alert(ad.value + " kişisine zam yapılmadı!");
            }
        }
       search();
       
    //Prototype Tabanlı Kalıtım(Miras) End

}