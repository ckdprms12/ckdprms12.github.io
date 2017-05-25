 var name="홍길동",age=21,flag=true,color=0xF00;
  document.write("일반변수:"+"이름="+name+", 나이="+age", 나이>20="+flag+", 색깔="+color+"<br/>");
  function MyClass(){
   this.name="홍길동"; this.age=21; this.flag=true;
   this.nextAge = function(a,b){
    document.write(b+"년 후 나이는"+(a+b)+"입니다."+"<br/>");}
}
   var person = new MyClass();
  document.write("객체변수:"+"이름="+person.name+", 나이="+person.age", 나이>20="+person.flag+"<br/>");
  person.nextAge(person.age,10);
  var color16= color.toString(16); document.write(color+""+color16);
