/*
$("#myBtn").click(function(){

    $(".test").slideUp(2000);

})
$("section").animate({width:'100%'},function(){
    $("section").animate({height:'100%'},1000,function(){
        $("section h2").fadeIn(1000),function(){

        }
    })
})*/

class User
{
    constructor(name,age,gender)
    {
        this.name = name;
        this.age = age;
        this.userGender = gender;
    }
    welcome()
    {
        window.alert(`welcome${this.name}`);

    }
    getBirthYear()
    {
        let d = new Date().getFullYear();
        window.alert(d-this.age);
    }
}
